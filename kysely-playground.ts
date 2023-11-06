import { 
  Generated,
  DummyDriver,
  Kysely,
  PostgresAdapter,
  PostgresIntrospector,
  PostgresQueryCompiler,
} from 'kysely'

interface Person {
  id: Generated<number>
  first_name: string
  last_name: string | null
}

interface Post {
  id: Generated<number>
  text: string
  person_id: string
}

interface Database {
  person: Person;
  post: Post;
}

const db = new Kysely<Database>({
  dialect: {
    createAdapter: () => new PostgresAdapter(),
    createDriver: () => new DummyDriver(),
    createIntrospector: (db) => new PostgresIntrospector(db),
    createQueryCompiler: () => new PostgresQueryCompiler(),
  },
})

db.selectFrom('person')
.innerJoin('post', 'post.person_id', 'person.id')
.where('person.first_name', '=', 'Jason')
.select(['id', 'first_name', 'last_name'])