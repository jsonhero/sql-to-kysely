import { ColidContext, ColumnElemContext, ColumnlistContext, ColumnrefContext, From_listContext, Join_qualContext, PostgreSQLParser, Select_clauseContext, SelectstmtContext, Simple_select_pramaryContext, Table_refContext, Target_labelContext, Target_listContext, A_exprContext, Where_clauseContext, A_expr_orContext, A_expr_betweenContext, A_expr_likeContext } from '../__generated__/PostgreSQLParser';
import PostgreSQLVisitor from '../__generated__/PostgreSQLParserVisitor'


export class PostgreSQLToKyselyVisitor extends PostgreSQLVisitor<string> {
  // selectFrom()
  // visitSelectstmt =(ctx: SelectstmtContext) => {

  //   ctx.select_no_parens().select_clause().
  //   return 'SELECT '
  // }

  visitSimple_select_pramary = (ctx: Simple_select_pramaryContext) => {
    // Handle from + joins
    let code: string = ctx.from_clause().from_list().accept(this)

    // Handle selects
    const selectList = ctx.opt_target_list().target_list().accept(this)
    code += `.select(['${selectList}'])`

    

    // Handle wheres
    if (ctx.where_clause().WHERE() !== null) {
      code += ctx.where_clause().accept(this)
    }

    return code
  }

  // 'select' target list
  visitTarget_list = (ctx: Target_listContext): string => {
    return ctx.target_el_list().map((targetEl) => {
      if (targetEl instanceof Target_labelContext) {
        return targetEl.accept<string>(this)
      }
    }).join("', '")
  };

  // 'select' column label
  visitTarget_label = (ctx: Target_labelContext): string => {
    let code = ctx.a_expr().accept(this)
    if (ctx.AS() !== null) {
      code += ' as ' + ctx.collabel().getText()
    }

    return code
  }

  // 'from'
  visitFrom_list = (ctx: From_listContext): string => {
    return ctx.table_ref_list().flatMap((ref) => {
      return ref.accept(this)
    }).join(' -- not supported -- ')
  }

  // 'table'
  visitTable_ref = (ctx: Table_refContext) => {
    const list = ctx.table_ref_list()

    const tableName = ctx.relation_expr().getText()

    let code = `selectFrom('${tableName}')`

    if (list.length > 0) {

      for (let i = 0; i < ctx.table_ref_list().length; i++) {
        const tableRef = ctx.table_ref(i)
        const joinType = ctx.join_type(i)
        // const join = ctx.JOIN(i)
        const joinQual = ctx.join_qual(i)

        if (joinType.INNER_P() !== null) {
          code += '.innerJoin('
        } else if (joinType.LEFT() !== null) {
          code += '.leftJoin('
        } else if (joinType.RIGHT() !== null) {
          code += '.rightJoin('
        }

        code += `'${tableRef.relation_expr().getText()}', `

        code += joinQual.accept<string>(this)

        code += ')'
      }
    }

    return code
  }

  // join 'on'
  visitJoin_qual = (ctx: Join_qualContext): string => {
    let code = ''
    if (ctx.ON() !== null) {
      const compare = ctx
        .a_expr()
        .a_expr_qual()
        .a_expr_lessless()
        .a_expr_or(0)
        .a_expr_and(0)
        .a_expr_between(0)
        .a_expr_in(0)
        .a_expr_unary_not()
        .a_expr_isnull()
        .a_expr_is_not()
        .a_expr_compare()

      if (compare.EQUAL() !== null) {
        code += `'${compare.a_expr_like(0).getText()}', '${compare.a_expr_like(1).getText()}'`
      }
    }

    return code
  }


  visitColumnref = (ctx: ColumnrefContext) => {
    return ctx.getText()
  }

  visitWhere_clause = (ctx: Where_clauseContext): string => {
    return ctx.a_expr().accept<string>(this)
  }

  // generic 'expression'
  visitA_expr = (ctx: A_exprContext): string => {
    const orExpressions = ctx
      .a_expr_qual()
      .a_expr_lessless()
      .a_expr_or_list()
      .map((or) => or.accept<string>(this)).join('')
    return orExpressions
  }

  visitA_expr_or = (ctx: A_expr_orContext): string => {
    const andExpressions = ctx.a_expr_and_list().flatMap((and) => {
      return and.a_expr_between_list().map((between) => {
        return between.accept<string>(this)
      }).join('')
    }).join('')

    return andExpressions
  }

  visitA_expr_between = (ctx: A_expr_betweenContext) => {
    let code = ''
    
    const compare = ctx
      .a_expr_in(0)
      .a_expr_unary_not()
      .a_expr_isnull()
      .a_expr_is_not()
      .a_expr_compare()

    if (compare.EQUAL() !== null) {
      code += '.where('

      code += `'${compare.a_expr_like(0).accept(this)}', '=', '${compare.a_expr_like(1).accept(this)}'`
  
      code += ')'
    } else {
      if (compare.a_expr_like_list().length === 1) {
        code = compare.a_expr_like(0).accept(this)
      } else {
        code += compare.getText()
      }
    }

    return code
  }

  visitA_expr_like = (ctx: A_expr_likeContext) => {
    const cExpr = ctx
      .a_expr_qual_op(0)
      .a_expr_unary_qualop(0)
      .a_expr_add()
      .a_expr_mul(0)
      .a_expr_caret(0)
      .a_expr_unary_sign()
      .a_expr_at_time_zone()
      .a_expr_collate()
      .a_expr_typecast()
      // Child? expression
      .c_expr()
    
    if (cExpr.getChildCount() === 1) {
      const child = cExpr.getChild(0)
      if (child instanceof ColumnrefContext) {
        child.accept(this)
      }

    }

  
    return ctx.getText()
  }
}
