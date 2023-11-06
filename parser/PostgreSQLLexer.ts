// Generated from PostgreSQLLexer.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
import {
	ATN,
	ATNDeserializer,
	CharStream,
	DecisionState, DFA,
	Lexer,
	LexerATNSimulator,
	RuleContext,
	PredictionContextCache,
	Token
} from "antlr4";


import { PostgreSQLLexerBase } from './PostgreSQLLexerBase';

export class PostgreSQLLexer extends PostgreSQLLexerBase {
	public static readonly Dollar = 1;
	public static readonly OPEN_PAREN = 2;
	public static readonly CLOSE_PAREN = 3;
	public static readonly OPEN_BRACKET = 4;
	public static readonly CLOSE_BRACKET = 5;
	public static readonly COMMA = 6;
	public static readonly SEMI = 7;
	public static readonly COLON = 8;
	public static readonly STAR = 9;
	public static readonly EQUAL = 10;
	public static readonly DOT = 11;
	public static readonly PLUS = 12;
	public static readonly MINUS = 13;
	public static readonly SLASH = 14;
	public static readonly CARET = 15;
	public static readonly LT = 16;
	public static readonly GT = 17;
	public static readonly LESS_LESS = 18;
	public static readonly GREATER_GREATER = 19;
	public static readonly COLON_EQUALS = 20;
	public static readonly LESS_EQUALS = 21;
	public static readonly EQUALS_GREATER = 22;
	public static readonly GREATER_EQUALS = 23;
	public static readonly DOT_DOT = 24;
	public static readonly NOT_EQUALS = 25;
	public static readonly TYPECAST = 26;
	public static readonly PERCENT = 27;
	public static readonly PARAM = 28;
	public static readonly Operator = 29;
	public static readonly ALL = 30;
	public static readonly ANALYSE = 31;
	public static readonly ANALYZE = 32;
	public static readonly AND = 33;
	public static readonly ANY = 34;
	public static readonly ARRAY = 35;
	public static readonly AS = 36;
	public static readonly ASC = 37;
	public static readonly ASYMMETRIC = 38;
	public static readonly BOTH = 39;
	public static readonly CASE = 40;
	public static readonly CAST = 41;
	public static readonly CHECK = 42;
	public static readonly COLLATE = 43;
	public static readonly COLUMN = 44;
	public static readonly CONSTRAINT = 45;
	public static readonly CREATE = 46;
	public static readonly CURRENT_CATALOG = 47;
	public static readonly CURRENT_DATE = 48;
	public static readonly CURRENT_ROLE = 49;
	public static readonly CURRENT_TIME = 50;
	public static readonly CURRENT_TIMESTAMP = 51;
	public static readonly CURRENT_USER = 52;
	public static readonly DEFAULT = 53;
	public static readonly DEFERRABLE = 54;
	public static readonly DESC = 55;
	public static readonly DISTINCT = 56;
	public static readonly DO = 57;
	public static readonly ELSE = 58;
	public static readonly EXCEPT = 59;
	public static readonly FALSE_P = 60;
	public static readonly FETCH = 61;
	public static readonly FOR = 62;
	public static readonly FOREIGN = 63;
	public static readonly FROM = 64;
	public static readonly GRANT = 65;
	public static readonly GROUP_P = 66;
	public static readonly HAVING = 67;
	public static readonly IN_P = 68;
	public static readonly INITIALLY = 69;
	public static readonly INTERSECT = 70;
	public static readonly INTO = 71;
	public static readonly LATERAL_P = 72;
	public static readonly LEADING = 73;
	public static readonly LIMIT = 74;
	public static readonly LOCALTIME = 75;
	public static readonly LOCALTIMESTAMP = 76;
	public static readonly NOT = 77;
	public static readonly NULL_P = 78;
	public static readonly OFFSET = 79;
	public static readonly ON = 80;
	public static readonly ONLY = 81;
	public static readonly OR = 82;
	public static readonly ORDER = 83;
	public static readonly PLACING = 84;
	public static readonly PRIMARY = 85;
	public static readonly REFERENCES = 86;
	public static readonly RETURNING = 87;
	public static readonly SELECT = 88;
	public static readonly SESSION_USER = 89;
	public static readonly SOME = 90;
	public static readonly SYMMETRIC = 91;
	public static readonly TABLE = 92;
	public static readonly THEN = 93;
	public static readonly TO = 94;
	public static readonly TRAILING = 95;
	public static readonly TRUE_P = 96;
	public static readonly UNION = 97;
	public static readonly UNIQUE = 98;
	public static readonly USER = 99;
	public static readonly USING = 100;
	public static readonly VARIADIC = 101;
	public static readonly WHEN = 102;
	public static readonly WHERE = 103;
	public static readonly WINDOW = 104;
	public static readonly WITH = 105;
	public static readonly AUTHORIZATION = 106;
	public static readonly BINARY = 107;
	public static readonly COLLATION = 108;
	public static readonly CONCURRENTLY = 109;
	public static readonly CROSS = 110;
	public static readonly CURRENT_SCHEMA = 111;
	public static readonly FREEZE = 112;
	public static readonly FULL = 113;
	public static readonly ILIKE = 114;
	public static readonly INNER_P = 115;
	public static readonly IS = 116;
	public static readonly ISNULL = 117;
	public static readonly JOIN = 118;
	public static readonly LEFT = 119;
	public static readonly LIKE = 120;
	public static readonly NATURAL = 121;
	public static readonly NOTNULL = 122;
	public static readonly OUTER_P = 123;
	public static readonly OVER = 124;
	public static readonly OVERLAPS = 125;
	public static readonly RIGHT = 126;
	public static readonly SIMILAR = 127;
	public static readonly VERBOSE = 128;
	public static readonly ABORT_P = 129;
	public static readonly ABSOLUTE_P = 130;
	public static readonly ACCESS = 131;
	public static readonly ACTION = 132;
	public static readonly ADD_P = 133;
	public static readonly ADMIN = 134;
	public static readonly AFTER = 135;
	public static readonly AGGREGATE = 136;
	public static readonly ALSO = 137;
	public static readonly ALTER = 138;
	public static readonly ALWAYS = 139;
	public static readonly ASSERTION = 140;
	public static readonly ASSIGNMENT = 141;
	public static readonly AT = 142;
	public static readonly ATTRIBUTE = 143;
	public static readonly BACKWARD = 144;
	public static readonly BEFORE = 145;
	public static readonly BEGIN_P = 146;
	public static readonly BY = 147;
	public static readonly CACHE = 148;
	public static readonly CALLED = 149;
	public static readonly CASCADE = 150;
	public static readonly CASCADED = 151;
	public static readonly CATALOG = 152;
	public static readonly CHAIN = 153;
	public static readonly CHARACTERISTICS = 154;
	public static readonly CHECKPOINT = 155;
	public static readonly CLASS = 156;
	public static readonly CLOSE = 157;
	public static readonly CLUSTER = 158;
	public static readonly COMMENT = 159;
	public static readonly COMMENTS = 160;
	public static readonly COMMIT = 161;
	public static readonly COMMITTED = 162;
	public static readonly CONFIGURATION = 163;
	public static readonly CONNECTION = 164;
	public static readonly CONSTRAINTS = 165;
	public static readonly CONTENT_P = 166;
	public static readonly CONTINUE_P = 167;
	public static readonly CONVERSION_P = 168;
	public static readonly COPY = 169;
	public static readonly COST = 170;
	public static readonly CSV = 171;
	public static readonly CURSOR = 172;
	public static readonly CYCLE = 173;
	public static readonly DATA_P = 174;
	public static readonly DATABASE = 175;
	public static readonly DAY_P = 176;
	public static readonly DEALLOCATE = 177;
	public static readonly DECLARE = 178;
	public static readonly DEFAULTS = 179;
	public static readonly DEFERRED = 180;
	public static readonly DEFINER = 181;
	public static readonly DELETE_P = 182;
	public static readonly DELIMITER = 183;
	public static readonly DELIMITERS = 184;
	public static readonly DICTIONARY = 185;
	public static readonly DISABLE_P = 186;
	public static readonly DISCARD = 187;
	public static readonly DOCUMENT_P = 188;
	public static readonly DOMAIN_P = 189;
	public static readonly DOUBLE_P = 190;
	public static readonly DROP = 191;
	public static readonly EACH = 192;
	public static readonly ENABLE_P = 193;
	public static readonly ENCODING = 194;
	public static readonly ENCRYPTED = 195;
	public static readonly ENUM_P = 196;
	public static readonly ESCAPE = 197;
	public static readonly EVENT = 198;
	public static readonly EXCLUDE = 199;
	public static readonly EXCLUDING = 200;
	public static readonly EXCLUSIVE = 201;
	public static readonly EXECUTE = 202;
	public static readonly EXPLAIN = 203;
	public static readonly EXTENSION = 204;
	public static readonly EXTERNAL = 205;
	public static readonly FAMILY = 206;
	public static readonly FIRST_P = 207;
	public static readonly FOLLOWING = 208;
	public static readonly FORCE = 209;
	public static readonly FORWARD = 210;
	public static readonly FUNCTION = 211;
	public static readonly FUNCTIONS = 212;
	public static readonly GLOBAL = 213;
	public static readonly GRANTED = 214;
	public static readonly HANDLER = 215;
	public static readonly HEADER_P = 216;
	public static readonly HOLD = 217;
	public static readonly HOUR_P = 218;
	public static readonly IDENTITY_P = 219;
	public static readonly IF_P = 220;
	public static readonly IMMEDIATE = 221;
	public static readonly IMMUTABLE = 222;
	public static readonly IMPLICIT_P = 223;
	public static readonly INCLUDING = 224;
	public static readonly INCREMENT = 225;
	public static readonly INDEX = 226;
	public static readonly INDEXES = 227;
	public static readonly INHERIT = 228;
	public static readonly INHERITS = 229;
	public static readonly INLINE_P = 230;
	public static readonly INSENSITIVE = 231;
	public static readonly INSERT = 232;
	public static readonly INSTEAD = 233;
	public static readonly INVOKER = 234;
	public static readonly ISOLATION = 235;
	public static readonly KEY = 236;
	public static readonly LABEL = 237;
	public static readonly LANGUAGE = 238;
	public static readonly LARGE_P = 239;
	public static readonly LAST_P = 240;
	public static readonly LEAKPROOF = 241;
	public static readonly LEVEL = 242;
	public static readonly LISTEN = 243;
	public static readonly LOAD = 244;
	public static readonly LOCAL = 245;
	public static readonly LOCATION = 246;
	public static readonly LOCK_P = 247;
	public static readonly MAPPING = 248;
	public static readonly MATCH = 249;
	public static readonly MATCHED = 250;
	public static readonly MATERIALIZED = 251;
	public static readonly MAXVALUE = 252;
	public static readonly MERGE = 253;
	public static readonly MINUTE_P = 254;
	public static readonly MINVALUE = 255;
	public static readonly MODE = 256;
	public static readonly MONTH_P = 257;
	public static readonly MOVE = 258;
	public static readonly NAME_P = 259;
	public static readonly NAMES = 260;
	public static readonly NEXT = 261;
	public static readonly NO = 262;
	public static readonly NOTHING = 263;
	public static readonly NOTIFY = 264;
	public static readonly NOWAIT = 265;
	public static readonly NULLS_P = 266;
	public static readonly OBJECT_P = 267;
	public static readonly OF = 268;
	public static readonly OFF = 269;
	public static readonly OIDS = 270;
	public static readonly OPERATOR = 271;
	public static readonly OPTION = 272;
	public static readonly OPTIONS = 273;
	public static readonly OWNED = 274;
	public static readonly OWNER = 275;
	public static readonly PARSER = 276;
	public static readonly PARTIAL = 277;
	public static readonly PARTITION = 278;
	public static readonly PASSING = 279;
	public static readonly PASSWORD = 280;
	public static readonly PLANS = 281;
	public static readonly PRECEDING = 282;
	public static readonly PREPARE = 283;
	public static readonly PREPARED = 284;
	public static readonly PRESERVE = 285;
	public static readonly PRIOR = 286;
	public static readonly PRIVILEGES = 287;
	public static readonly PROCEDURAL = 288;
	public static readonly PROCEDURE = 289;
	public static readonly PROGRAM = 290;
	public static readonly QUOTE = 291;
	public static readonly RANGE = 292;
	public static readonly READ = 293;
	public static readonly REASSIGN = 294;
	public static readonly RECHECK = 295;
	public static readonly RECURSIVE = 296;
	public static readonly REF = 297;
	public static readonly REFRESH = 298;
	public static readonly REINDEX = 299;
	public static readonly RELATIVE_P = 300;
	public static readonly RELEASE = 301;
	public static readonly RENAME = 302;
	public static readonly REPEATABLE = 303;
	public static readonly REPLACE = 304;
	public static readonly REPLICA = 305;
	public static readonly RESET = 306;
	public static readonly RESTART = 307;
	public static readonly RESTRICT = 308;
	public static readonly RETURNS = 309;
	public static readonly REVOKE = 310;
	public static readonly ROLE = 311;
	public static readonly ROLLBACK = 312;
	public static readonly ROWS = 313;
	public static readonly RULE = 314;
	public static readonly SAVEPOINT = 315;
	public static readonly SCHEMA = 316;
	public static readonly SCROLL = 317;
	public static readonly SEARCH = 318;
	public static readonly SECOND_P = 319;
	public static readonly SECURITY = 320;
	public static readonly SEQUENCE = 321;
	public static readonly SEQUENCES = 322;
	public static readonly SERIALIZABLE = 323;
	public static readonly SERVER = 324;
	public static readonly SESSION = 325;
	public static readonly SET = 326;
	public static readonly SHARE = 327;
	public static readonly SHOW = 328;
	public static readonly SIMPLE = 329;
	public static readonly SNAPSHOT = 330;
	public static readonly STABLE = 331;
	public static readonly STANDALONE_P = 332;
	public static readonly START = 333;
	public static readonly STATEMENT = 334;
	public static readonly STATISTICS = 335;
	public static readonly STDIN = 336;
	public static readonly STDOUT = 337;
	public static readonly STORAGE = 338;
	public static readonly STRICT_P = 339;
	public static readonly STRIP_P = 340;
	public static readonly SYSID = 341;
	public static readonly SYSTEM_P = 342;
	public static readonly TABLES = 343;
	public static readonly TABLESPACE = 344;
	public static readonly TEMP = 345;
	public static readonly TEMPLATE = 346;
	public static readonly TEMPORARY = 347;
	public static readonly TEXT_P = 348;
	public static readonly TRANSACTION = 349;
	public static readonly TRIGGER = 350;
	public static readonly TRUNCATE = 351;
	public static readonly TRUSTED = 352;
	public static readonly TYPE_P = 353;
	public static readonly TYPES_P = 354;
	public static readonly UNBOUNDED = 355;
	public static readonly UNCOMMITTED = 356;
	public static readonly UNENCRYPTED = 357;
	public static readonly UNKNOWN = 358;
	public static readonly UNLISTEN = 359;
	public static readonly UNLOGGED = 360;
	public static readonly UNTIL = 361;
	public static readonly UPDATE = 362;
	public static readonly VACUUM = 363;
	public static readonly VALID = 364;
	public static readonly VALIDATE = 365;
	public static readonly VALIDATOR = 366;
	public static readonly VARYING = 367;
	public static readonly VERSION_P = 368;
	public static readonly VIEW = 369;
	public static readonly VOLATILE = 370;
	public static readonly WHITESPACE_P = 371;
	public static readonly WITHOUT = 372;
	public static readonly WORK = 373;
	public static readonly WRAPPER = 374;
	public static readonly WRITE = 375;
	public static readonly XML_P = 376;
	public static readonly YEAR_P = 377;
	public static readonly YES_P = 378;
	public static readonly ZONE = 379;
	public static readonly BETWEEN = 380;
	public static readonly BIGINT = 381;
	public static readonly BIT = 382;
	public static readonly BOOLEAN_P = 383;
	public static readonly CHAR_P = 384;
	public static readonly CHARACTER = 385;
	public static readonly COALESCE = 386;
	public static readonly DEC = 387;
	public static readonly DECIMAL_P = 388;
	public static readonly EXISTS = 389;
	public static readonly EXTRACT = 390;
	public static readonly FLOAT_P = 391;
	public static readonly GREATEST = 392;
	public static readonly INOUT = 393;
	public static readonly INT_P = 394;
	public static readonly INTEGER = 395;
	public static readonly INTERVAL = 396;
	public static readonly LEAST = 397;
	public static readonly NATIONAL = 398;
	public static readonly NCHAR = 399;
	public static readonly NONE = 400;
	public static readonly NULLIF = 401;
	public static readonly NUMERIC = 402;
	public static readonly OVERLAY = 403;
	public static readonly POSITION = 404;
	public static readonly PRECISION = 405;
	public static readonly REAL = 406;
	public static readonly ROW = 407;
	public static readonly SETOF = 408;
	public static readonly SMALLINT = 409;
	public static readonly SUBSTRING = 410;
	public static readonly TIME = 411;
	public static readonly TIMESTAMP = 412;
	public static readonly TREAT = 413;
	public static readonly TRIM = 414;
	public static readonly VALUES = 415;
	public static readonly VARCHAR = 416;
	public static readonly XMLATTRIBUTES = 417;
	public static readonly XMLCOMMENT = 418;
	public static readonly XMLAGG = 419;
	public static readonly XML_IS_WELL_FORMED = 420;
	public static readonly XML_IS_WELL_FORMED_DOCUMENT = 421;
	public static readonly XML_IS_WELL_FORMED_CONTENT = 422;
	public static readonly XPATH = 423;
	public static readonly XPATH_EXISTS = 424;
	public static readonly XMLCONCAT = 425;
	public static readonly XMLELEMENT = 426;
	public static readonly XMLEXISTS = 427;
	public static readonly XMLFOREST = 428;
	public static readonly XMLPARSE = 429;
	public static readonly XMLPI = 430;
	public static readonly XMLROOT = 431;
	public static readonly XMLSERIALIZE = 432;
	public static readonly CALL = 433;
	public static readonly CURRENT_P = 434;
	public static readonly ATTACH = 435;
	public static readonly DETACH = 436;
	public static readonly EXPRESSION = 437;
	public static readonly GENERATED = 438;
	public static readonly LOGGED = 439;
	public static readonly STORED = 440;
	public static readonly INCLUDE = 441;
	public static readonly ROUTINE = 442;
	public static readonly TRANSFORM = 443;
	public static readonly IMPORT_P = 444;
	public static readonly POLICY = 445;
	public static readonly METHOD = 446;
	public static readonly REFERENCING = 447;
	public static readonly NEW = 448;
	public static readonly OLD = 449;
	public static readonly VALUE_P = 450;
	public static readonly SUBSCRIPTION = 451;
	public static readonly PUBLICATION = 452;
	public static readonly OUT_P = 453;
	public static readonly END_P = 454;
	public static readonly ROUTINES = 455;
	public static readonly SCHEMAS = 456;
	public static readonly PROCEDURES = 457;
	public static readonly INPUT_P = 458;
	public static readonly SUPPORT = 459;
	public static readonly PARALLEL = 460;
	public static readonly SQL_P = 461;
	public static readonly DEPENDS = 462;
	public static readonly OVERRIDING = 463;
	public static readonly CONFLICT = 464;
	public static readonly SKIP_P = 465;
	public static readonly LOCKED = 466;
	public static readonly TIES = 467;
	public static readonly ROLLUP = 468;
	public static readonly CUBE = 469;
	public static readonly GROUPING = 470;
	public static readonly SETS = 471;
	public static readonly TABLESAMPLE = 472;
	public static readonly ORDINALITY = 473;
	public static readonly XMLTABLE = 474;
	public static readonly COLUMNS = 475;
	public static readonly XMLNAMESPACES = 476;
	public static readonly ROWTYPE = 477;
	public static readonly NORMALIZED = 478;
	public static readonly WITHIN = 479;
	public static readonly FILTER = 480;
	public static readonly GROUPS = 481;
	public static readonly OTHERS = 482;
	public static readonly NFC = 483;
	public static readonly NFD = 484;
	public static readonly NFKC = 485;
	public static readonly NFKD = 486;
	public static readonly UESCAPE = 487;
	public static readonly VIEWS = 488;
	public static readonly NORMALIZE = 489;
	public static readonly DUMP = 490;
	public static readonly PRINT_STRICT_PARAMS = 491;
	public static readonly VARIABLE_CONFLICT = 492;
	public static readonly ERROR = 493;
	public static readonly USE_VARIABLE = 494;
	public static readonly USE_COLUMN = 495;
	public static readonly ALIAS = 496;
	public static readonly CONSTANT = 497;
	public static readonly PERFORM = 498;
	public static readonly GET = 499;
	public static readonly DIAGNOSTICS = 500;
	public static readonly STACKED = 501;
	public static readonly ELSIF = 502;
	public static readonly WHILE = 503;
	public static readonly REVERSE = 504;
	public static readonly FOREACH = 505;
	public static readonly SLICE = 506;
	public static readonly EXIT = 507;
	public static readonly RETURN = 508;
	public static readonly QUERY = 509;
	public static readonly RAISE = 510;
	public static readonly SQLSTATE = 511;
	public static readonly DEBUG = 512;
	public static readonly LOG = 513;
	public static readonly INFO = 514;
	public static readonly NOTICE = 515;
	public static readonly WARNING = 516;
	public static readonly EXCEPTION = 517;
	public static readonly ASSERT = 518;
	public static readonly LOOP = 519;
	public static readonly OPEN = 520;
	public static readonly ABS = 521;
	public static readonly CBRT = 522;
	public static readonly CEIL = 523;
	public static readonly CEILING = 524;
	public static readonly DEGREES = 525;
	public static readonly DIV = 526;
	public static readonly EXP = 527;
	public static readonly FACTORIAL = 528;
	public static readonly FLOOR = 529;
	public static readonly GCD = 530;
	public static readonly LCM = 531;
	public static readonly LN = 532;
	public static readonly LOG10 = 533;
	public static readonly MIN_SCALE = 534;
	public static readonly MOD = 535;
	public static readonly PI = 536;
	public static readonly POWER = 537;
	public static readonly RADIANS = 538;
	public static readonly ROUND = 539;
	public static readonly SCALE = 540;
	public static readonly SIGN = 541;
	public static readonly SQRT = 542;
	public static readonly TRIM_SCALE = 543;
	public static readonly TRUNC = 544;
	public static readonly WIDTH_BUCKET = 545;
	public static readonly RANDOM = 546;
	public static readonly SETSEED = 547;
	public static readonly ACOS = 548;
	public static readonly ACOSD = 549;
	public static readonly ASIN = 550;
	public static readonly ASIND = 551;
	public static readonly ATAN = 552;
	public static readonly ATAND = 553;
	public static readonly ATAN2 = 554;
	public static readonly ATAN2D = 555;
	public static readonly COS = 556;
	public static readonly COSD = 557;
	public static readonly COT = 558;
	public static readonly COTD = 559;
	public static readonly SIN = 560;
	public static readonly SIND = 561;
	public static readonly TAN = 562;
	public static readonly TAND = 563;
	public static readonly SINH = 564;
	public static readonly COSH = 565;
	public static readonly TANH = 566;
	public static readonly ASINH = 567;
	public static readonly ACOSH = 568;
	public static readonly ATANH = 569;
	public static readonly BIT_LENGTH = 570;
	public static readonly CHAR_LENGTH = 571;
	public static readonly CHARACTER_LENGTH = 572;
	public static readonly LOWER = 573;
	public static readonly OCTET_LENGTH = 574;
	public static readonly UPPER = 575;
	public static readonly ASCII = 576;
	public static readonly BTRIM = 577;
	public static readonly CHR = 578;
	public static readonly CONCAT = 579;
	public static readonly CONCAT_WS = 580;
	public static readonly FORMAT = 581;
	public static readonly INITCAP = 582;
	public static readonly LENGTH = 583;
	public static readonly LPAD = 584;
	public static readonly LTRIM = 585;
	public static readonly MD5 = 586;
	public static readonly PARSE_IDENT = 587;
	public static readonly PG_CLIENT_ENCODING = 588;
	public static readonly QUOTE_IDENT = 589;
	public static readonly QUOTE_LITERAL = 590;
	public static readonly QUOTE_NULLABLE = 591;
	public static readonly REGEXP_COUNT = 592;
	public static readonly REGEXP_INSTR = 593;
	public static readonly REGEXP_LIKE = 594;
	public static readonly REGEXP_MATCH = 595;
	public static readonly REGEXP_MATCHES = 596;
	public static readonly REGEXP_REPLACE = 597;
	public static readonly REGEXP_SPLIT_TO_ARRAY = 598;
	public static readonly REGEXP_SPLIT_TO_TABLE = 599;
	public static readonly REGEXP_SUBSTR = 600;
	public static readonly REPEAT = 601;
	public static readonly RPAD = 602;
	public static readonly RTRIM = 603;
	public static readonly SPLIT_PART = 604;
	public static readonly STARTS_WITH = 605;
	public static readonly STRING_TO_ARRAY = 606;
	public static readonly STRING_TO_TABLE = 607;
	public static readonly STRPOS = 608;
	public static readonly SUBSTR = 609;
	public static readonly TO_ASCII = 610;
	public static readonly TO_HEX = 611;
	public static readonly TRANSLATE = 612;
	public static readonly UNISTR = 613;
	public static readonly AGE = 614;
	public static readonly CLOCK_TIMESTAMP = 615;
	public static readonly DATE_BIN = 616;
	public static readonly DATE_PART = 617;
	public static readonly DATE_TRUNC = 618;
	public static readonly ISFINITE = 619;
	public static readonly JUSTIFY_DAYS = 620;
	public static readonly JUSTIFY_HOURS = 621;
	public static readonly JUSTIFY_INTERVAL = 622;
	public static readonly MAKE_DATE = 623;
	public static readonly MAKE_INTERVAL = 624;
	public static readonly MAKE_TIME = 625;
	public static readonly MAKE_TIMESTAMP = 626;
	public static readonly MAKE_TIMESTAMPTZ = 627;
	public static readonly NOW = 628;
	public static readonly STATEMENT_TIMESTAMP = 629;
	public static readonly TIMEOFDAY = 630;
	public static readonly TRANSACTION_TIMESTAMP = 631;
	public static readonly TO_TIMESTAMP = 632;
	public static readonly TO_CHAR = 633;
	public static readonly TO_DATE = 634;
	public static readonly TO_NUMBER = 635;
	public static readonly Identifier = 636;
	public static readonly QuotedIdentifier = 637;
	public static readonly UnterminatedQuotedIdentifier = 638;
	public static readonly InvalidQuotedIdentifier = 639;
	public static readonly InvalidUnterminatedQuotedIdentifier = 640;
	public static readonly UnicodeQuotedIdentifier = 641;
	public static readonly UnterminatedUnicodeQuotedIdentifier = 642;
	public static readonly InvalidUnicodeQuotedIdentifier = 643;
	public static readonly InvalidUnterminatedUnicodeQuotedIdentifier = 644;
	public static readonly StringConstant = 645;
	public static readonly UnterminatedStringConstant = 646;
	public static readonly UnicodeEscapeStringConstant = 647;
	public static readonly UnterminatedUnicodeEscapeStringConstant = 648;
	public static readonly BeginDollarStringConstant = 649;
	public static readonly BinaryStringConstant = 650;
	public static readonly UnterminatedBinaryStringConstant = 651;
	public static readonly InvalidBinaryStringConstant = 652;
	public static readonly InvalidUnterminatedBinaryStringConstant = 653;
	public static readonly HexadecimalStringConstant = 654;
	public static readonly UnterminatedHexadecimalStringConstant = 655;
	public static readonly InvalidHexadecimalStringConstant = 656;
	public static readonly InvalidUnterminatedHexadecimalStringConstant = 657;
	public static readonly Integral = 658;
	public static readonly NumericFail = 659;
	public static readonly Numeric = 660;
	public static readonly PLSQLVARIABLENAME = 661;
	public static readonly PLSQLIDENTIFIER = 662;
	public static readonly Whitespace = 663;
	public static readonly Newline = 664;
	public static readonly LineComment = 665;
	public static readonly BlockComment = 666;
	public static readonly UnterminatedBlockComment = 667;
	public static readonly MetaCommand = 668;
	public static readonly EndMetaCommand = 669;
	public static readonly ErrorCharacter = 670;
	public static readonly EscapeStringConstant = 671;
	public static readonly UnterminatedEscapeStringConstant = 672;
	public static readonly InvalidEscapeStringConstant = 673;
	public static readonly InvalidUnterminatedEscapeStringConstant = 674;
	public static readonly AfterEscapeStringConstantMode_NotContinued = 675;
	public static readonly AfterEscapeStringConstantWithNewlineMode_NotContinued = 676;
	public static readonly DollarText = 677;
	public static readonly EndDollarStringConstant = 678;
	public static readonly AfterEscapeStringConstantWithNewlineMode_Continued = 679;
	public static readonly EOF = Token.EOF;
	public static readonly EscapeStringConstantMode = 1;
	public static readonly AfterEscapeStringConstantMode = 2;
	public static readonly AfterEscapeStringConstantWithNewlineMode = 3;
	public static readonly DollarQuotedStringMode = 4;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	public static readonly literalNames: (string | null)[] = [ null, "'$'", 
                                                            "'('", "')'", 
                                                            "'['", "']'", 
                                                            "','", "';'", 
                                                            "':'", "'*'", 
                                                            "'='", "'.'", 
                                                            "'+'", "'-'", 
                                                            "'/'", "'^'", 
                                                            "'<'", "'>'", 
                                                            "'<<'", "'>>'", 
                                                            "':='", "'<='", 
                                                            "'=>'", "'>='", 
                                                            "'..'", "'<>'", 
                                                            "'::'", "'%'", 
                                                            null, null, 
                                                            "'ALL'", "'ANALYSE'", 
                                                            "'ANALYZE'", 
                                                            "'AND'", "'ANY'", 
                                                            "'ARRAY'", "'AS'", 
                                                            "'ASC'", "'ASYMMETRIC'", 
                                                            "'BOTH'", "'CASE'", 
                                                            "'CAST'", "'CHECK'", 
                                                            "'COLLATE'", 
                                                            "'COLUMN'", 
                                                            "'CONSTRAINT'", 
                                                            "'CREATE'", 
                                                            "'CURRENT_CATALOG'", 
                                                            "'CURRENT_DATE'", 
                                                            "'CURRENT_ROLE'", 
                                                            "'CURRENT_TIME'", 
                                                            "'CURRENT_TIMESTAMP'", 
                                                            "'CURRENT_USER'", 
                                                            "'DEFAULT'", 
                                                            "'DEFERRABLE'", 
                                                            "'DESC'", "'DISTINCT'", 
                                                            "'DO'", "'ELSE'", 
                                                            "'EXCEPT'", 
                                                            "'FALSE'", "'FETCH'", 
                                                            "'FOR'", "'FOREIGN'", 
                                                            "'FROM'", "'GRANT'", 
                                                            "'GROUP'", "'HAVING'", 
                                                            "'IN'", "'INITIALLY'", 
                                                            "'INTERSECT'", 
                                                            "'INTO'", "'LATERAL'", 
                                                            "'LEADING'", 
                                                            "'LIMIT'", "'LOCALTIME'", 
                                                            "'LOCALTIMESTAMP'", 
                                                            "'NOT'", "'NULL'", 
                                                            "'OFFSET'", 
                                                            "'ON'", "'ONLY'", 
                                                            "'OR'", "'ORDER'", 
                                                            "'PLACING'", 
                                                            "'PRIMARY'", 
                                                            "'REFERENCES'", 
                                                            "'RETURNING'", 
                                                            "'SELECT'", 
                                                            "'SESSION_USER'", 
                                                            "'SOME'", "'SYMMETRIC'", 
                                                            "'TABLE'", "'THEN'", 
                                                            "'TO'", "'TRAILING'", 
                                                            "'TRUE'", "'UNION'", 
                                                            "'UNIQUE'", 
                                                            "'USER'", "'USING'", 
                                                            "'VARIADIC'", 
                                                            "'WHEN'", "'WHERE'", 
                                                            "'WINDOW'", 
                                                            "'WITH'", "'AUTHORIZATION'", 
                                                            "'BINARY'", 
                                                            "'COLLATION'", 
                                                            "'CONCURRENTLY'", 
                                                            "'CROSS'", "'CURRENT_SCHEMA'", 
                                                            "'FREEZE'", 
                                                            "'FULL'", "'ILIKE'", 
                                                            "'INNER'", "'IS'", 
                                                            "'ISNULL'", 
                                                            "'JOIN'", "'LEFT'", 
                                                            "'LIKE'", "'NATURAL'", 
                                                            "'NOTNULL'", 
                                                            "'OUTER'", "'OVER'", 
                                                            "'OVERLAPS'", 
                                                            "'RIGHT'", "'SIMILAR'", 
                                                            "'VERBOSE'", 
                                                            "'ABORT'", "'ABSOLUTE'", 
                                                            "'ACCESS'", 
                                                            "'ACTION'", 
                                                            "'ADD'", "'ADMIN'", 
                                                            "'AFTER'", "'AGGREGATE'", 
                                                            "'ALSO'", "'ALTER'", 
                                                            "'ALWAYS'", 
                                                            "'ASSERTION'", 
                                                            "'ASSIGNMENT'", 
                                                            "'AT'", "'ATTRIBUTE'", 
                                                            "'BACKWARD'", 
                                                            "'BEFORE'", 
                                                            "'BEGIN'", "'BY'", 
                                                            "'CACHE'", "'CALLED'", 
                                                            "'CASCADE'", 
                                                            "'CASCADED'", 
                                                            "'CATALOG'", 
                                                            "'CHAIN'", "'CHARACTERISTICS'", 
                                                            "'CHECKPOINT'", 
                                                            "'CLASS'", "'CLOSE'", 
                                                            "'CLUSTER'", 
                                                            "'COMMENT'", 
                                                            "'COMMENTS'", 
                                                            "'COMMIT'", 
                                                            "'COMMITTED'", 
                                                            "'CONFIGURATION'", 
                                                            "'CONNECTION'", 
                                                            "'CONSTRAINTS'", 
                                                            "'CONTENT'", 
                                                            "'CONTINUE'", 
                                                            "'CONVERSION'", 
                                                            "'COPY'", "'COST'", 
                                                            "'CSV'", "'CURSOR'", 
                                                            "'CYCLE'", "'DATA'", 
                                                            "'DATABASE'", 
                                                            "'DAY'", "'DEALLOCATE'", 
                                                            "'DECLARE'", 
                                                            "'DEFAULTS'", 
                                                            "'DEFERRED'", 
                                                            "'DEFINER'", 
                                                            "'DELETE'", 
                                                            "'DELIMITER'", 
                                                            "'DELIMITERS'", 
                                                            "'DICTIONARY'", 
                                                            "'DISABLE'", 
                                                            "'DISCARD'", 
                                                            "'DOCUMENT'", 
                                                            "'DOMAIN'", 
                                                            "'DOUBLE'", 
                                                            "'DROP'", "'EACH'", 
                                                            "'ENABLE'", 
                                                            "'ENCODING'", 
                                                            "'ENCRYPTED'", 
                                                            "'ENUM'", "'ESCAPE'", 
                                                            "'EVENT'", "'EXCLUDE'", 
                                                            "'EXCLUDING'", 
                                                            "'EXCLUSIVE'", 
                                                            "'EXECUTE'", 
                                                            "'EXPLAIN'", 
                                                            "'EXTENSION'", 
                                                            "'EXTERNAL'", 
                                                            "'FAMILY'", 
                                                            "'FIRST'", "'FOLLOWING'", 
                                                            "'FORCE'", "'FORWARD'", 
                                                            "'FUNCTION'", 
                                                            "'FUNCTIONS'", 
                                                            "'GLOBAL'", 
                                                            "'GRANTED'", 
                                                            "'HANDLER'", 
                                                            "'HEADER'", 
                                                            "'HOLD'", "'HOUR'", 
                                                            "'IDENTITY'", 
                                                            "'IF'", "'IMMEDIATE'", 
                                                            "'IMMUTABLE'", 
                                                            "'IMPLICIT'", 
                                                            "'INCLUDING'", 
                                                            "'INCREMENT'", 
                                                            "'INDEX'", "'INDEXES'", 
                                                            "'INHERIT'", 
                                                            "'INHERITS'", 
                                                            "'INLINE'", 
                                                            "'INSENSITIVE'", 
                                                            "'INSERT'", 
                                                            "'INSTEAD'", 
                                                            "'INVOKER'", 
                                                            "'ISOLATION'", 
                                                            "'KEY'", "'LABEL'", 
                                                            "'LANGUAGE'", 
                                                            "'LARGE'", "'LAST'", 
                                                            "'LEAKPROOF'", 
                                                            "'LEVEL'", "'LISTEN'", 
                                                            "'LOAD'", "'LOCAL'", 
                                                            "'LOCATION'", 
                                                            "'LOCK'", "'MAPPING'", 
                                                            "'MATCH'", "'MATCHED'", 
                                                            "'MATERIALIZED'", 
                                                            "'MAXVALUE'", 
                                                            "'MERGE'", "'MINUTE'", 
                                                            "'MINVALUE'", 
                                                            "'MODE'", "'MONTH'", 
                                                            "'MOVE'", "'NAME'", 
                                                            "'NAMES'", "'NEXT'", 
                                                            "'NO'", "'NOTHING'", 
                                                            "'NOTIFY'", 
                                                            "'NOWAIT'", 
                                                            "'NULLS'", "'OBJECT'", 
                                                            "'OF'", "'OFF'", 
                                                            "'OIDS'", "'OPERATOR'", 
                                                            "'OPTION'", 
                                                            "'OPTIONS'", 
                                                            "'OWNED'", "'OWNER'", 
                                                            "'PARSER'", 
                                                            "'PARTIAL'", 
                                                            "'PARTITION'", 
                                                            "'PASSING'", 
                                                            "'PASSWORD'", 
                                                            "'PLANS'", "'PRECEDING'", 
                                                            "'PREPARE'", 
                                                            "'PREPARED'", 
                                                            "'PRESERVE'", 
                                                            "'PRIOR'", "'PRIVILEGES'", 
                                                            "'PROCEDURAL'", 
                                                            "'PROCEDURE'", 
                                                            "'PROGRAM'", 
                                                            "'QUOTE'", "'RANGE'", 
                                                            "'READ'", "'REASSIGN'", 
                                                            "'RECHECK'", 
                                                            "'RECURSIVE'", 
                                                            "'REF'", "'REFRESH'", 
                                                            "'REINDEX'", 
                                                            "'RELATIVE'", 
                                                            "'RELEASE'", 
                                                            "'RENAME'", 
                                                            "'REPEATABLE'", 
                                                            "'REPLACE'", 
                                                            "'REPLICA'", 
                                                            "'RESET'", "'RESTART'", 
                                                            "'RESTRICT'", 
                                                            "'RETURNS'", 
                                                            "'REVOKE'", 
                                                            "'ROLE'", "'ROLLBACK'", 
                                                            "'ROWS'", "'RULE'", 
                                                            "'SAVEPOINT'", 
                                                            "'SCHEMA'", 
                                                            "'SCROLL'", 
                                                            "'SEARCH'", 
                                                            "'SECOND'", 
                                                            "'SECURITY'", 
                                                            "'SEQUENCE'", 
                                                            "'SEQUENCES'", 
                                                            "'SERIALIZABLE'", 
                                                            "'SERVER'", 
                                                            "'SESSION'", 
                                                            "'SET'", "'SHARE'", 
                                                            "'SHOW'", "'SIMPLE'", 
                                                            "'SNAPSHOT'", 
                                                            "'STABLE'", 
                                                            "'STANDALONE'", 
                                                            "'START'", "'STATEMENT'", 
                                                            "'STATISTICS'", 
                                                            "'STDIN'", "'STDOUT'", 
                                                            "'STORAGE'", 
                                                            "'STRICT'", 
                                                            "'STRIP'", "'SYSID'", 
                                                            "'SYSTEM'", 
                                                            "'TABLES'", 
                                                            "'TABLESPACE'", 
                                                            "'TEMP'", "'TEMPLATE'", 
                                                            "'TEMPORARY'", 
                                                            "'TEXT'", "'TRANSACTION'", 
                                                            "'TRIGGER'", 
                                                            "'TRUNCATE'", 
                                                            "'TRUSTED'", 
                                                            "'TYPE'", "'TYPES'", 
                                                            "'UNBOUNDED'", 
                                                            "'UNCOMMITTED'", 
                                                            "'UNENCRYPTED'", 
                                                            "'UNKNOWN'", 
                                                            "'UNLISTEN'", 
                                                            "'UNLOGGED'", 
                                                            "'UNTIL'", "'UPDATE'", 
                                                            "'VACUUM'", 
                                                            "'VALID'", "'VALIDATE'", 
                                                            "'VALIDATOR'", 
                                                            "'VARYING'", 
                                                            "'VERSION'", 
                                                            "'VIEW'", "'VOLATILE'", 
                                                            "'WHITESPACE'", 
                                                            "'WITHOUT'", 
                                                            "'WORK'", "'WRAPPER'", 
                                                            "'WRITE'", "'XML'", 
                                                            "'YEAR'", "'YES'", 
                                                            "'ZONE'", "'BETWEEN'", 
                                                            "'BIGINT'", 
                                                            "'BIT'", "'BOOLEAN'", 
                                                            "'CHAR'", "'CHARACTER'", 
                                                            "'COALESCE'", 
                                                            "'DEC'", "'DECIMAL'", 
                                                            "'EXISTS'", 
                                                            "'EXTRACT'", 
                                                            "'FLOAT'", "'GREATEST'", 
                                                            "'INOUT'", "'INT'", 
                                                            "'INTEGER'", 
                                                            "'INTERVAL'", 
                                                            "'LEAST'", "'NATIONAL'", 
                                                            "'NCHAR'", "'NONE'", 
                                                            "'NULLIF'", 
                                                            "'NUMERIC'", 
                                                            "'OVERLAY'", 
                                                            "'POSITION'", 
                                                            "'PRECISION'", 
                                                            "'REAL'", "'ROW'", 
                                                            "'SETOF'", "'SMALLINT'", 
                                                            "'SUBSTRING'", 
                                                            "'TIME'", "'TIMESTAMP'", 
                                                            "'TREAT'", "'TRIM'", 
                                                            "'VALUES'", 
                                                            "'VARCHAR'", 
                                                            "'XMLATTRIBUTES'", 
                                                            "'XMLCOMMENT'", 
                                                            "'XMLAGG'", 
                                                            "'XML_IS_WELL_FORMED'", 
                                                            "'XML_IS_WELL_FORMED_DOCUMENT'", 
                                                            "'XML_IS_WELL_FORMED_CONTENT'", 
                                                            "'XPATH'", "'XPATH_EXISTS'", 
                                                            "'XMLCONCAT'", 
                                                            "'XMLELEMENT'", 
                                                            "'XMLEXISTS'", 
                                                            "'XMLFOREST'", 
                                                            "'XMLPARSE'", 
                                                            "'XMLPI'", "'XMLROOT'", 
                                                            "'XMLSERIALIZE'", 
                                                            "'CALL'", "'CURRENT'", 
                                                            "'ATTACH'", 
                                                            "'DETACH'", 
                                                            "'EXPRESSION'", 
                                                            "'GENERATED'", 
                                                            "'LOGGED'", 
                                                            "'STORED'", 
                                                            "'INCLUDE'", 
                                                            "'ROUTINE'", 
                                                            "'TRANSFORM'", 
                                                            "'IMPORT'", 
                                                            "'POLICY'", 
                                                            "'METHOD'", 
                                                            "'REFERENCING'", 
                                                            "'NEW'", "'OLD'", 
                                                            "'VALUE'", "'SUBSCRIPTION'", 
                                                            "'PUBLICATION'", 
                                                            "'OUT'", "'END'", 
                                                            "'ROUTINES'", 
                                                            "'SCHEMAS'", 
                                                            "'PROCEDURES'", 
                                                            "'INPUT'", "'SUPPORT'", 
                                                            "'PARALLEL'", 
                                                            "'SQL'", "'DEPENDS'", 
                                                            "'OVERRIDING'", 
                                                            "'CONFLICT'", 
                                                            "'SKIP'", "'LOCKED'", 
                                                            "'TIES'", "'ROLLUP'", 
                                                            "'CUBE'", "'GROUPING'", 
                                                            "'SETS'", "'TABLESAMPLE'", 
                                                            "'ORDINALITY'", 
                                                            "'XMLTABLE'", 
                                                            "'COLUMNS'", 
                                                            "'XMLNAMESPACES'", 
                                                            "'ROWTYPE'", 
                                                            "'NORMALIZED'", 
                                                            "'WITHIN'", 
                                                            "'FILTER'", 
                                                            "'GROUPS'", 
                                                            "'OTHERS'", 
                                                            "'NFC'", "'NFD'", 
                                                            "'NFKC'", "'NFKD'", 
                                                            "'UESCAPE'", 
                                                            "'VIEWS'", "'NORMALIZE'", 
                                                            "'DUMP'", "'PRINT_STRICT_PARAMS'", 
                                                            "'VARIABLE_CONFLICT'", 
                                                            "'ERROR'", "'USE_VARIABLE'", 
                                                            "'USE_COLUMN'", 
                                                            "'ALIAS'", "'CONSTANT'", 
                                                            "'PERFORM'", 
                                                            "'GET'", "'DIAGNOSTICS'", 
                                                            "'STACKED'", 
                                                            "'ELSIF'", "'WHILE'", 
                                                            "'REVERSE'", 
                                                            "'FOREACH'", 
                                                            "'SLICE'", "'EXIT'", 
                                                            "'RETURN'", 
                                                            "'QUERY'", "'RAISE'", 
                                                            "'SQLSTATE'", 
                                                            "'DEBUG'", "'LOG'", 
                                                            "'INFO'", "'NOTICE'", 
                                                            "'WARNING'", 
                                                            "'EXCEPTION'", 
                                                            "'ASSERT'", 
                                                            "'LOOP'", "'OPEN'", 
                                                            "'ABS'", "'CBRT'", 
                                                            "'CEIL'", "'CEILING'", 
                                                            "'DEGREES'", 
                                                            "'DIV'", "'EXP'", 
                                                            "'FACTORIAL'", 
                                                            "'FLOOR'", "'GCD'", 
                                                            "'LCM'", "'LN'", 
                                                            "'LOG10'", "'MIN_SCALE'", 
                                                            "'MOD'", "'PI'", 
                                                            "'POWER'", "'RADIANS'", 
                                                            "'ROUND'", "'SCALE'", 
                                                            "'SIGN'", "'SQRT'", 
                                                            "'TRIM_SCALE'", 
                                                            "'TRUNC'", "'WIDTH_BUCKET'", 
                                                            "'RANDOM'", 
                                                            "'SETSEED'", 
                                                            "'ACOS'", "'ACOSD'", 
                                                            "'ASIN'", "'ASIND'", 
                                                            "'ATAN'", "'ATAND'", 
                                                            "'ATAN2'", "'ATAN2D'", 
                                                            "'COS'", "'COSD'", 
                                                            "'COT'", "'COTD'", 
                                                            "'SIN'", "'SIND'", 
                                                            "'TAN'", "'TAND'", 
                                                            "'SINH'", "'COSH'", 
                                                            "'TANH'", "'ASINH'", 
                                                            "'ACOSH'", "'ATANH'", 
                                                            "'BIT_LENGTH'", 
                                                            "'CHAR_LENGTH'", 
                                                            "'CHARACTER_LENGTH'", 
                                                            "'LOWER'", "'OCTET_LENGTH'", 
                                                            "'UPPER'", "'ASCII'", 
                                                            "'BTRIM'", "'CHR'", 
                                                            "'CONCAT'", 
                                                            "'CONCAT_WS'", 
                                                            "'FORMAT'", 
                                                            "'INITCAP'", 
                                                            "'LENGTH'", 
                                                            "'LPAD'", "'LTRIM'", 
                                                            "'MD5'", "'PARSE_IDENT'", 
                                                            "'PG_CLIENT_ENCODING'", 
                                                            "'QUOTE_IDENT'", 
                                                            "'QUOTE_LITERAL'", 
                                                            "'QUOTE_NULLABLE'", 
                                                            "'REGEXP_COUNT'", 
                                                            "'REGEXP_INSTR'", 
                                                            "'REGEXP_LIKE'", 
                                                            "'REGEXP_MATCH'", 
                                                            "'REGEXP_MATCHES'", 
                                                            "'REGEXP_REPLACE'", 
                                                            "'REGEXP_SPLIT_TO_ARRAY'", 
                                                            "'REGEXP_SPLIT_TO_TABLE'", 
                                                            "'REGEXP_SUBSTR'", 
                                                            "'REPEAT'", 
                                                            "'RPAD'", "'RTRIM'", 
                                                            "'SPLIT_PART'", 
                                                            "'STARTS_WITH'", 
                                                            "'STRING_TO_ARRAY'", 
                                                            "'STRING_TO_TABLE'", 
                                                            "'STRPOS'", 
                                                            "'SUBSTR'", 
                                                            "'TO_ASCII'", 
                                                            "'TO_HEX'", 
                                                            "'TRANSLATE'", 
                                                            "'UNISTR'", 
                                                            "'AGE'", "'CLOCK_TIMESTAMP'", 
                                                            "'DATE_BIN'", 
                                                            "'DATE_PART'", 
                                                            "'DATE_TRUNC'", 
                                                            "'ISFINITE'", 
                                                            "'JUSTIFY_DAYS'", 
                                                            "'JUSTIFY_HOURS'", 
                                                            "'JUSTIFY_INTERVAL'", 
                                                            "'MAKE_DATE'", 
                                                            "'MAKE_INTERVAL'", 
                                                            "'MAKE_TIME'", 
                                                            "'MAKE_TIMESTAMP'", 
                                                            "'MAKE_TIMESTAMPTZ'", 
                                                            "'NOW'", "'STATEMENT_TIMESTAMP'", 
                                                            "'TIMEOFDAY'", 
                                                            "'TRANSACTION_TIMESTAMP'", 
                                                            "'TO_TIMESTAMP'", 
                                                            "'TO_CHAR'", 
                                                            "'TO_DATE'", 
                                                            "'TO_NUMBER'", 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, "'\\\\'", 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, "'''" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "Dollar", 
                                                             "OPEN_PAREN", 
                                                             "CLOSE_PAREN", 
                                                             "OPEN_BRACKET", 
                                                             "CLOSE_BRACKET", 
                                                             "COMMA", "SEMI", 
                                                             "COLON", "STAR", 
                                                             "EQUAL", "DOT", 
                                                             "PLUS", "MINUS", 
                                                             "SLASH", "CARET", 
                                                             "LT", "GT", 
                                                             "LESS_LESS", 
                                                             "GREATER_GREATER", 
                                                             "COLON_EQUALS", 
                                                             "LESS_EQUALS", 
                                                             "EQUALS_GREATER", 
                                                             "GREATER_EQUALS", 
                                                             "DOT_DOT", 
                                                             "NOT_EQUALS", 
                                                             "TYPECAST", 
                                                             "PERCENT", 
                                                             "PARAM", "Operator", 
                                                             "ALL", "ANALYSE", 
                                                             "ANALYZE", 
                                                             "AND", "ANY", 
                                                             "ARRAY", "AS", 
                                                             "ASC", "ASYMMETRIC", 
                                                             "BOTH", "CASE", 
                                                             "CAST", "CHECK", 
                                                             "COLLATE", 
                                                             "COLUMN", "CONSTRAINT", 
                                                             "CREATE", "CURRENT_CATALOG", 
                                                             "CURRENT_DATE", 
                                                             "CURRENT_ROLE", 
                                                             "CURRENT_TIME", 
                                                             "CURRENT_TIMESTAMP", 
                                                             "CURRENT_USER", 
                                                             "DEFAULT", 
                                                             "DEFERRABLE", 
                                                             "DESC", "DISTINCT", 
                                                             "DO", "ELSE", 
                                                             "EXCEPT", "FALSE_P", 
                                                             "FETCH", "FOR", 
                                                             "FOREIGN", 
                                                             "FROM", "GRANT", 
                                                             "GROUP_P", 
                                                             "HAVING", "IN_P", 
                                                             "INITIALLY", 
                                                             "INTERSECT", 
                                                             "INTO", "LATERAL_P", 
                                                             "LEADING", 
                                                             "LIMIT", "LOCALTIME", 
                                                             "LOCALTIMESTAMP", 
                                                             "NOT", "NULL_P", 
                                                             "OFFSET", "ON", 
                                                             "ONLY", "OR", 
                                                             "ORDER", "PLACING", 
                                                             "PRIMARY", 
                                                             "REFERENCES", 
                                                             "RETURNING", 
                                                             "SELECT", "SESSION_USER", 
                                                             "SOME", "SYMMETRIC", 
                                                             "TABLE", "THEN", 
                                                             "TO", "TRAILING", 
                                                             "TRUE_P", "UNION", 
                                                             "UNIQUE", "USER", 
                                                             "USING", "VARIADIC", 
                                                             "WHEN", "WHERE", 
                                                             "WINDOW", "WITH", 
                                                             "AUTHORIZATION", 
                                                             "BINARY", "COLLATION", 
                                                             "CONCURRENTLY", 
                                                             "CROSS", "CURRENT_SCHEMA", 
                                                             "FREEZE", "FULL", 
                                                             "ILIKE", "INNER_P", 
                                                             "IS", "ISNULL", 
                                                             "JOIN", "LEFT", 
                                                             "LIKE", "NATURAL", 
                                                             "NOTNULL", 
                                                             "OUTER_P", 
                                                             "OVER", "OVERLAPS", 
                                                             "RIGHT", "SIMILAR", 
                                                             "VERBOSE", 
                                                             "ABORT_P", 
                                                             "ABSOLUTE_P", 
                                                             "ACCESS", "ACTION", 
                                                             "ADD_P", "ADMIN", 
                                                             "AFTER", "AGGREGATE", 
                                                             "ALSO", "ALTER", 
                                                             "ALWAYS", "ASSERTION", 
                                                             "ASSIGNMENT", 
                                                             "AT", "ATTRIBUTE", 
                                                             "BACKWARD", 
                                                             "BEFORE", "BEGIN_P", 
                                                             "BY", "CACHE", 
                                                             "CALLED", "CASCADE", 
                                                             "CASCADED", 
                                                             "CATALOG", 
                                                             "CHAIN", "CHARACTERISTICS", 
                                                             "CHECKPOINT", 
                                                             "CLASS", "CLOSE", 
                                                             "CLUSTER", 
                                                             "COMMENT", 
                                                             "COMMENTS", 
                                                             "COMMIT", "COMMITTED", 
                                                             "CONFIGURATION", 
                                                             "CONNECTION", 
                                                             "CONSTRAINTS", 
                                                             "CONTENT_P", 
                                                             "CONTINUE_P", 
                                                             "CONVERSION_P", 
                                                             "COPY", "COST", 
                                                             "CSV", "CURSOR", 
                                                             "CYCLE", "DATA_P", 
                                                             "DATABASE", 
                                                             "DAY_P", "DEALLOCATE", 
                                                             "DECLARE", 
                                                             "DEFAULTS", 
                                                             "DEFERRED", 
                                                             "DEFINER", 
                                                             "DELETE_P", 
                                                             "DELIMITER", 
                                                             "DELIMITERS", 
                                                             "DICTIONARY", 
                                                             "DISABLE_P", 
                                                             "DISCARD", 
                                                             "DOCUMENT_P", 
                                                             "DOMAIN_P", 
                                                             "DOUBLE_P", 
                                                             "DROP", "EACH", 
                                                             "ENABLE_P", 
                                                             "ENCODING", 
                                                             "ENCRYPTED", 
                                                             "ENUM_P", "ESCAPE", 
                                                             "EVENT", "EXCLUDE", 
                                                             "EXCLUDING", 
                                                             "EXCLUSIVE", 
                                                             "EXECUTE", 
                                                             "EXPLAIN", 
                                                             "EXTENSION", 
                                                             "EXTERNAL", 
                                                             "FAMILY", "FIRST_P", 
                                                             "FOLLOWING", 
                                                             "FORCE", "FORWARD", 
                                                             "FUNCTION", 
                                                             "FUNCTIONS", 
                                                             "GLOBAL", "GRANTED", 
                                                             "HANDLER", 
                                                             "HEADER_P", 
                                                             "HOLD", "HOUR_P", 
                                                             "IDENTITY_P", 
                                                             "IF_P", "IMMEDIATE", 
                                                             "IMMUTABLE", 
                                                             "IMPLICIT_P", 
                                                             "INCLUDING", 
                                                             "INCREMENT", 
                                                             "INDEX", "INDEXES", 
                                                             "INHERIT", 
                                                             "INHERITS", 
                                                             "INLINE_P", 
                                                             "INSENSITIVE", 
                                                             "INSERT", "INSTEAD", 
                                                             "INVOKER", 
                                                             "ISOLATION", 
                                                             "KEY", "LABEL", 
                                                             "LANGUAGE", 
                                                             "LARGE_P", 
                                                             "LAST_P", "LEAKPROOF", 
                                                             "LEVEL", "LISTEN", 
                                                             "LOAD", "LOCAL", 
                                                             "LOCATION", 
                                                             "LOCK_P", "MAPPING", 
                                                             "MATCH", "MATCHED", 
                                                             "MATERIALIZED", 
                                                             "MAXVALUE", 
                                                             "MERGE", "MINUTE_P", 
                                                             "MINVALUE", 
                                                             "MODE", "MONTH_P", 
                                                             "MOVE", "NAME_P", 
                                                             "NAMES", "NEXT", 
                                                             "NO", "NOTHING", 
                                                             "NOTIFY", "NOWAIT", 
                                                             "NULLS_P", 
                                                             "OBJECT_P", 
                                                             "OF", "OFF", 
                                                             "OIDS", "OPERATOR", 
                                                             "OPTION", "OPTIONS", 
                                                             "OWNED", "OWNER", 
                                                             "PARSER", "PARTIAL", 
                                                             "PARTITION", 
                                                             "PASSING", 
                                                             "PASSWORD", 
                                                             "PLANS", "PRECEDING", 
                                                             "PREPARE", 
                                                             "PREPARED", 
                                                             "PRESERVE", 
                                                             "PRIOR", "PRIVILEGES", 
                                                             "PROCEDURAL", 
                                                             "PROCEDURE", 
                                                             "PROGRAM", 
                                                             "QUOTE", "RANGE", 
                                                             "READ", "REASSIGN", 
                                                             "RECHECK", 
                                                             "RECURSIVE", 
                                                             "REF", "REFRESH", 
                                                             "REINDEX", 
                                                             "RELATIVE_P", 
                                                             "RELEASE", 
                                                             "RENAME", "REPEATABLE", 
                                                             "REPLACE", 
                                                             "REPLICA", 
                                                             "RESET", "RESTART", 
                                                             "RESTRICT", 
                                                             "RETURNS", 
                                                             "REVOKE", "ROLE", 
                                                             "ROLLBACK", 
                                                             "ROWS", "RULE", 
                                                             "SAVEPOINT", 
                                                             "SCHEMA", "SCROLL", 
                                                             "SEARCH", "SECOND_P", 
                                                             "SECURITY", 
                                                             "SEQUENCE", 
                                                             "SEQUENCES", 
                                                             "SERIALIZABLE", 
                                                             "SERVER", "SESSION", 
                                                             "SET", "SHARE", 
                                                             "SHOW", "SIMPLE", 
                                                             "SNAPSHOT", 
                                                             "STABLE", "STANDALONE_P", 
                                                             "START", "STATEMENT", 
                                                             "STATISTICS", 
                                                             "STDIN", "STDOUT", 
                                                             "STORAGE", 
                                                             "STRICT_P", 
                                                             "STRIP_P", 
                                                             "SYSID", "SYSTEM_P", 
                                                             "TABLES", "TABLESPACE", 
                                                             "TEMP", "TEMPLATE", 
                                                             "TEMPORARY", 
                                                             "TEXT_P", "TRANSACTION", 
                                                             "TRIGGER", 
                                                             "TRUNCATE", 
                                                             "TRUSTED", 
                                                             "TYPE_P", "TYPES_P", 
                                                             "UNBOUNDED", 
                                                             "UNCOMMITTED", 
                                                             "UNENCRYPTED", 
                                                             "UNKNOWN", 
                                                             "UNLISTEN", 
                                                             "UNLOGGED", 
                                                             "UNTIL", "UPDATE", 
                                                             "VACUUM", "VALID", 
                                                             "VALIDATE", 
                                                             "VALIDATOR", 
                                                             "VARYING", 
                                                             "VERSION_P", 
                                                             "VIEW", "VOLATILE", 
                                                             "WHITESPACE_P", 
                                                             "WITHOUT", 
                                                             "WORK", "WRAPPER", 
                                                             "WRITE", "XML_P", 
                                                             "YEAR_P", "YES_P", 
                                                             "ZONE", "BETWEEN", 
                                                             "BIGINT", "BIT", 
                                                             "BOOLEAN_P", 
                                                             "CHAR_P", "CHARACTER", 
                                                             "COALESCE", 
                                                             "DEC", "DECIMAL_P", 
                                                             "EXISTS", "EXTRACT", 
                                                             "FLOAT_P", 
                                                             "GREATEST", 
                                                             "INOUT", "INT_P", 
                                                             "INTEGER", 
                                                             "INTERVAL", 
                                                             "LEAST", "NATIONAL", 
                                                             "NCHAR", "NONE", 
                                                             "NULLIF", "NUMERIC", 
                                                             "OVERLAY", 
                                                             "POSITION", 
                                                             "PRECISION", 
                                                             "REAL", "ROW", 
                                                             "SETOF", "SMALLINT", 
                                                             "SUBSTRING", 
                                                             "TIME", "TIMESTAMP", 
                                                             "TREAT", "TRIM", 
                                                             "VALUES", "VARCHAR", 
                                                             "XMLATTRIBUTES", 
                                                             "XMLCOMMENT", 
                                                             "XMLAGG", "XML_IS_WELL_FORMED", 
                                                             "XML_IS_WELL_FORMED_DOCUMENT", 
                                                             "XML_IS_WELL_FORMED_CONTENT", 
                                                             "XPATH", "XPATH_EXISTS", 
                                                             "XMLCONCAT", 
                                                             "XMLELEMENT", 
                                                             "XMLEXISTS", 
                                                             "XMLFOREST", 
                                                             "XMLPARSE", 
                                                             "XMLPI", "XMLROOT", 
                                                             "XMLSERIALIZE", 
                                                             "CALL", "CURRENT_P", 
                                                             "ATTACH", "DETACH", 
                                                             "EXPRESSION", 
                                                             "GENERATED", 
                                                             "LOGGED", "STORED", 
                                                             "INCLUDE", 
                                                             "ROUTINE", 
                                                             "TRANSFORM", 
                                                             "IMPORT_P", 
                                                             "POLICY", "METHOD", 
                                                             "REFERENCING", 
                                                             "NEW", "OLD", 
                                                             "VALUE_P", 
                                                             "SUBSCRIPTION", 
                                                             "PUBLICATION", 
                                                             "OUT_P", "END_P", 
                                                             "ROUTINES", 
                                                             "SCHEMAS", 
                                                             "PROCEDURES", 
                                                             "INPUT_P", 
                                                             "SUPPORT", 
                                                             "PARALLEL", 
                                                             "SQL_P", "DEPENDS", 
                                                             "OVERRIDING", 
                                                             "CONFLICT", 
                                                             "SKIP_P", "LOCKED", 
                                                             "TIES", "ROLLUP", 
                                                             "CUBE", "GROUPING", 
                                                             "SETS", "TABLESAMPLE", 
                                                             "ORDINALITY", 
                                                             "XMLTABLE", 
                                                             "COLUMNS", 
                                                             "XMLNAMESPACES", 
                                                             "ROWTYPE", 
                                                             "NORMALIZED", 
                                                             "WITHIN", "FILTER", 
                                                             "GROUPS", "OTHERS", 
                                                             "NFC", "NFD", 
                                                             "NFKC", "NFKD", 
                                                             "UESCAPE", 
                                                             "VIEWS", "NORMALIZE", 
                                                             "DUMP", "PRINT_STRICT_PARAMS", 
                                                             "VARIABLE_CONFLICT", 
                                                             "ERROR", "USE_VARIABLE", 
                                                             "USE_COLUMN", 
                                                             "ALIAS", "CONSTANT", 
                                                             "PERFORM", 
                                                             "GET", "DIAGNOSTICS", 
                                                             "STACKED", 
                                                             "ELSIF", "WHILE", 
                                                             "REVERSE", 
                                                             "FOREACH", 
                                                             "SLICE", "EXIT", 
                                                             "RETURN", "QUERY", 
                                                             "RAISE", "SQLSTATE", 
                                                             "DEBUG", "LOG", 
                                                             "INFO", "NOTICE", 
                                                             "WARNING", 
                                                             "EXCEPTION", 
                                                             "ASSERT", "LOOP", 
                                                             "OPEN", "ABS", 
                                                             "CBRT", "CEIL", 
                                                             "CEILING", 
                                                             "DEGREES", 
                                                             "DIV", "EXP", 
                                                             "FACTORIAL", 
                                                             "FLOOR", "GCD", 
                                                             "LCM", "LN", 
                                                             "LOG10", "MIN_SCALE", 
                                                             "MOD", "PI", 
                                                             "POWER", "RADIANS", 
                                                             "ROUND", "SCALE", 
                                                             "SIGN", "SQRT", 
                                                             "TRIM_SCALE", 
                                                             "TRUNC", "WIDTH_BUCKET", 
                                                             "RANDOM", "SETSEED", 
                                                             "ACOS", "ACOSD", 
                                                             "ASIN", "ASIND", 
                                                             "ATAN", "ATAND", 
                                                             "ATAN2", "ATAN2D", 
                                                             "COS", "COSD", 
                                                             "COT", "COTD", 
                                                             "SIN", "SIND", 
                                                             "TAN", "TAND", 
                                                             "SINH", "COSH", 
                                                             "TANH", "ASINH", 
                                                             "ACOSH", "ATANH", 
                                                             "BIT_LENGTH", 
                                                             "CHAR_LENGTH", 
                                                             "CHARACTER_LENGTH", 
                                                             "LOWER", "OCTET_LENGTH", 
                                                             "UPPER", "ASCII", 
                                                             "BTRIM", "CHR", 
                                                             "CONCAT", "CONCAT_WS", 
                                                             "FORMAT", "INITCAP", 
                                                             "LENGTH", "LPAD", 
                                                             "LTRIM", "MD5", 
                                                             "PARSE_IDENT", 
                                                             "PG_CLIENT_ENCODING", 
                                                             "QUOTE_IDENT", 
                                                             "QUOTE_LITERAL", 
                                                             "QUOTE_NULLABLE", 
                                                             "REGEXP_COUNT", 
                                                             "REGEXP_INSTR", 
                                                             "REGEXP_LIKE", 
                                                             "REGEXP_MATCH", 
                                                             "REGEXP_MATCHES", 
                                                             "REGEXP_REPLACE", 
                                                             "REGEXP_SPLIT_TO_ARRAY", 
                                                             "REGEXP_SPLIT_TO_TABLE", 
                                                             "REGEXP_SUBSTR", 
                                                             "REPEAT", "RPAD", 
                                                             "RTRIM", "SPLIT_PART", 
                                                             "STARTS_WITH", 
                                                             "STRING_TO_ARRAY", 
                                                             "STRING_TO_TABLE", 
                                                             "STRPOS", "SUBSTR", 
                                                             "TO_ASCII", 
                                                             "TO_HEX", "TRANSLATE", 
                                                             "UNISTR", "AGE", 
                                                             "CLOCK_TIMESTAMP", 
                                                             "DATE_BIN", 
                                                             "DATE_PART", 
                                                             "DATE_TRUNC", 
                                                             "ISFINITE", 
                                                             "JUSTIFY_DAYS", 
                                                             "JUSTIFY_HOURS", 
                                                             "JUSTIFY_INTERVAL", 
                                                             "MAKE_DATE", 
                                                             "MAKE_INTERVAL", 
                                                             "MAKE_TIME", 
                                                             "MAKE_TIMESTAMP", 
                                                             "MAKE_TIMESTAMPTZ", 
                                                             "NOW", "STATEMENT_TIMESTAMP", 
                                                             "TIMEOFDAY", 
                                                             "TRANSACTION_TIMESTAMP", 
                                                             "TO_TIMESTAMP", 
                                                             "TO_CHAR", 
                                                             "TO_DATE", 
                                                             "TO_NUMBER", 
                                                             "Identifier", 
                                                             "QuotedIdentifier", 
                                                             "UnterminatedQuotedIdentifier", 
                                                             "InvalidQuotedIdentifier", 
                                                             "InvalidUnterminatedQuotedIdentifier", 
                                                             "UnicodeQuotedIdentifier", 
                                                             "UnterminatedUnicodeQuotedIdentifier", 
                                                             "InvalidUnicodeQuotedIdentifier", 
                                                             "InvalidUnterminatedUnicodeQuotedIdentifier", 
                                                             "StringConstant", 
                                                             "UnterminatedStringConstant", 
                                                             "UnicodeEscapeStringConstant", 
                                                             "UnterminatedUnicodeEscapeStringConstant", 
                                                             "BeginDollarStringConstant", 
                                                             "BinaryStringConstant", 
                                                             "UnterminatedBinaryStringConstant", 
                                                             "InvalidBinaryStringConstant", 
                                                             "InvalidUnterminatedBinaryStringConstant", 
                                                             "HexadecimalStringConstant", 
                                                             "UnterminatedHexadecimalStringConstant", 
                                                             "InvalidHexadecimalStringConstant", 
                                                             "InvalidUnterminatedHexadecimalStringConstant", 
                                                             "Integral", 
                                                             "NumericFail", 
                                                             "Numeric", 
                                                             "PLSQLVARIABLENAME", 
                                                             "PLSQLIDENTIFIER", 
                                                             "Whitespace", 
                                                             "Newline", 
                                                             "LineComment", 
                                                             "BlockComment", 
                                                             "UnterminatedBlockComment", 
                                                             "MetaCommand", 
                                                             "EndMetaCommand", 
                                                             "ErrorCharacter", 
                                                             "EscapeStringConstant", 
                                                             "UnterminatedEscapeStringConstant", 
                                                             "InvalidEscapeStringConstant", 
                                                             "InvalidUnterminatedEscapeStringConstant", 
                                                             "AfterEscapeStringConstantMode_NotContinued", 
                                                             "AfterEscapeStringConstantWithNewlineMode_NotContinued", 
                                                             "DollarText", 
                                                             "EndDollarStringConstant", 
                                                             "AfterEscapeStringConstantWithNewlineMode_Continued" ];
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", "EscapeStringConstantMode", 
                                                "AfterEscapeStringConstantMode", 
                                                "AfterEscapeStringConstantWithNewlineMode", 
                                                "DollarQuotedStringMode", ];

	public static readonly ruleNames: string[] = [
		"Dollar", "OPEN_PAREN", "CLOSE_PAREN", "OPEN_BRACKET", "CLOSE_BRACKET", 
		"COMMA", "SEMI", "COLON", "STAR", "EQUAL", "DOT", "PLUS", "MINUS", "SLASH", 
		"CARET", "LT", "GT", "LESS_LESS", "GREATER_GREATER", "COLON_EQUALS", "LESS_EQUALS", 
		"EQUALS_GREATER", "GREATER_EQUALS", "DOT_DOT", "NOT_EQUALS", "TYPECAST", 
		"PERCENT", "PARAM", "Operator", "OperatorEndingWithPlusMinus", "OperatorCharacter", 
		"OperatorCharacterNotAllowPlusMinusAtEnd", "OperatorCharacterAllowPlusMinusAtEnd", 
		"ALL", "ANALYSE", "ANALYZE", "AND", "ANY", "ARRAY", "AS", "ASC", "ASYMMETRIC", 
		"BOTH", "CASE", "CAST", "CHECK", "COLLATE", "COLUMN", "CONSTRAINT", "CREATE", 
		"CURRENT_CATALOG", "CURRENT_DATE", "CURRENT_ROLE", "CURRENT_TIME", "CURRENT_TIMESTAMP", 
		"CURRENT_USER", "DEFAULT", "DEFERRABLE", "DESC", "DISTINCT", "DO", "ELSE", 
		"EXCEPT", "FALSE_P", "FETCH", "FOR", "FOREIGN", "FROM", "GRANT", "GROUP_P", 
		"HAVING", "IN_P", "INITIALLY", "INTERSECT", "INTO", "LATERAL_P", "LEADING", 
		"LIMIT", "LOCALTIME", "LOCALTIMESTAMP", "NOT", "NULL_P", "OFFSET", "ON", 
		"ONLY", "OR", "ORDER", "PLACING", "PRIMARY", "REFERENCES", "RETURNING", 
		"SELECT", "SESSION_USER", "SOME", "SYMMETRIC", "TABLE", "THEN", "TO", 
		"TRAILING", "TRUE_P", "UNION", "UNIQUE", "USER", "USING", "VARIADIC", 
		"WHEN", "WHERE", "WINDOW", "WITH", "AUTHORIZATION", "BINARY", "COLLATION", 
		"CONCURRENTLY", "CROSS", "CURRENT_SCHEMA", "FREEZE", "FULL", "ILIKE", 
		"INNER_P", "IS", "ISNULL", "JOIN", "LEFT", "LIKE", "NATURAL", "NOTNULL", 
		"OUTER_P", "OVER", "OVERLAPS", "RIGHT", "SIMILAR", "VERBOSE", "ABORT_P", 
		"ABSOLUTE_P", "ACCESS", "ACTION", "ADD_P", "ADMIN", "AFTER", "AGGREGATE", 
		"ALSO", "ALTER", "ALWAYS", "ASSERTION", "ASSIGNMENT", "AT", "ATTRIBUTE", 
		"BACKWARD", "BEFORE", "BEGIN_P", "BY", "CACHE", "CALLED", "CASCADE", "CASCADED", 
		"CATALOG", "CHAIN", "CHARACTERISTICS", "CHECKPOINT", "CLASS", "CLOSE", 
		"CLUSTER", "COMMENT", "COMMENTS", "COMMIT", "COMMITTED", "CONFIGURATION", 
		"CONNECTION", "CONSTRAINTS", "CONTENT_P", "CONTINUE_P", "CONVERSION_P", 
		"COPY", "COST", "CSV", "CURSOR", "CYCLE", "DATA_P", "DATABASE", "DAY_P", 
		"DEALLOCATE", "DECLARE", "DEFAULTS", "DEFERRED", "DEFINER", "DELETE_P", 
		"DELIMITER", "DELIMITERS", "DICTIONARY", "DISABLE_P", "DISCARD", "DOCUMENT_P", 
		"DOMAIN_P", "DOUBLE_P", "DROP", "EACH", "ENABLE_P", "ENCODING", "ENCRYPTED", 
		"ENUM_P", "ESCAPE", "EVENT", "EXCLUDE", "EXCLUDING", "EXCLUSIVE", "EXECUTE", 
		"EXPLAIN", "EXTENSION", "EXTERNAL", "FAMILY", "FIRST_P", "FOLLOWING", 
		"FORCE", "FORWARD", "FUNCTION", "FUNCTIONS", "GLOBAL", "GRANTED", "HANDLER", 
		"HEADER_P", "HOLD", "HOUR_P", "IDENTITY_P", "IF_P", "IMMEDIATE", "IMMUTABLE", 
		"IMPLICIT_P", "INCLUDING", "INCREMENT", "INDEX", "INDEXES", "INHERIT", 
		"INHERITS", "INLINE_P", "INSENSITIVE", "INSERT", "INSTEAD", "INVOKER", 
		"ISOLATION", "KEY", "LABEL", "LANGUAGE", "LARGE_P", "LAST_P", "LEAKPROOF", 
		"LEVEL", "LISTEN", "LOAD", "LOCAL", "LOCATION", "LOCK_P", "MAPPING", "MATCH", 
		"MATCHED", "MATERIALIZED", "MAXVALUE", "MERGE", "MINUTE_P", "MINVALUE", 
		"MODE", "MONTH_P", "MOVE", "NAME_P", "NAMES", "NEXT", "NO", "NOTHING", 
		"NOTIFY", "NOWAIT", "NULLS_P", "OBJECT_P", "OF", "OFF", "OIDS", "OPERATOR", 
		"OPTION", "OPTIONS", "OWNED", "OWNER", "PARSER", "PARTIAL", "PARTITION", 
		"PASSING", "PASSWORD", "PLANS", "PRECEDING", "PREPARE", "PREPARED", "PRESERVE", 
		"PRIOR", "PRIVILEGES", "PROCEDURAL", "PROCEDURE", "PROGRAM", "QUOTE", 
		"RANGE", "READ", "REASSIGN", "RECHECK", "RECURSIVE", "REF", "REFRESH", 
		"REINDEX", "RELATIVE_P", "RELEASE", "RENAME", "REPEATABLE", "REPLACE", 
		"REPLICA", "RESET", "RESTART", "RESTRICT", "RETURNS", "REVOKE", "ROLE", 
		"ROLLBACK", "ROWS", "RULE", "SAVEPOINT", "SCHEMA", "SCROLL", "SEARCH", 
		"SECOND_P", "SECURITY", "SEQUENCE", "SEQUENCES", "SERIALIZABLE", "SERVER", 
		"SESSION", "SET", "SHARE", "SHOW", "SIMPLE", "SNAPSHOT", "STABLE", "STANDALONE_P", 
		"START", "STATEMENT", "STATISTICS", "STDIN", "STDOUT", "STORAGE", "STRICT_P", 
		"STRIP_P", "SYSID", "SYSTEM_P", "TABLES", "TABLESPACE", "TEMP", "TEMPLATE", 
		"TEMPORARY", "TEXT_P", "TRANSACTION", "TRIGGER", "TRUNCATE", "TRUSTED", 
		"TYPE_P", "TYPES_P", "UNBOUNDED", "UNCOMMITTED", "UNENCRYPTED", "UNKNOWN", 
		"UNLISTEN", "UNLOGGED", "UNTIL", "UPDATE", "VACUUM", "VALID", "VALIDATE", 
		"VALIDATOR", "VARYING", "VERSION_P", "VIEW", "VOLATILE", "WHITESPACE_P", 
		"WITHOUT", "WORK", "WRAPPER", "WRITE", "XML_P", "YEAR_P", "YES_P", "ZONE", 
		"BETWEEN", "BIGINT", "BIT", "BOOLEAN_P", "CHAR_P", "CHARACTER", "COALESCE", 
		"DEC", "DECIMAL_P", "EXISTS", "EXTRACT", "FLOAT_P", "GREATEST", "INOUT", 
		"INT_P", "INTEGER", "INTERVAL", "LEAST", "NATIONAL", "NCHAR", "NONE", 
		"NULLIF", "NUMERIC", "OVERLAY", "POSITION", "PRECISION", "REAL", "ROW", 
		"SETOF", "SMALLINT", "SUBSTRING", "TIME", "TIMESTAMP", "TREAT", "TRIM", 
		"VALUES", "VARCHAR", "XMLATTRIBUTES", "XMLCOMMENT", "XMLAGG", "XML_IS_WELL_FORMED", 
		"XML_IS_WELL_FORMED_DOCUMENT", "XML_IS_WELL_FORMED_CONTENT", "XPATH", 
		"XPATH_EXISTS", "XMLCONCAT", "XMLELEMENT", "XMLEXISTS", "XMLFOREST", "XMLPARSE", 
		"XMLPI", "XMLROOT", "XMLSERIALIZE", "CALL", "CURRENT_P", "ATTACH", "DETACH", 
		"EXPRESSION", "GENERATED", "LOGGED", "STORED", "INCLUDE", "ROUTINE", "TRANSFORM", 
		"IMPORT_P", "POLICY", "METHOD", "REFERENCING", "NEW", "OLD", "VALUE_P", 
		"SUBSCRIPTION", "PUBLICATION", "OUT_P", "END_P", "ROUTINES", "SCHEMAS", 
		"PROCEDURES", "INPUT_P", "SUPPORT", "PARALLEL", "SQL_P", "DEPENDS", "OVERRIDING", 
		"CONFLICT", "SKIP_P", "LOCKED", "TIES", "ROLLUP", "CUBE", "GROUPING", 
		"SETS", "TABLESAMPLE", "ORDINALITY", "XMLTABLE", "COLUMNS", "XMLNAMESPACES", 
		"ROWTYPE", "NORMALIZED", "WITHIN", "FILTER", "GROUPS", "OTHERS", "NFC", 
		"NFD", "NFKC", "NFKD", "UESCAPE", "VIEWS", "NORMALIZE", "DUMP", "PRINT_STRICT_PARAMS", 
		"VARIABLE_CONFLICT", "ERROR", "USE_VARIABLE", "USE_COLUMN", "ALIAS", "CONSTANT", 
		"PERFORM", "GET", "DIAGNOSTICS", "STACKED", "ELSIF", "WHILE", "REVERSE", 
		"FOREACH", "SLICE", "EXIT", "RETURN", "QUERY", "RAISE", "SQLSTATE", "DEBUG", 
		"LOG", "INFO", "NOTICE", "WARNING", "EXCEPTION", "ASSERT", "LOOP", "OPEN", 
		"ABS", "CBRT", "CEIL", "CEILING", "DEGREES", "DIV", "EXP", "FACTORIAL", 
		"FLOOR", "GCD", "LCM", "LN", "LOG10", "MIN_SCALE", "MOD", "PI", "POWER", 
		"RADIANS", "ROUND", "SCALE", "SIGN", "SQRT", "TRIM_SCALE", "TRUNC", "WIDTH_BUCKET", 
		"RANDOM", "SETSEED", "ACOS", "ACOSD", "ASIN", "ASIND", "ATAN", "ATAND", 
		"ATAN2", "ATAN2D", "COS", "COSD", "COT", "COTD", "SIN", "SIND", "TAN", 
		"TAND", "SINH", "COSH", "TANH", "ASINH", "ACOSH", "ATANH", "BIT_LENGTH", 
		"CHAR_LENGTH", "CHARACTER_LENGTH", "LOWER", "OCTET_LENGTH", "UPPER", "ASCII", 
		"BTRIM", "CHR", "CONCAT", "CONCAT_WS", "FORMAT", "INITCAP", "LENGTH", 
		"LPAD", "LTRIM", "MD5", "PARSE_IDENT", "PG_CLIENT_ENCODING", "QUOTE_IDENT", 
		"QUOTE_LITERAL", "QUOTE_NULLABLE", "REGEXP_COUNT", "REGEXP_INSTR", "REGEXP_LIKE", 
		"REGEXP_MATCH", "REGEXP_MATCHES", "REGEXP_REPLACE", "REGEXP_SPLIT_TO_ARRAY", 
		"REGEXP_SPLIT_TO_TABLE", "REGEXP_SUBSTR", "REPEAT", "RPAD", "RTRIM", "SPLIT_PART", 
		"STARTS_WITH", "STRING_TO_ARRAY", "STRING_TO_TABLE", "STRPOS", "SUBSTR", 
		"TO_ASCII", "TO_HEX", "TRANSLATE", "UNISTR", "AGE", "CLOCK_TIMESTAMP", 
		"DATE_BIN", "DATE_PART", "DATE_TRUNC", "ISFINITE", "JUSTIFY_DAYS", "JUSTIFY_HOURS", 
		"JUSTIFY_INTERVAL", "MAKE_DATE", "MAKE_INTERVAL", "MAKE_TIME", "MAKE_TIMESTAMP", 
		"MAKE_TIMESTAMPTZ", "NOW", "STATEMENT_TIMESTAMP", "TIMEOFDAY", "TRANSACTION_TIMESTAMP", 
		"TO_TIMESTAMP", "TO_CHAR", "TO_DATE", "TO_NUMBER", "Identifier", "IdentifierStartChar", 
		"IdentifierChar", "StrictIdentifierChar", "QuotedIdentifier", "UnterminatedQuotedIdentifier", 
		"InvalidQuotedIdentifier", "InvalidUnterminatedQuotedIdentifier", "UnicodeQuotedIdentifier", 
		"UnterminatedUnicodeQuotedIdentifier", "InvalidUnicodeQuotedIdentifier", 
		"InvalidUnterminatedUnicodeQuotedIdentifier", "StringConstant", "UnterminatedStringConstant", 
		"BeginEscapeStringConstant", "UnicodeEscapeStringConstant", "UnterminatedUnicodeEscapeStringConstant", 
		"BeginDollarStringConstant", "Tag", "BinaryStringConstant", "UnterminatedBinaryStringConstant", 
		"InvalidBinaryStringConstant", "InvalidUnterminatedBinaryStringConstant", 
		"HexadecimalStringConstant", "UnterminatedHexadecimalStringConstant", 
		"InvalidHexadecimalStringConstant", "InvalidUnterminatedHexadecimalStringConstant", 
		"Integral", "NumericFail", "Numeric", "Digits", "PLSQLVARIABLENAME", "PLSQLIDENTIFIER", 
		"Whitespace", "Newline", "LineComment", "BlockComment", "UnterminatedBlockComment", 
		"MetaCommand", "EndMetaCommand", "ErrorCharacter", "EscapeStringConstant", 
		"UnterminatedEscapeStringConstant", "EscapeStringText", "InvalidEscapeStringConstant", 
		"InvalidUnterminatedEscapeStringConstant", "InvalidEscapeStringText", 
		"AfterEscapeStringConstantMode_Whitespace", "AfterEscapeStringConstantMode_Newline", 
		"AfterEscapeStringConstantMode_NotContinued", "AfterEscapeStringConstantWithNewlineMode_Whitespace", 
		"AfterEscapeStringConstantWithNewlineMode_Newline", "AfterEscapeStringConstantWithNewlineMode_Continued", 
		"AfterEscapeStringConstantWithNewlineMode_NotContinued", "DollarText", 
		"EndDollarStringConstant",
	];


	/* This field stores the tags which are used to detect the end of a dollar-quoted string literal.
	 */


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(this, PostgreSQLLexer._ATN, PostgreSQLLexer.DecisionsToDFA, new PredictionContextCache());
	}

	public get grammarFileName(): string { return "PostgreSQLLexer.g4"; }

	public get literalNames(): (string | null)[] { return PostgreSQLLexer.literalNames; }
	public get symbolicNames(): (string | null)[] { return PostgreSQLLexer.symbolicNames; }
	public get ruleNames(): string[] { return PostgreSQLLexer.ruleNames; }

	public get serializedATN(): number[] { return PostgreSQLLexer._serializedATN; }

	public get channelNames(): string[] { return PostgreSQLLexer.channelNames; }

	public get modeNames(): string[] { return PostgreSQLLexer.modeNames; }

	// @Override
	public action(localctx: RuleContext, ruleIndex: number, actionIndex: number): void {
		switch (ruleIndex) {
		case 28:
			this.Operator_action(localctx, actionIndex);
			break;
		case 656:
			this.BeginDollarStringConstant_action(localctx, actionIndex);
			break;
		case 667:
			this.NumericFail_action(localctx, actionIndex);
			break;
		case 676:
			this.UnterminatedBlockComment_action(localctx, actionIndex);
			break;
		case 688:
			this.AfterEscapeStringConstantMode_NotContinued_action(localctx, actionIndex);
			break;
		case 692:
			this.AfterEscapeStringConstantWithNewlineMode_NotContinued_action(localctx, actionIndex);
			break;
		case 694:
			this.EndDollarStringConstant_action(localctx, actionIndex);
			break;
		}
	}
	private Operator_action(localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 0:

			    HandleLessLessGreaterGreater();
			   
			break;
		}
	}
	private BeginDollarStringConstant_action(localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 1:
			pushTag();
			break;
		}
	}
	private NumericFail_action(localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 2:
			HandleNumericFail();
			break;
		}
	}
	private UnterminatedBlockComment_action(localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 3:

			            UnterminatedBlockCommentDebugAssert();
			   
			break;
		}
	}
	private AfterEscapeStringConstantMode_NotContinued_action(localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 4:
			break;
		}
	}
	private AfterEscapeStringConstantWithNewlineMode_NotContinued_action(localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 5:
			break;
		}
	}
	private EndDollarStringConstant_action(localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 6:
			popTag();
			break;
		}
	}
	// @Override
	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 28:
			return this.Operator_sempred(localctx, predIndex);
		case 29:
			return this.OperatorEndingWithPlusMinus_sempred(localctx, predIndex);
		case 640:
			return this.IdentifierStartChar_sempred(localctx, predIndex);
		case 694:
			return this.EndDollarStringConstant_sempred(localctx, predIndex);
		}
		return true;
	}
	private Operator_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return checkLA('-');
		case 1:
			return checkLA('*');
		case 2:
			return checkLA('*');
		}
		return true;
	}
	private OperatorEndingWithPlusMinus_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 3:
			return checkLA('-');
		case 4:
			return checkLA('*');
		case 5:
			return checkLA('-');
		}
		return true;
	}
	private IdentifierStartChar_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 6:
			return charIsLetter();
		case 7:
			return 
		    CheckIfUtf32Letter()
		   ;
		}
		return true;
	}
	private EndDollarStringConstant_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 8:
			return isTag();
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,0,679,6791,6,-1,6,
	-1,6,-1,6,-1,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
	6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,
	7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,
	21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,
	2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,
	36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,
	7,43,2,44,7,44,2,45,7,45,2,46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,
	50,2,51,7,51,2,52,7,52,2,53,7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,
	2,58,7,58,2,59,7,59,2,60,7,60,2,61,7,61,2,62,7,62,2,63,7,63,2,64,7,64,2,
	65,7,65,2,66,7,66,2,67,7,67,2,68,7,68,2,69,7,69,2,70,7,70,2,71,7,71,2,72,
	7,72,2,73,7,73,2,74,7,74,2,75,7,75,2,76,7,76,2,77,7,77,2,78,7,78,2,79,7,
	79,2,80,7,80,2,81,7,81,2,82,7,82,2,83,7,83,2,84,7,84,2,85,7,85,2,86,7,86,
	2,87,7,87,2,88,7,88,2,89,7,89,2,90,7,90,2,91,7,91,2,92,7,92,2,93,7,93,2,
	94,7,94,2,95,7,95,2,96,7,96,2,97,7,97,2,98,7,98,2,99,7,99,2,100,7,100,2,
	101,7,101,2,102,7,102,2,103,7,103,2,104,7,104,2,105,7,105,2,106,7,106,2,
	107,7,107,2,108,7,108,2,109,7,109,2,110,7,110,2,111,7,111,2,112,7,112,2,
	113,7,113,2,114,7,114,2,115,7,115,2,116,7,116,2,117,7,117,2,118,7,118,2,
	119,7,119,2,120,7,120,2,121,7,121,2,122,7,122,2,123,7,123,2,124,7,124,2,
	125,7,125,2,126,7,126,2,127,7,127,2,128,7,128,2,129,7,129,2,130,7,130,2,
	131,7,131,2,132,7,132,2,133,7,133,2,134,7,134,2,135,7,135,2,136,7,136,2,
	137,7,137,2,138,7,138,2,139,7,139,2,140,7,140,2,141,7,141,2,142,7,142,2,
	143,7,143,2,144,7,144,2,145,7,145,2,146,7,146,2,147,7,147,2,148,7,148,2,
	149,7,149,2,150,7,150,2,151,7,151,2,152,7,152,2,153,7,153,2,154,7,154,2,
	155,7,155,2,156,7,156,2,157,7,157,2,158,7,158,2,159,7,159,2,160,7,160,2,
	161,7,161,2,162,7,162,2,163,7,163,2,164,7,164,2,165,7,165,2,166,7,166,2,
	167,7,167,2,168,7,168,2,169,7,169,2,170,7,170,2,171,7,171,2,172,7,172,2,
	173,7,173,2,174,7,174,2,175,7,175,2,176,7,176,2,177,7,177,2,178,7,178,2,
	179,7,179,2,180,7,180,2,181,7,181,2,182,7,182,2,183,7,183,2,184,7,184,2,
	185,7,185,2,186,7,186,2,187,7,187,2,188,7,188,2,189,7,189,2,190,7,190,2,
	191,7,191,2,192,7,192,2,193,7,193,2,194,7,194,2,195,7,195,2,196,7,196,2,
	197,7,197,2,198,7,198,2,199,7,199,2,200,7,200,2,201,7,201,2,202,7,202,2,
	203,7,203,2,204,7,204,2,205,7,205,2,206,7,206,2,207,7,207,2,208,7,208,2,
	209,7,209,2,210,7,210,2,211,7,211,2,212,7,212,2,213,7,213,2,214,7,214,2,
	215,7,215,2,216,7,216,2,217,7,217,2,218,7,218,2,219,7,219,2,220,7,220,2,
	221,7,221,2,222,7,222,2,223,7,223,2,224,7,224,2,225,7,225,2,226,7,226,2,
	227,7,227,2,228,7,228,2,229,7,229,2,230,7,230,2,231,7,231,2,232,7,232,2,
	233,7,233,2,234,7,234,2,235,7,235,2,236,7,236,2,237,7,237,2,238,7,238,2,
	239,7,239,2,240,7,240,2,241,7,241,2,242,7,242,2,243,7,243,2,244,7,244,2,
	245,7,245,2,246,7,246,2,247,7,247,2,248,7,248,2,249,7,249,2,250,7,250,2,
	251,7,251,2,252,7,252,2,253,7,253,2,254,7,254,2,255,7,255,2,256,7,256,2,
	257,7,257,2,258,7,258,2,259,7,259,2,260,7,260,2,261,7,261,2,262,7,262,2,
	263,7,263,2,264,7,264,2,265,7,265,2,266,7,266,2,267,7,267,2,268,7,268,2,
	269,7,269,2,270,7,270,2,271,7,271,2,272,7,272,2,273,7,273,2,274,7,274,2,
	275,7,275,2,276,7,276,2,277,7,277,2,278,7,278,2,279,7,279,2,280,7,280,2,
	281,7,281,2,282,7,282,2,283,7,283,2,284,7,284,2,285,7,285,2,286,7,286,2,
	287,7,287,2,288,7,288,2,289,7,289,2,290,7,290,2,291,7,291,2,292,7,292,2,
	293,7,293,2,294,7,294,2,295,7,295,2,296,7,296,2,297,7,297,2,298,7,298,2,
	299,7,299,2,300,7,300,2,301,7,301,2,302,7,302,2,303,7,303,2,304,7,304,2,
	305,7,305,2,306,7,306,2,307,7,307,2,308,7,308,2,309,7,309,2,310,7,310,2,
	311,7,311,2,312,7,312,2,313,7,313,2,314,7,314,2,315,7,315,2,316,7,316,2,
	317,7,317,2,318,7,318,2,319,7,319,2,320,7,320,2,321,7,321,2,322,7,322,2,
	323,7,323,2,324,7,324,2,325,7,325,2,326,7,326,2,327,7,327,2,328,7,328,2,
	329,7,329,2,330,7,330,2,331,7,331,2,332,7,332,2,333,7,333,2,334,7,334,2,
	335,7,335,2,336,7,336,2,337,7,337,2,338,7,338,2,339,7,339,2,340,7,340,2,
	341,7,341,2,342,7,342,2,343,7,343,2,344,7,344,2,345,7,345,2,346,7,346,2,
	347,7,347,2,348,7,348,2,349,7,349,2,350,7,350,2,351,7,351,2,352,7,352,2,
	353,7,353,2,354,7,354,2,355,7,355,2,356,7,356,2,357,7,357,2,358,7,358,2,
	359,7,359,2,360,7,360,2,361,7,361,2,362,7,362,2,363,7,363,2,364,7,364,2,
	365,7,365,2,366,7,366,2,367,7,367,2,368,7,368,2,369,7,369,2,370,7,370,2,
	371,7,371,2,372,7,372,2,373,7,373,2,374,7,374,2,375,7,375,2,376,7,376,2,
	377,7,377,2,378,7,378,2,379,7,379,2,380,7,380,2,381,7,381,2,382,7,382,2,
	383,7,383,2,384,7,384,2,385,7,385,2,386,7,386,2,387,7,387,2,388,7,388,2,
	389,7,389,2,390,7,390,2,391,7,391,2,392,7,392,2,393,7,393,2,394,7,394,2,
	395,7,395,2,396,7,396,2,397,7,397,2,398,7,398,2,399,7,399,2,400,7,400,2,
	401,7,401,2,402,7,402,2,403,7,403,2,404,7,404,2,405,7,405,2,406,7,406,2,
	407,7,407,2,408,7,408,2,409,7,409,2,410,7,410,2,411,7,411,2,412,7,412,2,
	413,7,413,2,414,7,414,2,415,7,415,2,416,7,416,2,417,7,417,2,418,7,418,2,
	419,7,419,2,420,7,420,2,421,7,421,2,422,7,422,2,423,7,423,2,424,7,424,2,
	425,7,425,2,426,7,426,2,427,7,427,2,428,7,428,2,429,7,429,2,430,7,430,2,
	431,7,431,2,432,7,432,2,433,7,433,2,434,7,434,2,435,7,435,2,436,7,436,2,
	437,7,437,2,438,7,438,2,439,7,439,2,440,7,440,2,441,7,441,2,442,7,442,2,
	443,7,443,2,444,7,444,2,445,7,445,2,446,7,446,2,447,7,447,2,448,7,448,2,
	449,7,449,2,450,7,450,2,451,7,451,2,452,7,452,2,453,7,453,2,454,7,454,2,
	455,7,455,2,456,7,456,2,457,7,457,2,458,7,458,2,459,7,459,2,460,7,460,2,
	461,7,461,2,462,7,462,2,463,7,463,2,464,7,464,2,465,7,465,2,466,7,466,2,
	467,7,467,2,468,7,468,2,469,7,469,2,470,7,470,2,471,7,471,2,472,7,472,2,
	473,7,473,2,474,7,474,2,475,7,475,2,476,7,476,2,477,7,477,2,478,7,478,2,
	479,7,479,2,480,7,480,2,481,7,481,2,482,7,482,2,483,7,483,2,484,7,484,2,
	485,7,485,2,486,7,486,2,487,7,487,2,488,7,488,2,489,7,489,2,490,7,490,2,
	491,7,491,2,492,7,492,2,493,7,493,2,494,7,494,2,495,7,495,2,496,7,496,2,
	497,7,497,2,498,7,498,2,499,7,499,2,500,7,500,2,501,7,501,2,502,7,502,2,
	503,7,503,2,504,7,504,2,505,7,505,2,506,7,506,2,507,7,507,2,508,7,508,2,
	509,7,509,2,510,7,510,2,511,7,511,2,512,7,512,2,513,7,513,2,514,7,514,2,
	515,7,515,2,516,7,516,2,517,7,517,2,518,7,518,2,519,7,519,2,520,7,520,2,
	521,7,521,2,522,7,522,2,523,7,523,2,524,7,524,2,525,7,525,2,526,7,526,2,
	527,7,527,2,528,7,528,2,529,7,529,2,530,7,530,2,531,7,531,2,532,7,532,2,
	533,7,533,2,534,7,534,2,535,7,535,2,536,7,536,2,537,7,537,2,538,7,538,2,
	539,7,539,2,540,7,540,2,541,7,541,2,542,7,542,2,543,7,543,2,544,7,544,2,
	545,7,545,2,546,7,546,2,547,7,547,2,548,7,548,2,549,7,549,2,550,7,550,2,
	551,7,551,2,552,7,552,2,553,7,553,2,554,7,554,2,555,7,555,2,556,7,556,2,
	557,7,557,2,558,7,558,2,559,7,559,2,560,7,560,2,561,7,561,2,562,7,562,2,
	563,7,563,2,564,7,564,2,565,7,565,2,566,7,566,2,567,7,567,2,568,7,568,2,
	569,7,569,2,570,7,570,2,571,7,571,2,572,7,572,2,573,7,573,2,574,7,574,2,
	575,7,575,2,576,7,576,2,577,7,577,2,578,7,578,2,579,7,579,2,580,7,580,2,
	581,7,581,2,582,7,582,2,583,7,583,2,584,7,584,2,585,7,585,2,586,7,586,2,
	587,7,587,2,588,7,588,2,589,7,589,2,590,7,590,2,591,7,591,2,592,7,592,2,
	593,7,593,2,594,7,594,2,595,7,595,2,596,7,596,2,597,7,597,2,598,7,598,2,
	599,7,599,2,600,7,600,2,601,7,601,2,602,7,602,2,603,7,603,2,604,7,604,2,
	605,7,605,2,606,7,606,2,607,7,607,2,608,7,608,2,609,7,609,2,610,7,610,2,
	611,7,611,2,612,7,612,2,613,7,613,2,614,7,614,2,615,7,615,2,616,7,616,2,
	617,7,617,2,618,7,618,2,619,7,619,2,620,7,620,2,621,7,621,2,622,7,622,2,
	623,7,623,2,624,7,624,2,625,7,625,2,626,7,626,2,627,7,627,2,628,7,628,2,
	629,7,629,2,630,7,630,2,631,7,631,2,632,7,632,2,633,7,633,2,634,7,634,2,
	635,7,635,2,636,7,636,2,637,7,637,2,638,7,638,2,639,7,639,2,640,7,640,2,
	641,7,641,2,642,7,642,2,643,7,643,2,644,7,644,2,645,7,645,2,646,7,646,2,
	647,7,647,2,648,7,648,2,649,7,649,2,650,7,650,2,651,7,651,2,652,7,652,2,
	653,7,653,2,654,7,654,2,655,7,655,2,656,7,656,2,657,7,657,2,658,7,658,2,
	659,7,659,2,660,7,660,2,661,7,661,2,662,7,662,2,663,7,663,2,664,7,664,2,
	665,7,665,2,666,7,666,2,667,7,667,2,668,7,668,2,669,7,669,2,670,7,670,2,
	671,7,671,2,672,7,672,2,673,7,673,2,674,7,674,2,675,7,675,2,676,7,676,2,
	677,7,677,2,678,7,678,2,679,7,679,2,680,7,680,2,681,7,681,2,682,7,682,2,
	683,7,683,2,684,7,684,2,685,7,685,2,686,7,686,2,687,7,687,2,688,7,688,2,
	689,7,689,2,690,7,690,2,691,7,691,2,692,7,692,2,693,7,693,2,694,7,694,1,
	0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,1,
	9,1,9,1,10,1,10,1,11,1,11,1,12,1,12,1,13,1,13,1,14,1,14,1,15,1,15,1,16,
	1,16,1,17,1,17,1,17,1,18,1,18,1,18,1,19,1,19,1,19,1,20,1,20,1,20,1,21,1,
	21,1,21,1,22,1,22,1,22,1,23,1,23,1,23,1,24,1,24,1,24,1,25,1,25,1,25,1,26,
	1,26,1,27,1,27,4,27,1461,8,27,11,27,12,27,1462,1,28,1,28,1,28,1,28,4,28,
	1469,8,28,11,28,12,28,1470,1,28,1,28,1,28,3,28,1476,8,28,1,28,1,28,4,28,
	1480,8,28,11,28,12,28,1481,1,28,3,28,1485,8,28,1,28,1,28,1,29,1,29,1,29,
	1,29,1,29,5,29,1494,8,29,10,29,12,29,1497,9,29,1,29,1,29,3,29,1501,8,29,
	1,29,1,29,1,29,4,29,1506,8,29,11,29,12,29,1507,1,29,1,29,1,30,1,30,1,31,
	1,31,1,32,1,32,1,33,1,33,1,33,1,33,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,
	34,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,36,1,36,1,36,1,36,1,37,1,37,
	1,37,1,37,1,38,1,38,1,38,1,38,1,38,1,38,1,39,1,39,1,39,1,40,1,40,1,40,1,
	40,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,42,1,42,1,42,
	1,42,1,42,1,43,1,43,1,43,1,43,1,43,1,44,1,44,1,44,1,44,1,44,1,45,1,45,1,
	45,1,45,1,45,1,45,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,47,1,47,1,47,
	1,47,1,47,1,47,1,47,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,
	48,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,50,1,50,1,50,1,50,1,50,1,50,1,50,
	1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,51,1,51,1,51,1,51,1,51,1,
	51,1,51,1,51,1,51,1,51,1,51,1,51,1,51,1,52,1,52,1,52,1,52,1,52,1,52,1,52,
	1,52,1,52,1,52,1,52,1,52,1,52,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,
	53,1,53,1,53,1,53,1,53,1,54,1,54,1,54,1,54,1,54,1,54,1,54,1,54,1,54,1,54,
	1,54,1,54,1,54,1,54,1,54,1,54,1,54,1,54,1,55,1,55,1,55,1,55,1,55,1,55,1,
	55,1,55,1,55,1,55,1,55,1,55,1,55,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,
	1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,58,1,58,1,58,1,
	58,1,58,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,60,1,60,1,60,1,61,
	1,61,1,61,1,61,1,61,1,62,1,62,1,62,1,62,1,62,1,62,1,62,1,63,1,63,1,63,1,
	63,1,63,1,63,1,64,1,64,1,64,1,64,1,64,1,64,1,65,1,65,1,65,1,65,1,66,1,66,
	1,66,1,66,1,66,1,66,1,66,1,66,1,67,1,67,1,67,1,67,1,67,1,68,1,68,1,68,1,
	68,1,68,1,68,1,69,1,69,1,69,1,69,1,69,1,69,1,70,1,70,1,70,1,70,1,70,1,70,
	1,70,1,71,1,71,1,71,1,72,1,72,1,72,1,72,1,72,1,72,1,72,1,72,1,72,1,72,1,
	73,1,73,1,73,1,73,1,73,1,73,1,73,1,73,1,73,1,73,1,74,1,74,1,74,1,74,1,74,
	1,75,1,75,1,75,1,75,1,75,1,75,1,75,1,75,1,76,1,76,1,76,1,76,1,76,1,76,1,
	76,1,76,1,77,1,77,1,77,1,77,1,77,1,77,1,78,1,78,1,78,1,78,1,78,1,78,1,78,
	1,78,1,78,1,78,1,79,1,79,1,79,1,79,1,79,1,79,1,79,1,79,1,79,1,79,1,79,1,
	79,1,79,1,79,1,79,1,80,1,80,1,80,1,80,1,81,1,81,1,81,1,81,1,81,1,82,1,82,
	1,82,1,82,1,82,1,82,1,82,1,83,1,83,1,83,1,84,1,84,1,84,1,84,1,84,1,85,1,
	85,1,85,1,86,1,86,1,86,1,86,1,86,1,86,1,87,1,87,1,87,1,87,1,87,1,87,1,87,
	1,87,1,88,1,88,1,88,1,88,1,88,1,88,1,88,1,88,1,89,1,89,1,89,1,89,1,89,1,
	89,1,89,1,89,1,89,1,89,1,89,1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,90,
	1,90,1,91,1,91,1,91,1,91,1,91,1,91,1,91,1,92,1,92,1,92,1,92,1,92,1,92,1,
	92,1,92,1,92,1,92,1,92,1,92,1,92,1,93,1,93,1,93,1,93,1,93,1,94,1,94,1,94,
	1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,95,1,95,1,95,1,95,1,95,1,95,1,96,1,
	96,1,96,1,96,1,96,1,97,1,97,1,97,1,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,
	1,98,1,99,1,99,1,99,1,99,1,99,1,100,1,100,1,100,1,100,1,100,1,100,1,101,
	1,101,1,101,1,101,1,101,1,101,1,101,1,102,1,102,1,102,1,102,1,102,1,103,
	1,103,1,103,1,103,1,103,1,103,1,104,1,104,1,104,1,104,1,104,1,104,1,104,
	1,104,1,104,1,105,1,105,1,105,1,105,1,105,1,106,1,106,1,106,1,106,1,106,
	1,106,1,107,1,107,1,107,1,107,1,107,1,107,1,107,1,108,1,108,1,108,1,108,
	1,108,1,109,1,109,1,109,1,109,1,109,1,109,1,109,1,109,1,109,1,109,1,109,
	1,109,1,109,1,109,1,110,1,110,1,110,1,110,1,110,1,110,1,110,1,111,1,111,
	1,111,1,111,1,111,1,111,1,111,1,111,1,111,1,111,1,112,1,112,1,112,1,112,
	1,112,1,112,1,112,1,112,1,112,1,112,1,112,1,112,1,112,1,113,1,113,1,113,
	1,113,1,113,1,113,1,114,1,114,1,114,1,114,1,114,1,114,1,114,1,114,1,114,
	1,114,1,114,1,114,1,114,1,114,1,114,1,115,1,115,1,115,1,115,1,115,1,115,
	1,115,1,116,1,116,1,116,1,116,1,116,1,117,1,117,1,117,1,117,1,117,1,117,
	1,118,1,118,1,118,1,118,1,118,1,118,1,119,1,119,1,119,1,120,1,120,1,120,
	1,120,1,120,1,120,1,120,1,121,1,121,1,121,1,121,1,121,1,122,1,122,1,122,
	1,122,1,122,1,123,1,123,1,123,1,123,1,123,1,124,1,124,1,124,1,124,1,124,
	1,124,1,124,1,124,1,125,1,125,1,125,1,125,1,125,1,125,1,125,1,125,1,126,
	1,126,1,126,1,126,1,126,1,126,1,127,1,127,1,127,1,127,1,127,1,128,1,128,
	1,128,1,128,1,128,1,128,1,128,1,128,1,128,1,129,1,129,1,129,1,129,1,129,
	1,129,1,130,1,130,1,130,1,130,1,130,1,130,1,130,1,130,1,131,1,131,1,131,
	1,131,1,131,1,131,1,131,1,131,1,132,1,132,1,132,1,132,1,132,1,132,1,133,
	1,133,1,133,1,133,1,133,1,133,1,133,1,133,1,133,1,134,1,134,1,134,1,134,
	1,134,1,134,1,134,1,135,1,135,1,135,1,135,1,135,1,135,1,135,1,136,1,136,
	1,136,1,136,1,137,1,137,1,137,1,137,1,137,1,137,1,138,1,138,1,138,1,138,
	1,138,1,138,1,139,1,139,1,139,1,139,1,139,1,139,1,139,1,139,1,139,1,139,
	1,140,1,140,1,140,1,140,1,140,1,141,1,141,1,141,1,141,1,141,1,141,1,142,
	1,142,1,142,1,142,1,142,1,142,1,142,1,143,1,143,1,143,1,143,1,143,1,143,
	1,143,1,143,1,143,1,143,1,144,1,144,1,144,1,144,1,144,1,144,1,144,1,144,
	1,144,1,144,1,144,1,145,1,145,1,145,1,146,1,146,1,146,1,146,1,146,1,146,
	1,146,1,146,1,146,1,146,1,147,1,147,1,147,1,147,1,147,1,147,1,147,1,147,
	1,147,1,148,1,148,1,148,1,148,1,148,1,148,1,148,1,149,1,149,1,149,1,149,
	1,149,1,149,1,150,1,150,1,150,1,151,1,151,1,151,1,151,1,151,1,151,1,152,
	1,152,1,152,1,152,1,152,1,152,1,152,1,153,1,153,1,153,1,153,1,153,1,153,
	1,153,1,153,1,154,1,154,1,154,1,154,1,154,1,154,1,154,1,154,1,154,1,155,
	1,155,1,155,1,155,1,155,1,155,1,155,1,155,1,156,1,156,1,156,1,156,1,156,
	1,156,1,157,1,157,1,157,1,157,1,157,1,157,1,157,1,157,1,157,1,157,1,157,
	1,157,1,157,1,157,1,157,1,157,1,158,1,158,1,158,1,158,1,158,1,158,1,158,
	1,158,1,158,1,158,1,158,1,159,1,159,1,159,1,159,1,159,1,159,1,160,1,160,
	1,160,1,160,1,160,1,160,1,161,1,161,1,161,1,161,1,161,1,161,1,161,1,161,
	1,162,1,162,1,162,1,162,1,162,1,162,1,162,1,162,1,163,1,163,1,163,1,163,
	1,163,1,163,1,163,1,163,1,163,1,164,1,164,1,164,1,164,1,164,1,164,1,164,
	1,165,1,165,1,165,1,165,1,165,1,165,1,165,1,165,1,165,1,165,1,166,1,166,
	1,166,1,166,1,166,1,166,1,166,1,166,1,166,1,166,1,166,1,166,1,166,1,166,
	1,167,1,167,1,167,1,167,1,167,1,167,1,167,1,167,1,167,1,167,1,167,1,168,
	1,168,1,168,1,168,1,168,1,168,1,168,1,168,1,168,1,168,1,168,1,168,1,169,
	1,169,1,169,1,169,1,169,1,169,1,169,1,169,1,170,1,170,1,170,1,170,1,170,
	1,170,1,170,1,170,1,170,1,171,1,171,1,171,1,171,1,171,1,171,1,171,1,171,
	1,171,1,171,1,171,1,172,1,172,1,172,1,172,1,172,1,173,1,173,1,173,1,173,
	1,173,1,174,1,174,1,174,1,174,1,175,1,175,1,175,1,175,1,175,1,175,1,175,
	1,176,1,176,1,176,1,176,1,176,1,176,1,177,1,177,1,177,1,177,1,177,1,178,
	1,178,1,178,1,178,1,178,1,178,1,178,1,178,1,178,1,179,1,179,1,179,1,179,
	1,180,1,180,1,180,1,180,1,180,1,180,1,180,1,180,1,180,1,180,1,180,1,181,
	1,181,1,181,1,181,1,181,1,181,1,181,1,181,1,182,1,182,1,182,1,182,1,182,
	1,182,1,182,1,182,1,182,1,183,1,183,1,183,1,183,1,183,1,183,1,183,1,183,
	1,183,1,184,1,184,1,184,1,184,1,184,1,184,1,184,1,184,1,185,1,185,1,185,
	1,185,1,185,1,185,1,185,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,
	1,186,1,186,1,187,1,187,1,187,1,187,1,187,1,187,1,187,1,187,1,187,1,187,
	1,187,1,188,1,188,1,188,1,188,1,188,1,188,1,188,1,188,1,188,1,188,1,188,
	1,189,1,189,1,189,1,189,1,189,1,189,1,189,1,189,1,190,1,190,1,190,1,190,
	1,190,1,190,1,190,1,190,1,191,1,191,1,191,1,191,1,191,1,191,1,191,1,191,
	1,191,1,192,1,192,1,192,1,192,1,192,1,192,1,192,1,193,1,193,1,193,1,193,
	1,193,1,193,1,193,1,194,1,194,1,194,1,194,1,194,1,195,1,195,1,195,1,195,
	1,195,1,196,1,196,1,196,1,196,1,196,1,196,1,196,1,197,1,197,1,197,1,197,
	1,197,1,197,1,197,1,197,1,197,1,198,1,198,1,198,1,198,1,198,1,198,1,198,
	1,198,1,198,1,198,1,199,1,199,1,199,1,199,1,199,1,200,1,200,1,200,1,200,
	1,200,1,200,1,200,1,201,1,201,1,201,1,201,1,201,1,201,1,202,1,202,1,202,
	1,202,1,202,1,202,1,202,1,202,1,203,1,203,1,203,1,203,1,203,1,203,1,203,
	1,203,1,203,1,203,1,204,1,204,1,204,1,204,1,204,1,204,1,204,1,204,1,204,
	1,204,1,205,1,205,1,205,1,205,1,205,1,205,1,205,1,205,1,206,1,206,1,206,
	1,206,1,206,1,206,1,206,1,206,1,207,1,207,1,207,1,207,1,207,1,207,1,207,
	1,207,1,207,1,207,1,208,1,208,1,208,1,208,1,208,1,208,1,208,1,208,1,208,
	1,209,1,209,1,209,1,209,1,209,1,209,1,209,1,210,1,210,1,210,1,210,1,210,
	1,210,1,211,1,211,1,211,1,211,1,211,1,211,1,211,1,211,1,211,1,211,1,212,
	1,212,1,212,1,212,1,212,1,212,1,213,1,213,1,213,1,213,1,213,1,213,1,213,
	1,213,1,214,1,214,1,214,1,214,1,214,1,214,1,214,1,214,1,214,1,215,1,215,
	1,215,1,215,1,215,1,215,1,215,1,215,1,215,1,215,1,216,1,216,1,216,1,216,
	1,216,1,216,1,216,1,217,1,217,1,217,1,217,1,217,1,217,1,217,1,217,1,218,
	1,218,1,218,1,218,1,218,1,218,1,218,1,218,1,219,1,219,1,219,1,219,1,219,
	1,219,1,219,1,220,1,220,1,220,1,220,1,220,1,221,1,221,1,221,1,221,1,221,
	1,222,1,222,1,222,1,222,1,222,1,222,1,222,1,222,1,222,1,223,1,223,1,223,
	1,224,1,224,1,224,1,224,1,224,1,224,1,224,1,224,1,224,1,224,1,225,1,225,
	1,225,1,225,1,225,1,225,1,225,1,225,1,225,1,225,1,226,1,226,1,226,1,226,
	1,226,1,226,1,226,1,226,1,226,1,227,1,227,1,227,1,227,1,227,1,227,1,227,
	1,227,1,227,1,227,1,228,1,228,1,228,1,228,1,228,1,228,1,228,1,228,1,228,
	1,228,1,229,1,229,1,229,1,229,1,229,1,229,1,230,1,230,1,230,1,230,1,230,
	1,230,1,230,1,230,1,231,1,231,1,231,1,231,1,231,1,231,1,231,1,231,1,232,
	1,232,1,232,1,232,1,232,1,232,1,232,1,232,1,232,1,233,1,233,1,233,1,233,
	1,233,1,233,1,233,1,234,1,234,1,234,1,234,1,234,1,234,1,234,1,234,1,234,
	1,234,1,234,1,234,1,235,1,235,1,235,1,235,1,235,1,235,1,235,1,236,1,236,
	1,236,1,236,1,236,1,236,1,236,1,236,1,237,1,237,1,237,1,237,1,237,1,237,
	1,237,1,237,1,238,1,238,1,238,1,238,1,238,1,238,1,238,1,238,1,238,1,238,
	1,239,1,239,1,239,1,239,1,240,1,240,1,240,1,240,1,240,1,240,1,241,1,241,
	1,241,1,241,1,241,1,241,1,241,1,241,1,241,1,242,1,242,1,242,1,242,1,242,
	1,242,1,243,1,243,1,243,1,243,1,243,1,244,1,244,1,244,1,244,1,244,1,244,
	1,244,1,244,1,244,1,244,1,245,1,245,1,245,1,245,1,245,1,245,1,246,1,246,
	1,246,1,246,1,246,1,246,1,246,1,247,1,247,1,247,1,247,1,247,1,248,1,248,
	1,248,1,248,1,248,1,248,1,249,1,249,1,249,1,249,1,249,1,249,1,249,1,249,
	1,249,1,250,1,250,1,250,1,250,1,250,1,251,1,251,1,251,1,251,1,251,1,251,
	1,251,1,251,1,252,1,252,1,252,1,252,1,252,1,252,1,253,1,253,1,253,1,253,
	1,253,1,253,1,253,1,253,1,254,1,254,1,254,1,254,1,254,1,254,1,254,1,254,
	1,254,1,254,1,254,1,254,1,254,1,255,1,255,1,255,1,255,1,255,1,255,1,255,
	1,255,1,255,1,256,1,256,1,256,1,256,1,256,1,256,1,257,1,257,1,257,1,257,
	1,257,1,257,1,257,1,258,1,258,1,258,1,258,1,258,1,258,1,258,1,258,1,258,
	1,259,1,259,1,259,1,259,1,259,1,260,1,260,1,260,1,260,1,260,1,260,1,261,
	1,261,1,261,1,261,1,261,1,262,1,262,1,262,1,262,1,262,1,263,1,263,1,263,
	1,263,1,263,1,263,1,264,1,264,1,264,1,264,1,264,1,265,1,265,1,265,1,266,
	1,266,1,266,1,266,1,266,1,266,1,266,1,266,1,267,1,267,1,267,1,267,1,267,
	1,267,1,267,1,268,1,268,1,268,1,268,1,268,1,268,1,268,1,269,1,269,1,269,
	1,269,1,269,1,269,1,270,1,270,1,270,1,270,1,270,1,270,1,270,1,271,1,271,
	1,271,1,272,1,272,1,272,1,272,1,273,1,273,1,273,1,273,1,273,1,274,1,274,
	1,274,1,274,1,274,1,274,1,274,1,274,1,274,1,275,1,275,1,275,1,275,1,275,
	1,275,1,275,1,276,1,276,1,276,1,276,1,276,1,276,1,276,1,276,1,277,1,277,
	1,277,1,277,1,277,1,277,1,278,1,278,1,278,1,278,1,278,1,278,1,279,1,279,
	1,279,1,279,1,279,1,279,1,279,1,280,1,280,1,280,1,280,1,280,1,280,1,280,
	1,280,1,281,1,281,1,281,1,281,1,281,1,281,1,281,1,281,1,281,1,281,1,282,
	1,282,1,282,1,282,1,282,1,282,1,282,1,282,1,283,1,283,1,283,1,283,1,283,
	1,283,1,283,1,283,1,283,1,284,1,284,1,284,1,284,1,284,1,284,1,285,1,285,
	1,285,1,285,1,285,1,285,1,285,1,285,1,285,1,285,1,286,1,286,1,286,1,286,
	1,286,1,286,1,286,1,286,1,287,1,287,1,287,1,287,1,287,1,287,1,287,1,287,
	1,287,1,288,1,288,1,288,1,288,1,288,1,288,1,288,1,288,1,288,1,289,1,289,
	1,289,1,289,1,289,1,289,1,290,1,290,1,290,1,290,1,290,1,290,1,290,1,290,
	1,290,1,290,1,290,1,291,1,291,1,291,1,291,1,291,1,291,1,291,1,291,1,291,
	1,291,1,291,1,292,1,292,1,292,1,292,1,292,1,292,1,292,1,292,1,292,1,292,
	1,293,1,293,1,293,1,293,1,293,1,293,1,293,1,293,1,294,1,294,1,294,1,294,
	1,294,1,294,1,295,1,295,1,295,1,295,1,295,1,295,1,296,1,296,1,296,1,296,
	1,296,1,297,1,297,1,297,1,297,1,297,1,297,1,297,1,297,1,297,1,298,1,298,
	1,298,1,298,1,298,1,298,1,298,1,298,1,299,1,299,1,299,1,299,1,299,1,299,
	1,299,1,299,1,299,1,299,1,300,1,300,1,300,1,300,1,301,1,301,1,301,1,301,
	1,301,1,301,1,301,1,301,1,302,1,302,1,302,1,302,1,302,1,302,1,302,1,302,
	1,303,1,303,1,303,1,303,1,303,1,303,1,303,1,303,1,303,1,304,1,304,1,304,
	1,304,1,304,1,304,1,304,1,304,1,305,1,305,1,305,1,305,1,305,1,305,1,305,
	1,306,1,306,1,306,1,306,1,306,1,306,1,306,1,306,1,306,1,306,1,306,1,307,
	1,307,1,307,1,307,1,307,1,307,1,307,1,307,1,308,1,308,1,308,1,308,1,308,
	1,308,1,308,1,308,1,309,1,309,1,309,1,309,1,309,1,309,1,310,1,310,1,310,
	1,310,1,310,1,310,1,310,1,310,1,311,1,311,1,311,1,311,1,311,1,311,1,311,
	1,311,1,311,1,312,1,312,1,312,1,312,1,312,1,312,1,312,1,312,1,313,1,313,
	1,313,1,313,1,313,1,313,1,313,1,314,1,314,1,314,1,314,1,314,1,315,1,315,
	1,315,1,315,1,315,1,315,1,315,1,315,1,315,1,316,1,316,1,316,1,316,1,316,
	1,317,1,317,1,317,1,317,1,317,1,318,1,318,1,318,1,318,1,318,1,318,1,318,
	1,318,1,318,1,318,1,319,1,319,1,319,1,319,1,319,1,319,1,319,1,320,1,320,
	1,320,1,320,1,320,1,320,1,320,1,321,1,321,1,321,1,321,1,321,1,321,1,321,
	1,322,1,322,1,322,1,322,1,322,1,322,1,322,1,323,1,323,1,323,1,323,1,323,
	1,323,1,323,1,323,1,323,1,324,1,324,1,324,1,324,1,324,1,324,1,324,1,324,
	1,324,1,325,1,325,1,325,1,325,1,325,1,325,1,325,1,325,1,325,1,325,1,326,
	1,326,1,326,1,326,1,326,1,326,1,326,1,326,1,326,1,326,1,326,1,326,1,326,
	1,327,1,327,1,327,1,327,1,327,1,327,1,327,1,328,1,328,1,328,1,328,1,328,
	1,328,1,328,1,328,1,329,1,329,1,329,1,329,1,330,1,330,1,330,1,330,1,330,
	1,330,1,331,1,331,1,331,1,331,1,331,1,332,1,332,1,332,1,332,1,332,1,332,
	1,332,1,333,1,333,1,333,1,333,1,333,1,333,1,333,1,333,1,333,1,334,1,334,
	1,334,1,334,1,334,1,334,1,334,1,335,1,335,1,335,1,335,1,335,1,335,1,335,
	1,335,1,335,1,335,1,335,1,336,1,336,1,336,1,336,1,336,1,336,1,337,1,337,
	1,337,1,337,1,337,1,337,1,337,1,337,1,337,1,337,1,338,1,338,1,338,1,338,
	1,338,1,338,1,338,1,338,1,338,1,338,1,338,1,339,1,339,1,339,1,339,1,339,
	1,339,1,340,1,340,1,340,1,340,1,340,1,340,1,340,1,341,1,341,1,341,1,341,
	1,341,1,341,1,341,1,341,1,342,1,342,1,342,1,342,1,342,1,342,1,342,1,343,
	1,343,1,343,1,343,1,343,1,343,1,344,1,344,1,344,1,344,1,344,1,344,1,345,
	1,345,1,345,1,345,1,345,1,345,1,345,1,346,1,346,1,346,1,346,1,346,1,346,
	1,346,1,347,1,347,1,347,1,347,1,347,1,347,1,347,1,347,1,347,1,347,1,347,
	1,348,1,348,1,348,1,348,1,348,1,349,1,349,1,349,1,349,1,349,1,349,1,349,
	1,349,1,349,1,350,1,350,1,350,1,350,1,350,1,350,1,350,1,350,1,350,1,350,
	1,351,1,351,1,351,1,351,1,351,1,352,1,352,1,352,1,352,1,352,1,352,1,352,
	1,352,1,352,1,352,1,352,1,352,1,353,1,353,1,353,1,353,1,353,1,353,1,353,
	1,353,1,354,1,354,1,354,1,354,1,354,1,354,1,354,1,354,1,354,1,355,1,355,
	1,355,1,355,1,355,1,355,1,355,1,355,1,356,1,356,1,356,1,356,1,356,1,357,
	1,357,1,357,1,357,1,357,1,357,1,358,1,358,1,358,1,358,1,358,1,358,1,358,
	1,358,1,358,1,358,1,359,1,359,1,359,1,359,1,359,1,359,1,359,1,359,1,359,
	1,359,1,359,1,359,1,360,1,360,1,360,1,360,1,360,1,360,1,360,1,360,1,360,
	1,360,1,360,1,360,1,361,1,361,1,361,1,361,1,361,1,361,1,361,1,361,1,362,
	1,362,1,362,1,362,1,362,1,362,1,362,1,362,1,362,1,363,1,363,1,363,1,363,
	1,363,1,363,1,363,1,363,1,363,1,364,1,364,1,364,1,364,1,364,1,364,1,365,
	1,365,1,365,1,365,1,365,1,365,1,365,1,366,1,366,1,366,1,366,1,366,1,366,
	1,366,1,367,1,367,1,367,1,367,1,367,1,367,1,368,1,368,1,368,1,368,1,368,
	1,368,1,368,1,368,1,368,1,369,1,369,1,369,1,369,1,369,1,369,1,369,1,369,
	1,369,1,369,1,370,1,370,1,370,1,370,1,370,1,370,1,370,1,370,1,371,1,371,
	1,371,1,371,1,371,1,371,1,371,1,371,1,372,1,372,1,372,1,372,1,372,1,373,
	1,373,1,373,1,373,1,373,1,373,1,373,1,373,1,373,1,374,1,374,1,374,1,374,
	1,374,1,374,1,374,1,374,1,374,1,374,1,374,1,375,1,375,1,375,1,375,1,375,
	1,375,1,375,1,375,1,376,1,376,1,376,1,376,1,376,1,377,1,377,1,377,1,377,
	1,377,1,377,1,377,1,377,1,378,1,378,1,378,1,378,1,378,1,378,1,379,1,379,
	1,379,1,379,1,380,1,380,1,380,1,380,1,380,1,381,1,381,1,381,1,381,1,382,
	1,382,1,382,1,382,1,382,1,383,1,383,1,383,1,383,1,383,1,383,1,383,1,383,
	1,384,1,384,1,384,1,384,1,384,1,384,1,384,1,385,1,385,1,385,1,385,1,386,
	1,386,1,386,1,386,1,386,1,386,1,386,1,386,1,387,1,387,1,387,1,387,1,387,
	1,388,1,388,1,388,1,388,1,388,1,388,1,388,1,388,1,388,1,388,1,389,1,389,
	1,389,1,389,1,389,1,389,1,389,1,389,1,389,1,390,1,390,1,390,1,390,1,391,
	1,391,1,391,1,391,1,391,1,391,1,391,1,391,1,392,1,392,1,392,1,392,1,392,
	1,392,1,392,1,393,1,393,1,393,1,393,1,393,1,393,1,393,1,393,1,394,1,394,
	1,394,1,394,1,394,1,394,1,395,1,395,1,395,1,395,1,395,1,395,1,395,1,395,
	1,395,1,396,1,396,1,396,1,396,1,396,1,396,1,397,1,397,1,397,1,397,1,398,
	1,398,1,398,1,398,1,398,1,398,1,398,1,398,1,399,1,399,1,399,1,399,1,399,
	1,399,1,399,1,399,1,399,1,400,1,400,1,400,1,400,1,400,1,400,1,401,1,401,
	1,401,1,401,1,401,1,401,1,401,1,401,1,401,1,402,1,402,1,402,1,402,1,402,
	1,402,1,403,1,403,1,403,1,403,1,403,1,404,1,404,1,404,1,404,1,404,1,404,
	1,404,1,405,1,405,1,405,1,405,1,405,1,405,1,405,1,405,1,406,1,406,1,406,
	1,406,1,406,1,406,1,406,1,406,1,407,1,407,1,407,1,407,1,407,1,407,1,407,
	1,407,1,407,1,408,1,408,1,408,1,408,1,408,1,408,1,408,1,408,1,408,1,408,
	1,409,1,409,1,409,1,409,1,409,1,410,1,410,1,410,1,410,1,411,1,411,1,411,
	1,411,1,411,1,411,1,412,1,412,1,412,1,412,1,412,1,412,1,412,1,412,1,412,
	1,413,1,413,1,413,1,413,1,413,1,413,1,413,1,413,1,413,1,413,1,414,1,414,
	1,414,1,414,1,414,1,415,1,415,1,415,1,415,1,415,1,415,1,415,1,415,1,415,
	1,415,1,416,1,416,1,416,1,416,1,416,1,416,1,417,1,417,1,417,1,417,1,417,
	1,418,1,418,1,418,1,418,1,418,1,418,1,418,1,419,1,419,1,419,1,419,1,419,
	1,419,1,419,1,419,1,420,1,420,1,420,1,420,1,420,1,420,1,420,1,420,1,420,
	1,420,1,420,1,420,1,420,1,420,1,421,1,421,1,421,1,421,1,421,1,421,1,421,
	1,421,1,421,1,421,1,421,1,422,1,422,1,422,1,422,1,422,1,422,1,422,1,423,
	1,423,1,423,1,423,1,423,1,423,1,423,1,423,1,423,1,423,1,423,1,423,1,423,
	1,423,1,423,1,423,1,423,1,423,1,423,1,424,1,424,1,424,1,424,1,424,1,424,
	1,424,1,424,1,424,1,424,1,424,1,424,1,424,1,424,1,424,1,424,1,424,1,424,
	1,424,1,424,1,424,1,424,1,424,1,424,1,424,1,424,1,424,1,424,1,425,1,425,
	1,425,1,425,1,425,1,425,1,425,1,425,1,425,1,425,1,425,1,425,1,425,1,425,
	1,425,1,425,1,425,1,425,1,425,1,425,1,425,1,425,1,425,1,425,1,425,1,425,
	1,425,1,426,1,426,1,426,1,426,1,426,1,426,1,427,1,427,1,427,1,427,1,427,
	1,427,1,427,1,427,1,427,1,427,1,427,1,427,1,427,1,428,1,428,1,428,1,428,
	1,428,1,428,1,428,1,428,1,428,1,428,1,429,1,429,1,429,1,429,1,429,1,429,
	1,429,1,429,1,429,1,429,1,429,1,430,1,430,1,430,1,430,1,430,1,430,1,430,
	1,430,1,430,1,430,1,431,1,431,1,431,1,431,1,431,1,431,1,431,1,431,1,431,
	1,431,1,432,1,432,1,432,1,432,1,432,1,432,1,432,1,432,1,432,1,433,1,433,
	1,433,1,433,1,433,1,433,1,434,1,434,1,434,1,434,1,434,1,434,1,434,1,434,
	1,435,1,435,1,435,1,435,1,435,1,435,1,435,1,435,1,435,1,435,1,435,1,435,
	1,435,1,436,1,436,1,436,1,436,1,436,1,437,1,437,1,437,1,437,1,437,1,437,
	1,437,1,437,1,438,1,438,1,438,1,438,1,438,1,438,1,438,1,439,1,439,1,439,
	1,439,1,439,1,439,1,439,1,440,1,440,1,440,1,440,1,440,1,440,1,440,1,440,
	1,440,1,440,1,440,1,441,1,441,1,441,1,441,1,441,1,441,1,441,1,441,1,441,
	1,441,1,442,1,442,1,442,1,442,1,442,1,442,1,442,1,443,1,443,1,443,1,443,
	1,443,1,443,1,443,1,444,1,444,1,444,1,444,1,444,1,444,1,444,1,444,1,445,
	1,445,1,445,1,445,1,445,1,445,1,445,1,445,1,446,1,446,1,446,1,446,1,446,
	1,446,1,446,1,446,1,446,1,446,1,447,1,447,1,447,1,447,1,447,1,447,1,447,
	1,448,1,448,1,448,1,448,1,448,1,448,1,448,1,449,1,449,1,449,1,449,1,449,
	1,449,1,449,1,450,1,450,1,450,1,450,1,450,1,450,1,450,1,450,1,450,1,450,
	1,450,1,450,1,451,1,451,1,451,1,451,1,452,1,452,1,452,1,452,1,453,1,453,
	1,453,1,453,1,453,1,453,1,454,1,454,1,454,1,454,1,454,1,454,1,454,1,454,
	1,454,1,454,1,454,1,454,1,454,1,455,1,455,1,455,1,455,1,455,1,455,1,455,
	1,455,1,455,1,455,1,455,1,455,1,456,1,456,1,456,1,456,1,457,1,457,1,457,
	1,457,1,458,1,458,1,458,1,458,1,458,1,458,1,458,1,458,1,458,1,459,1,459,
	1,459,1,459,1,459,1,459,1,459,1,459,1,460,1,460,1,460,1,460,1,460,1,460,
	1,460,1,460,1,460,1,460,1,460,1,461,1,461,1,461,1,461,1,461,1,461,1,462,
	1,462,1,462,1,462,1,462,1,462,1,462,1,462,1,463,1,463,1,463,1,463,1,463,
	1,463,1,463,1,463,1,463,1,464,1,464,1,464,1,464,1,465,1,465,1,465,1,465,
	1,465,1,465,1,465,1,465,1,466,1,466,1,466,1,466,1,466,1,466,1,466,1,466,
	1,466,1,466,1,466,1,467,1,467,1,467,1,467,1,467,1,467,1,467,1,467,1,467,
	1,468,1,468,1,468,1,468,1,468,1,469,1,469,1,469,1,469,1,469,1,469,1,469,
	1,470,1,470,1,470,1,470,1,470,1,471,1,471,1,471,1,471,1,471,1,471,1,471,
	1,472,1,472,1,472,1,472,1,472,1,473,1,473,1,473,1,473,1,473,1,473,1,473,
	1,473,1,473,1,474,1,474,1,474,1,474,1,474,1,475,1,475,1,475,1,475,1,475,
	1,475,1,475,1,475,1,475,1,475,1,475,1,475,1,476,1,476,1,476,1,476,1,476,
	1,476,1,476,1,476,1,476,1,476,1,476,1,477,1,477,1,477,1,477,1,477,1,477,
	1,477,1,477,1,477,1,478,1,478,1,478,1,478,1,478,1,478,1,478,1,478,1,479,
	1,479,1,479,1,479,1,479,1,479,1,479,1,479,1,479,1,479,1,479,1,479,1,479,
	1,479,1,480,1,480,1,480,1,480,1,480,1,480,1,480,1,480,1,481,1,481,1,481,
	1,481,1,481,1,481,1,481,1,481,1,481,1,481,1,481,1,482,1,482,1,482,1,482,
	1,482,1,482,1,482,1,483,1,483,1,483,1,483,1,483,1,483,1,483,1,484,1,484,
	1,484,1,484,1,484,1,484,1,484,1,485,1,485,1,485,1,485,1,485,1,485,1,485,
	1,486,1,486,1,486,1,486,1,487,1,487,1,487,1,487,1,488,1,488,1,488,1,488,
	1,488,1,489,1,489,1,489,1,489,1,489,1,490,1,490,1,490,1,490,1,490,1,490,
	1,490,1,490,1,491,1,491,1,491,1,491,1,491,1,491,1,492,1,492,1,492,1,492,
	1,492,1,492,1,492,1,492,1,492,1,492,1,493,1,493,1,493,1,493,1,493,1,494,
	1,494,1,494,1,494,1,494,1,494,1,494,1,494,1,494,1,494,1,494,1,494,1,494,
	1,494,1,494,1,494,1,494,1,494,1,494,1,494,1,495,1,495,1,495,1,495,1,495,
	1,495,1,495,1,495,1,495,1,495,1,495,1,495,1,495,1,495,1,495,1,495,1,495,
	1,495,1,496,1,496,1,496,1,496,1,496,1,496,1,497,1,497,1,497,1,497,1,497,
	1,497,1,497,1,497,1,497,1,497,1,497,1,497,1,497,1,498,1,498,1,498,1,498,
	1,498,1,498,1,498,1,498,1,498,1,498,1,498,1,499,1,499,1,499,1,499,1,499,
	1,499,1,500,1,500,1,500,1,500,1,500,1,500,1,500,1,500,1,500,1,501,1,501,
	1,501,1,501,1,501,1,501,1,501,1,501,1,502,1,502,1,502,1,502,1,503,1,503,
	1,503,1,503,1,503,1,503,1,503,1,503,1,503,1,503,1,503,1,503,1,504,1,504,
	1,504,1,504,1,504,1,504,1,504,1,504,1,505,1,505,1,505,1,505,1,505,1,505,
	1,506,1,506,1,506,1,506,1,506,1,506,1,507,1,507,1,507,1,507,1,507,1,507,
	1,507,1,507,1,508,1,508,1,508,1,508,1,508,1,508,1,508,1,508,1,509,1,509,
	1,509,1,509,1,509,1,509,1,510,1,510,1,510,1,510,1,510,1,511,1,511,1,511,
	1,511,1,511,1,511,1,511,1,512,1,512,1,512,1,512,1,512,1,512,1,513,1,513,
	1,513,1,513,1,513,1,513,1,514,1,514,1,514,1,514,1,514,1,514,1,514,1,514,
	1,514,1,515,1,515,1,515,1,515,1,515,1,515,1,516,1,516,1,516,1,516,1,517,
	1,517,1,517,1,517,1,517,1,518,1,518,1,518,1,518,1,518,1,518,1,518,1,519,
	1,519,1,519,1,519,1,519,1,519,1,519,1,519,1,520,1,520,1,520,1,520,1,520,
	1,520,1,520,1,520,1,520,1,520,1,521,1,521,1,521,1,521,1,521,1,521,1,521,
	1,522,1,522,1,522,1,522,1,522,1,523,1,523,1,523,1,523,1,523,1,524,1,524,
	1,524,1,524,1,525,1,525,1,525,1,525,1,525,1,526,1,526,1,526,1,526,1,526,
	1,527,1,527,1,527,1,527,1,527,1,527,1,527,1,527,1,528,1,528,1,528,1,528,
	1,528,1,528,1,528,1,528,1,529,1,529,1,529,1,529,1,530,1,530,1,530,1,530,
	1,531,1,531,1,531,1,531,1,531,1,531,1,531,1,531,1,531,1,531,1,532,1,532,
	1,532,1,532,1,532,1,532,1,533,1,533,1,533,1,533,1,534,1,534,1,534,1,534,
	1,535,1,535,1,535,1,536,1,536,1,536,1,536,1,536,1,536,1,537,1,537,1,537,
	1,537,1,537,1,537,1,537,1,537,1,537,1,537,1,538,1,538,1,538,1,538,1,539,
	1,539,1,539,1,540,1,540,1,540,1,540,1,540,1,540,1,541,1,541,1,541,1,541,
	1,541,1,541,1,541,1,541,1,542,1,542,1,542,1,542,1,542,1,542,1,543,1,543,
	1,543,1,543,1,543,1,543,1,544,1,544,1,544,1,544,1,544,1,545,1,545,1,545,
	1,545,1,545,1,546,1,546,1,546,1,546,1,546,1,546,1,546,1,546,1,546,1,546,
	1,546,1,547,1,547,1,547,1,547,1,547,1,547,1,548,1,548,1,548,1,548,1,548,
	1,548,1,548,1,548,1,548,1,548,1,548,1,548,1,548,1,549,1,549,1,549,1,549,
	1,549,1,549,1,549,1,550,1,550,1,550,1,550,1,550,1,550,1,550,1,550,1,551,
	1,551,1,551,1,551,1,551,1,552,1,552,1,552,1,552,1,552,1,552,1,553,1,553,
	1,553,1,553,1,553,1,554,1,554,1,554,1,554,1,554,1,554,1,555,1,555,1,555,
	1,555,1,555,1,556,1,556,1,556,1,556,1,556,1,556,1,557,1,557,1,557,1,557,
	1,557,1,557,1,558,1,558,1,558,1,558,1,558,1,558,1,558,1,559,1,559,1,559,
	1,559,1,560,1,560,1,560,1,560,1,560,1,561,1,561,1,561,1,561,1,562,1,562,
	1,562,1,562,1,562,1,563,1,563,1,563,1,563,1,564,1,564,1,564,1,564,1,564,
	1,565,1,565,1,565,1,565,1,566,1,566,1,566,1,566,1,566,1,567,1,567,1,567,
	1,567,1,567,1,568,1,568,1,568,1,568,1,568,1,569,1,569,1,569,1,569,1,569,
	1,570,1,570,1,570,1,570,1,570,1,570,1,571,1,571,1,571,1,571,1,571,1,571,
	1,572,1,572,1,572,1,572,1,572,1,572,1,573,1,573,1,573,1,573,1,573,1,573,
	1,573,1,573,1,573,1,573,1,573,1,574,1,574,1,574,1,574,1,574,1,574,1,574,
	1,574,1,574,1,574,1,574,1,574,1,575,1,575,1,575,1,575,1,575,1,575,1,575,
	1,575,1,575,1,575,1,575,1,575,1,575,1,575,1,575,1,575,1,575,1,576,1,576,
	1,576,1,576,1,576,1,576,1,577,1,577,1,577,1,577,1,577,1,577,1,577,1,577,
	1,577,1,577,1,577,1,577,1,577,1,578,1,578,1,578,1,578,1,578,1,578,1,579,
	1,579,1,579,1,579,1,579,1,579,1,580,1,580,1,580,1,580,1,580,1,580,1,581,
	1,581,1,581,1,581,1,582,1,582,1,582,1,582,1,582,1,582,1,582,1,583,1,583,
	1,583,1,583,1,583,1,583,1,583,1,583,1,583,1,583,1,584,1,584,1,584,1,584,
	1,584,1,584,1,584,1,585,1,585,1,585,1,585,1,585,1,585,1,585,1,585,1,586,
	1,586,1,586,1,586,1,586,1,586,1,586,1,587,1,587,1,587,1,587,1,587,1,588,
	1,588,1,588,1,588,1,588,1,588,1,589,1,589,1,589,1,589,1,590,1,590,1,590,
	1,590,1,590,1,590,1,590,1,590,1,590,1,590,1,590,1,590,1,591,1,591,1,591,
	1,591,1,591,1,591,1,591,1,591,1,591,1,591,1,591,1,591,1,591,1,591,1,591,
	1,591,1,591,1,591,1,591,1,592,1,592,1,592,1,592,1,592,1,592,1,592,1,592,
	1,592,1,592,1,592,1,592,1,593,1,593,1,593,1,593,1,593,1,593,1,593,1,593,
	1,593,1,593,1,593,1,593,1,593,1,593,1,594,1,594,1,594,1,594,1,594,1,594,
	1,594,1,594,1,594,1,594,1,594,1,594,1,594,1,594,1,594,1,595,1,595,1,595,
	1,595,1,595,1,595,1,595,1,595,1,595,1,595,1,595,1,595,1,595,1,596,1,596,
	1,596,1,596,1,596,1,596,1,596,1,596,1,596,1,596,1,596,1,596,1,596,1,597,
	1,597,1,597,1,597,1,597,1,597,1,597,1,597,1,597,1,597,1,597,1,597,1,598,
	1,598,1,598,1,598,1,598,1,598,1,598,1,598,1,598,1,598,1,598,1,598,1,598,
	1,599,1,599,1,599,1,599,1,599,1,599,1,599,1,599,1,599,1,599,1,599,1,599,
	1,599,1,599,1,599,1,600,1,600,1,600,1,600,1,600,1,600,1,600,1,600,1,600,
	1,600,1,600,1,600,1,600,1,600,1,600,1,601,1,601,1,601,1,601,1,601,1,601,
	1,601,1,601,1,601,1,601,1,601,1,601,1,601,1,601,1,601,1,601,1,601,1,601,
	1,601,1,601,1,601,1,601,1,602,1,602,1,602,1,602,1,602,1,602,1,602,1,602,
	1,602,1,602,1,602,1,602,1,602,1,602,1,602,1,602,1,602,1,602,1,602,1,602,
	1,602,1,602,1,603,1,603,1,603,1,603,1,603,1,603,1,603,1,603,1,603,1,603,
	1,603,1,603,1,603,1,603,1,604,1,604,1,604,1,604,1,604,1,604,1,604,1,605,
	1,605,1,605,1,605,1,605,1,606,1,606,1,606,1,606,1,606,1,606,1,607,1,607,
	1,607,1,607,1,607,1,607,1,607,1,607,1,607,1,607,1,607,1,608,1,608,1,608,
	1,608,1,608,1,608,1,608,1,608,1,608,1,608,1,608,1,608,1,609,1,609,1,609,
	1,609,1,609,1,609,1,609,1,609,1,609,1,609,1,609,1,609,1,609,1,609,1,609,
	1,609,1,610,1,610,1,610,1,610,1,610,1,610,1,610,1,610,1,610,1,610,1,610,
	1,610,1,610,1,610,1,610,1,610,1,611,1,611,1,611,1,611,1,611,1,611,1,611,
	1,612,1,612,1,612,1,612,1,612,1,612,1,612,1,613,1,613,1,613,1,613,1,613,
	1,613,1,613,1,613,1,613,1,614,1,614,1,614,1,614,1,614,1,614,1,614,1,615,
	1,615,1,615,1,615,1,615,1,615,1,615,1,615,1,615,1,615,1,616,1,616,1,616,
	1,616,1,616,1,616,1,616,1,617,1,617,1,617,1,617,1,618,1,618,1,618,1,618,
	1,618,1,618,1,618,1,618,1,618,1,618,1,618,1,618,1,618,1,618,1,618,1,618,
	1,619,1,619,1,619,1,619,1,619,1,619,1,619,1,619,1,619,1,620,1,620,1,620,
	1,620,1,620,1,620,1,620,1,620,1,620,1,620,1,621,1,621,1,621,1,621,1,621,
	1,621,1,621,1,621,1,621,1,621,1,621,1,622,1,622,1,622,1,622,1,622,1,622,
	1,622,1,622,1,622,1,623,1,623,1,623,1,623,1,623,1,623,1,623,1,623,1,623,
	1,623,1,623,1,623,1,623,1,624,1,624,1,624,1,624,1,624,1,624,1,624,1,624,
	1,624,1,624,1,624,1,624,1,624,1,624,1,625,1,625,1,625,1,625,1,625,1,625,
	1,625,1,625,1,625,1,625,1,625,1,625,1,625,1,625,1,625,1,625,1,625,1,626,
	1,626,1,626,1,626,1,626,1,626,1,626,1,626,1,626,1,626,1,627,1,627,1,627,
	1,627,1,627,1,627,1,627,1,627,1,627,1,627,1,627,1,627,1,627,1,627,1,628,
	1,628,1,628,1,628,1,628,1,628,1,628,1,628,1,628,1,628,1,629,1,629,1,629,
	1,629,1,629,1,629,1,629,1,629,1,629,1,629,1,629,1,629,1,629,1,629,1,629,
	1,630,1,630,1,630,1,630,1,630,1,630,1,630,1,630,1,630,1,630,1,630,1,630,
	1,630,1,630,1,630,1,630,1,630,1,631,1,631,1,631,1,631,1,632,1,632,1,632,
	1,632,1,632,1,632,1,632,1,632,1,632,1,632,1,632,1,632,1,632,1,632,1,632,
	1,632,1,632,1,632,1,632,1,632,1,633,1,633,1,633,1,633,1,633,1,633,1,633,
	1,633,1,633,1,633,1,634,1,634,1,634,1,634,1,634,1,634,1,634,1,634,1,634,
	1,634,1,634,1,634,1,634,1,634,1,634,1,634,1,634,1,634,1,634,1,634,1,634,
	1,634,1,635,1,635,1,635,1,635,1,635,1,635,1,635,1,635,1,635,1,635,1,635,
	1,635,1,635,1,636,1,636,1,636,1,636,1,636,1,636,1,636,1,636,1,637,1,637,
	1,637,1,637,1,637,1,637,1,637,1,637,1,638,1,638,1,638,1,638,1,638,1,638,
	1,638,1,638,1,638,1,638,1,639,1,639,5,639,6323,8,639,10,639,12,639,6326,
	9,639,1,640,1,640,1,640,1,640,1,640,1,640,3,640,6334,8,640,1,641,1,641,
	3,641,6338,8,641,1,642,1,642,3,642,6342,8,642,1,643,1,643,1,643,1,644,1,
	644,1,644,1,644,5,644,6351,8,644,10,644,12,644,6354,9,644,1,645,1,645,1,
	645,1,646,1,646,1,646,1,646,5,646,6363,8,646,10,646,12,646,6366,9,646,1,
	647,1,647,1,647,1,647,1,648,1,648,1,648,1,648,1,649,1,649,1,649,1,649,1,
	650,1,650,1,650,1,650,1,651,1,651,1,651,1,652,1,652,1,652,1,652,5,652,6391,
	8,652,10,652,12,652,6394,9,652,1,653,1,653,1,653,1,653,1,653,1,653,1,654,
	1,654,1,654,1,655,1,655,1,655,1,655,1,656,1,656,3,656,6411,8,656,1,656,
	1,656,1,656,1,656,1,656,1,657,1,657,5,657,6420,8,657,10,657,12,657,6423,
	9,657,1,658,1,658,1,658,1,659,1,659,1,659,5,659,6431,8,659,10,659,12,659,
	6434,9,659,1,660,1,660,1,660,1,661,1,661,1,661,1,662,1,662,1,662,1,663,
	1,663,1,663,5,663,6448,8,663,10,663,12,663,6451,9,663,1,664,1,664,1,664,
	1,665,1,665,1,665,1,666,1,666,1,667,1,667,1,667,1,667,1,667,1,667,1,668,
	1,668,1,668,3,668,6470,8,668,1,668,1,668,3,668,6474,8,668,1,668,3,668,6477,
	8,668,1,668,1,668,1,668,1,668,3,668,6483,8,668,1,668,3,668,6486,8,668,1,
	668,1,668,1,668,3,668,6491,8,668,1,668,1,668,3,668,6495,8,668,1,669,4,669,
	6498,8,669,11,669,12,669,6499,1,670,1,670,1,670,5,670,6505,8,670,10,670,
	12,670,6508,9,670,1,671,1,671,1,671,1,671,1,671,1,671,1,671,1,671,5,671,
	6518,8,671,10,671,12,671,6521,9,671,1,671,1,671,1,672,4,672,6526,8,672,
	11,672,12,672,6527,1,672,1,672,1,673,1,673,3,673,6534,8,673,1,673,3,673,
	6537,8,673,1,673,1,673,1,674,1,674,1,674,1,674,5,674,6545,8,674,10,674,
	12,674,6548,9,674,1,674,1,674,1,675,1,675,1,675,1,675,5,675,6556,8,675,
	10,675,12,675,6559,9,675,1,675,1,675,1,675,4,675,6564,8,675,11,675,12,675,
	6565,1,675,1,675,4,675,6570,8,675,11,675,12,675,6571,1,675,5,675,6575,8,
	675,10,675,12,675,6578,9,675,1,675,5,675,6581,8,675,10,675,12,675,6584,
	9,675,1,675,1,675,1,675,1,675,1,675,1,676,1,676,1,676,1,676,5,676,6595,
	8,676,10,676,12,676,6598,9,676,1,676,1,676,1,676,4,676,6603,8,676,11,676,
	12,676,6604,1,676,1,676,4,676,6609,8,676,11,676,12,676,6610,1,676,3,676,
	6614,8,676,5,676,6616,8,676,10,676,12,676,6619,9,676,1,676,4,676,6622,8,
	676,11,676,12,676,6623,1,676,4,676,6627,8,676,11,676,12,676,6628,1,676,
	5,676,6632,8,676,10,676,12,676,6635,9,676,1,676,3,676,6638,8,676,1,676,
	1,676,1,677,1,677,1,677,1,677,5,677,6646,8,677,10,677,12,677,6649,9,677,
	1,677,5,677,6652,8,677,10,677,12,677,6655,9,677,1,677,1,677,5,677,6659,
	8,677,10,677,12,677,6662,9,677,3,677,6664,8,677,1,678,1,678,1,678,1,679,
	1,679,1,680,1,680,1,680,1,680,1,680,1,681,1,681,3,681,6678,8,681,1,681,
	1,681,1,682,1,682,1,682,1,682,1,682,1,682,1,682,1,682,1,682,1,682,1,682,
	1,682,1,682,1,682,1,682,1,682,1,682,1,682,1,682,1,682,3,682,6702,8,682,
	1,682,5,682,6705,8,682,10,682,12,682,6708,9,682,1,683,1,683,1,683,1,683,
	1,683,1,684,1,684,3,684,6717,8,684,1,684,1,684,1,685,1,685,1,685,1,685,
	1,685,5,685,6726,8,685,10,685,12,685,6729,9,685,1,686,1,686,1,686,1,686,
	1,686,1,687,1,687,1,687,1,687,1,687,1,687,1,688,1,688,1,688,1,688,1,688,
	1,689,1,689,1,689,1,689,1,689,1,690,1,690,1,690,1,690,1,690,1,691,1,691,
	1,691,1,691,1,691,1,692,1,692,1,692,1,692,1,692,1,693,4,693,6768,8,693,
	11,693,12,693,6769,1,693,1,693,5,693,6774,8,693,10,693,12,693,6777,9,693,
	3,693,6779,8,693,1,694,1,694,3,694,6783,8,694,1,694,1,694,1,694,1,694,1,
	694,1,694,1,694,0,0,695,5,1,7,2,9,3,11,4,13,5,15,6,17,7,19,8,21,9,23,10,
	25,11,27,12,29,13,31,14,33,15,35,16,37,17,39,18,41,19,43,20,45,21,47,22,
	49,23,51,24,53,25,55,26,57,27,59,28,61,29,63,0,65,0,67,0,69,0,71,30,73,
	31,75,32,77,33,79,34,81,35,83,36,85,37,87,38,89,39,91,40,93,41,95,42,97,
	43,99,44,101,45,103,46,105,47,107,48,109,49,111,50,113,51,115,52,117,53,
	119,54,121,55,123,56,125,57,127,58,129,59,131,60,133,61,135,62,137,63,139,
	64,141,65,143,66,145,67,147,68,149,69,151,70,153,71,155,72,157,73,159,74,
	161,75,163,76,165,77,167,78,169,79,171,80,173,81,175,82,177,83,179,84,181,
	85,183,86,185,87,187,88,189,89,191,90,193,91,195,92,197,93,199,94,201,95,
	203,96,205,97,207,98,209,99,211,100,213,101,215,102,217,103,219,104,221,
	105,223,106,225,107,227,108,229,109,231,110,233,111,235,112,237,113,239,
	114,241,115,243,116,245,117,247,118,249,119,251,120,253,121,255,122,257,
	123,259,124,261,125,263,126,265,127,267,128,269,129,271,130,273,131,275,
	132,277,133,279,134,281,135,283,136,285,137,287,138,289,139,291,140,293,
	141,295,142,297,143,299,144,301,145,303,146,305,147,307,148,309,149,311,
	150,313,151,315,152,317,153,319,154,321,155,323,156,325,157,327,158,329,
	159,331,160,333,161,335,162,337,163,339,164,341,165,343,166,345,167,347,
	168,349,169,351,170,353,171,355,172,357,173,359,174,361,175,363,176,365,
	177,367,178,369,179,371,180,373,181,375,182,377,183,379,184,381,185,383,
	186,385,187,387,188,389,189,391,190,393,191,395,192,397,193,399,194,401,
	195,403,196,405,197,407,198,409,199,411,200,413,201,415,202,417,203,419,
	204,421,205,423,206,425,207,427,208,429,209,431,210,433,211,435,212,437,
	213,439,214,441,215,443,216,445,217,447,218,449,219,451,220,453,221,455,
	222,457,223,459,224,461,225,463,226,465,227,467,228,469,229,471,230,473,
	231,475,232,477,233,479,234,481,235,483,236,485,237,487,238,489,239,491,
	240,493,241,495,242,497,243,499,244,501,245,503,246,505,247,507,248,509,
	249,511,250,513,251,515,252,517,253,519,254,521,255,523,256,525,257,527,
	258,529,259,531,260,533,261,535,262,537,263,539,264,541,265,543,266,545,
	267,547,268,549,269,551,270,553,271,555,272,557,273,559,274,561,275,563,
	276,565,277,567,278,569,279,571,280,573,281,575,282,577,283,579,284,581,
	285,583,286,585,287,587,288,589,289,591,290,593,291,595,292,597,293,599,
	294,601,295,603,296,605,297,607,298,609,299,611,300,613,301,615,302,617,
	303,619,304,621,305,623,306,625,307,627,308,629,309,631,310,633,311,635,
	312,637,313,639,314,641,315,643,316,645,317,647,318,649,319,651,320,653,
	321,655,322,657,323,659,324,661,325,663,326,665,327,667,328,669,329,671,
	330,673,331,675,332,677,333,679,334,681,335,683,336,685,337,687,338,689,
	339,691,340,693,341,695,342,697,343,699,344,701,345,703,346,705,347,707,
	348,709,349,711,350,713,351,715,352,717,353,719,354,721,355,723,356,725,
	357,727,358,729,359,731,360,733,361,735,362,737,363,739,364,741,365,743,
	366,745,367,747,368,749,369,751,370,753,371,755,372,757,373,759,374,761,
	375,763,376,765,377,767,378,769,379,771,380,773,381,775,382,777,383,779,
	384,781,385,783,386,785,387,787,388,789,389,791,390,793,391,795,392,797,
	393,799,394,801,395,803,396,805,397,807,398,809,399,811,400,813,401,815,
	402,817,403,819,404,821,405,823,406,825,407,827,408,829,409,831,410,833,
	411,835,412,837,413,839,414,841,415,843,416,845,417,847,418,849,419,851,
	420,853,421,855,422,857,423,859,424,861,425,863,426,865,427,867,428,869,
	429,871,430,873,431,875,432,877,433,879,434,881,435,883,436,885,437,887,
	438,889,439,891,440,893,441,895,442,897,443,899,444,901,445,903,446,905,
	447,907,448,909,449,911,450,913,451,915,452,917,453,919,454,921,455,923,
	456,925,457,927,458,929,459,931,460,933,461,935,462,937,463,939,464,941,
	465,943,466,945,467,947,468,949,469,951,470,953,471,955,472,957,473,959,
	474,961,475,963,476,965,477,967,478,969,479,971,480,973,481,975,482,977,
	483,979,484,981,485,983,486,985,487,987,488,989,489,991,490,993,491,995,
	492,997,493,999,494,1001,495,1003,496,1005,497,1007,498,1009,499,1011,500,
	1013,501,1015,502,1017,503,1019,504,1021,505,1023,506,1025,507,1027,508,
	1029,509,1031,510,1033,511,1035,512,1037,513,1039,514,1041,515,1043,516,
	1045,517,1047,518,1049,519,1051,520,1053,521,1055,522,1057,523,1059,524,
	1061,525,1063,526,1065,527,1067,528,1069,529,1071,530,1073,531,1075,532,
	1077,533,1079,534,1081,535,1083,536,1085,537,1087,538,1089,539,1091,540,
	1093,541,1095,542,1097,543,1099,544,1101,545,1103,546,1105,547,1107,548,
	1109,549,1111,550,1113,551,1115,552,1117,553,1119,554,1121,555,1123,556,
	1125,557,1127,558,1129,559,1131,560,1133,561,1135,562,1137,563,1139,564,
	1141,565,1143,566,1145,567,1147,568,1149,569,1151,570,1153,571,1155,572,
	1157,573,1159,574,1161,575,1163,576,1165,577,1167,578,1169,579,1171,580,
	1173,581,1175,582,1177,583,1179,584,1181,585,1183,586,1185,587,1187,588,
	1189,589,1191,590,1193,591,1195,592,1197,593,1199,594,1201,595,1203,596,
	1205,597,1207,598,1209,599,1211,600,1213,601,1215,602,1217,603,1219,604,
	1221,605,1223,606,1225,607,1227,608,1229,609,1231,610,1233,611,1235,612,
	1237,613,1239,614,1241,615,1243,616,1245,617,1247,618,1249,619,1251,620,
	1253,621,1255,622,1257,623,1259,624,1261,625,1263,626,1265,627,1267,628,
	1269,629,1271,630,1273,631,1275,632,1277,633,1279,634,1281,635,1283,636,
	1285,0,1287,0,1289,0,1291,637,1293,638,1295,639,1297,640,1299,641,1301,
	642,1303,643,1305,644,1307,645,1309,646,1311,0,1313,647,1315,648,1317,649,
	1319,0,1321,650,1323,651,1325,652,1327,653,1329,654,1331,655,1333,656,1335,
	657,1337,658,1339,659,1341,660,1343,0,1345,661,1347,662,1349,663,1351,664,
	1353,665,1355,666,1357,667,1359,668,1361,669,1363,670,1365,671,1367,672,
	1369,0,1371,673,1373,674,1375,0,1377,0,1379,0,1381,675,1383,0,1385,0,1387,
	679,1389,676,1391,677,1393,678,5,0,1,2,3,4,51,1,0,48,57,2,0,43,43,45,45,
	9,0,33,33,35,35,37,38,42,42,60,64,94,94,96,96,124,124,126,126,2,0,42,43,
	60,62,8,0,33,33,35,35,37,38,63,64,94,94,96,96,124,124,126,126,2,0,65,65,
	97,97,2,0,76,76,108,108,2,0,78,78,110,110,2,0,89,89,121,121,2,0,83,83,115,
	115,2,0,69,69,101,101,2,0,90,90,122,122,2,0,68,68,100,100,2,0,82,82,114,
	114,2,0,67,67,99,99,2,0,77,77,109,109,2,0,84,84,116,116,2,0,73,73,105,105,
	2,0,66,66,98,98,2,0,79,79,111,111,2,0,72,72,104,104,2,0,75,75,107,107,2,
	0,85,85,117,117,2,0,71,71,103,103,2,0,80,80,112,112,2,0,70,70,102,102,2,
	0,88,88,120,120,2,0,86,86,118,118,2,0,81,81,113,113,2,0,87,87,119,119,2,
	0,74,74,106,106,9,0,65,90,95,95,97,122,170,170,181,181,186,186,192,214,
	216,246,248,255,2,0,256,55295,57344,65535,1,0,55296,56319,1,0,56320,57343,
	2,0,0,0,34,34,1,0,34,34,1,0,39,39,1,0,48,49,3,0,48,57,65,70,97,102,3,0,
	65,90,95,95,97,122,5,0,36,36,48,57,65,90,95,95,97,122,2,0,34,34,92,92,2,
	0,9,9,32,32,2,0,10,10,13,13,2,0,42,42,47,47,4,0,10,10,13,13,34,34,92,92,
	3,0,10,10,13,13,34,34,3,0,85,85,117,117,120,120,2,0,39,39,92,92,1,0,36,
	36,6863,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,
	15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,
	0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,33,1,0,0,0,0,35,1,0,0,0,0,
	37,1,0,0,0,0,39,1,0,0,0,0,41,1,0,0,0,0,43,1,0,0,0,0,45,1,0,0,0,0,47,1,0,
	0,0,0,49,1,0,0,0,0,51,1,0,0,0,0,53,1,0,0,0,0,55,1,0,0,0,0,57,1,0,0,0,0,
	59,1,0,0,0,0,61,1,0,0,0,0,63,1,0,0,0,0,71,1,0,0,0,0,73,1,0,0,0,0,75,1,0,
	0,0,0,77,1,0,0,0,0,79,1,0,0,0,0,81,1,0,0,0,0,83,1,0,0,0,0,85,1,0,0,0,0,
	87,1,0,0,0,0,89,1,0,0,0,0,91,1,0,0,0,0,93,1,0,0,0,0,95,1,0,0,0,0,97,1,0,
	0,0,0,99,1,0,0,0,0,101,1,0,0,0,0,103,1,0,0,0,0,105,1,0,0,0,0,107,1,0,0,
	0,0,109,1,0,0,0,0,111,1,0,0,0,0,113,1,0,0,0,0,115,1,0,0,0,0,117,1,0,0,0,
	0,119,1,0,0,0,0,121,1,0,0,0,0,123,1,0,0,0,0,125,1,0,0,0,0,127,1,0,0,0,0,
	129,1,0,0,0,0,131,1,0,0,0,0,133,1,0,0,0,0,135,1,0,0,0,0,137,1,0,0,0,0,139,
	1,0,0,0,0,141,1,0,0,0,0,143,1,0,0,0,0,145,1,0,0,0,0,147,1,0,0,0,0,149,1,
	0,0,0,0,151,1,0,0,0,0,153,1,0,0,0,0,155,1,0,0,0,0,157,1,0,0,0,0,159,1,0,
	0,0,0,161,1,0,0,0,0,163,1,0,0,0,0,165,1,0,0,0,0,167,1,0,0,0,0,169,1,0,0,
	0,0,171,1,0,0,0,0,173,1,0,0,0,0,175,1,0,0,0,0,177,1,0,0,0,0,179,1,0,0,0,
	0,181,1,0,0,0,0,183,1,0,0,0,0,185,1,0,0,0,0,187,1,0,0,0,0,189,1,0,0,0,0,
	191,1,0,0,0,0,193,1,0,0,0,0,195,1,0,0,0,0,197,1,0,0,0,0,199,1,0,0,0,0,201,
	1,0,0,0,0,203,1,0,0,0,0,205,1,0,0,0,0,207,1,0,0,0,0,209,1,0,0,0,0,211,1,
	0,0,0,0,213,1,0,0,0,0,215,1,0,0,0,0,217,1,0,0,0,0,219,1,0,0,0,0,221,1,0,
	0,0,0,223,1,0,0,0,0,225,1,0,0,0,0,227,1,0,0,0,0,229,1,0,0,0,0,231,1,0,0,
	0,0,233,1,0,0,0,0,235,1,0,0,0,0,237,1,0,0,0,0,239,1,0,0,0,0,241,1,0,0,0,
	0,243,1,0,0,0,0,245,1,0,0,0,0,247,1,0,0,0,0,249,1,0,0,0,0,251,1,0,0,0,0,
	253,1,0,0,0,0,255,1,0,0,0,0,257,1,0,0,0,0,259,1,0,0,0,0,261,1,0,0,0,0,263,
	1,0,0,0,0,265,1,0,0,0,0,267,1,0,0,0,0,269,1,0,0,0,0,271,1,0,0,0,0,273,1,
	0,0,0,0,275,1,0,0,0,0,277,1,0,0,0,0,279,1,0,0,0,0,281,1,0,0,0,0,283,1,0,
	0,0,0,285,1,0,0,0,0,287,1,0,0,0,0,289,1,0,0,0,0,291,1,0,0,0,0,293,1,0,0,
	0,0,295,1,0,0,0,0,297,1,0,0,0,0,299,1,0,0,0,0,301,1,0,0,0,0,303,1,0,0,0,
	0,305,1,0,0,0,0,307,1,0,0,0,0,309,1,0,0,0,0,311,1,0,0,0,0,313,1,0,0,0,0,
	315,1,0,0,0,0,317,1,0,0,0,0,319,1,0,0,0,0,321,1,0,0,0,0,323,1,0,0,0,0,325,
	1,0,0,0,0,327,1,0,0,0,0,329,1,0,0,0,0,331,1,0,0,0,0,333,1,0,0,0,0,335,1,
	0,0,0,0,337,1,0,0,0,0,339,1,0,0,0,0,341,1,0,0,0,0,343,1,0,0,0,0,345,1,0,
	0,0,0,347,1,0,0,0,0,349,1,0,0,0,0,351,1,0,0,0,0,353,1,0,0,0,0,355,1,0,0,
	0,0,357,1,0,0,0,0,359,1,0,0,0,0,361,1,0,0,0,0,363,1,0,0,0,0,365,1,0,0,0,
	0,367,1,0,0,0,0,369,1,0,0,0,0,371,1,0,0,0,0,373,1,0,0,0,0,375,1,0,0,0,0,
	377,1,0,0,0,0,379,1,0,0,0,0,381,1,0,0,0,0,383,1,0,0,0,0,385,1,0,0,0,0,387,
	1,0,0,0,0,389,1,0,0,0,0,391,1,0,0,0,0,393,1,0,0,0,0,395,1,0,0,0,0,397,1,
	0,0,0,0,399,1,0,0,0,0,401,1,0,0,0,0,403,1,0,0,0,0,405,1,0,0,0,0,407,1,0,
	0,0,0,409,1,0,0,0,0,411,1,0,0,0,0,413,1,0,0,0,0,415,1,0,0,0,0,417,1,0,0,
	0,0,419,1,0,0,0,0,421,1,0,0,0,0,423,1,0,0,0,0,425,1,0,0,0,0,427,1,0,0,0,
	0,429,1,0,0,0,0,431,1,0,0,0,0,433,1,0,0,0,0,435,1,0,0,0,0,437,1,0,0,0,0,
	439,1,0,0,0,0,441,1,0,0,0,0,443,1,0,0,0,0,445,1,0,0,0,0,447,1,0,0,0,0,449,
	1,0,0,0,0,451,1,0,0,0,0,453,1,0,0,0,0,455,1,0,0,0,0,457,1,0,0,0,0,459,1,
	0,0,0,0,461,1,0,0,0,0,463,1,0,0,0,0,465,1,0,0,0,0,467,1,0,0,0,0,469,1,0,
	0,0,0,471,1,0,0,0,0,473,1,0,0,0,0,475,1,0,0,0,0,477,1,0,0,0,0,479,1,0,0,
	0,0,481,1,0,0,0,0,483,1,0,0,0,0,485,1,0,0,0,0,487,1,0,0,0,0,489,1,0,0,0,
	0,491,1,0,0,0,0,493,1,0,0,0,0,495,1,0,0,0,0,497,1,0,0,0,0,499,1,0,0,0,0,
	501,1,0,0,0,0,503,1,0,0,0,0,505,1,0,0,0,0,507,1,0,0,0,0,509,1,0,0,0,0,511,
	1,0,0,0,0,513,1,0,0,0,0,515,1,0,0,0,0,517,1,0,0,0,0,519,1,0,0,0,0,521,1,
	0,0,0,0,523,1,0,0,0,0,525,1,0,0,0,0,527,1,0,0,0,0,529,1,0,0,0,0,531,1,0,
	0,0,0,533,1,0,0,0,0,535,1,0,0,0,0,537,1,0,0,0,0,539,1,0,0,0,0,541,1,0,0,
	0,0,543,1,0,0,0,0,545,1,0,0,0,0,547,1,0,0,0,0,549,1,0,0,0,0,551,1,0,0,0,
	0,553,1,0,0,0,0,555,1,0,0,0,0,557,1,0,0,0,0,559,1,0,0,0,0,561,1,0,0,0,0,
	563,1,0,0,0,0,565,1,0,0,0,0,567,1,0,0,0,0,569,1,0,0,0,0,571,1,0,0,0,0,573,
	1,0,0,0,0,575,1,0,0,0,0,577,1,0,0,0,0,579,1,0,0,0,0,581,1,0,0,0,0,583,1,
	0,0,0,0,585,1,0,0,0,0,587,1,0,0,0,0,589,1,0,0,0,0,591,1,0,0,0,0,593,1,0,
	0,0,0,595,1,0,0,0,0,597,1,0,0,0,0,599,1,0,0,0,0,601,1,0,0,0,0,603,1,0,0,
	0,0,605,1,0,0,0,0,607,1,0,0,0,0,609,1,0,0,0,0,611,1,0,0,0,0,613,1,0,0,0,
	0,615,1,0,0,0,0,617,1,0,0,0,0,619,1,0,0,0,0,621,1,0,0,0,0,623,1,0,0,0,0,
	625,1,0,0,0,0,627,1,0,0,0,0,629,1,0,0,0,0,631,1,0,0,0,0,633,1,0,0,0,0,635,
	1,0,0,0,0,637,1,0,0,0,0,639,1,0,0,0,0,641,1,0,0,0,0,643,1,0,0,0,0,645,1,
	0,0,0,0,647,1,0,0,0,0,649,1,0,0,0,0,651,1,0,0,0,0,653,1,0,0,0,0,655,1,0,
	0,0,0,657,1,0,0,0,0,659,1,0,0,0,0,661,1,0,0,0,0,663,1,0,0,0,0,665,1,0,0,
	0,0,667,1,0,0,0,0,669,1,0,0,0,0,671,1,0,0,0,0,673,1,0,0,0,0,675,1,0,0,0,
	0,677,1,0,0,0,0,679,1,0,0,0,0,681,1,0,0,0,0,683,1,0,0,0,0,685,1,0,0,0,0,
	687,1,0,0,0,0,689,1,0,0,0,0,691,1,0,0,0,0,693,1,0,0,0,0,695,1,0,0,0,0,697,
	1,0,0,0,0,699,1,0,0,0,0,701,1,0,0,0,0,703,1,0,0,0,0,705,1,0,0,0,0,707,1,
	0,0,0,0,709,1,0,0,0,0,711,1,0,0,0,0,713,1,0,0,0,0,715,1,0,0,0,0,717,1,0,
	0,0,0,719,1,0,0,0,0,721,1,0,0,0,0,723,1,0,0,0,0,725,1,0,0,0,0,727,1,0,0,
	0,0,729,1,0,0,0,0,731,1,0,0,0,0,733,1,0,0,0,0,735,1,0,0,0,0,737,1,0,0,0,
	0,739,1,0,0,0,0,741,1,0,0,0,0,743,1,0,0,0,0,745,1,0,0,0,0,747,1,0,0,0,0,
	749,1,0,0,0,0,751,1,0,0,0,0,753,1,0,0,0,0,755,1,0,0,0,0,757,1,0,0,0,0,759,
	1,0,0,0,0,761,1,0,0,0,0,763,1,0,0,0,0,765,1,0,0,0,0,767,1,0,0,0,0,769,1,
	0,0,0,0,771,1,0,0,0,0,773,1,0,0,0,0,775,1,0,0,0,0,777,1,0,0,0,0,779,1,0,
	0,0,0,781,1,0,0,0,0,783,1,0,0,0,0,785,1,0,0,0,0,787,1,0,0,0,0,789,1,0,0,
	0,0,791,1,0,0,0,0,793,1,0,0,0,0,795,1,0,0,0,0,797,1,0,0,0,0,799,1,0,0,0,
	0,801,1,0,0,0,0,803,1,0,0,0,0,805,1,0,0,0,0,807,1,0,0,0,0,809,1,0,0,0,0,
	811,1,0,0,0,0,813,1,0,0,0,0,815,1,0,0,0,0,817,1,0,0,0,0,819,1,0,0,0,0,821,
	1,0,0,0,0,823,1,0,0,0,0,825,1,0,0,0,0,827,1,0,0,0,0,829,1,0,0,0,0,831,1,
	0,0,0,0,833,1,0,0,0,0,835,1,0,0,0,0,837,1,0,0,0,0,839,1,0,0,0,0,841,1,0,
	0,0,0,843,1,0,0,0,0,845,1,0,0,0,0,847,1,0,0,0,0,849,1,0,0,0,0,851,1,0,0,
	0,0,853,1,0,0,0,0,855,1,0,0,0,0,857,1,0,0,0,0,859,1,0,0,0,0,861,1,0,0,0,
	0,863,1,0,0,0,0,865,1,0,0,0,0,867,1,0,0,0,0,869,1,0,0,0,0,871,1,0,0,0,0,
	873,1,0,0,0,0,875,1,0,0,0,0,877,1,0,0,0,0,879,1,0,0,0,0,881,1,0,0,0,0,883,
	1,0,0,0,0,885,1,0,0,0,0,887,1,0,0,0,0,889,1,0,0,0,0,891,1,0,0,0,0,893,1,
	0,0,0,0,895,1,0,0,0,0,897,1,0,0,0,0,899,1,0,0,0,0,901,1,0,0,0,0,903,1,0,
	0,0,0,905,1,0,0,0,0,907,1,0,0,0,0,909,1,0,0,0,0,911,1,0,0,0,0,913,1,0,0,
	0,0,915,1,0,0,0,0,917,1,0,0,0,0,919,1,0,0,0,0,921,1,0,0,0,0,923,1,0,0,0,
	0,925,1,0,0,0,0,927,1,0,0,0,0,929,1,0,0,0,0,931,1,0,0,0,0,933,1,0,0,0,0,
	935,1,0,0,0,0,937,1,0,0,0,0,939,1,0,0,0,0,941,1,0,0,0,0,943,1,0,0,0,0,945,
	1,0,0,0,0,947,1,0,0,0,0,949,1,0,0,0,0,951,1,0,0,0,0,953,1,0,0,0,0,955,1,
	0,0,0,0,957,1,0,0,0,0,959,1,0,0,0,0,961,1,0,0,0,0,963,1,0,0,0,0,965,1,0,
	0,0,0,967,1,0,0,0,0,969,1,0,0,0,0,971,1,0,0,0,0,973,1,0,0,0,0,975,1,0,0,
	0,0,977,1,0,0,0,0,979,1,0,0,0,0,981,1,0,0,0,0,983,1,0,0,0,0,985,1,0,0,0,
	0,987,1,0,0,0,0,989,1,0,0,0,0,991,1,0,0,0,0,993,1,0,0,0,0,995,1,0,0,0,0,
	997,1,0,0,0,0,999,1,0,0,0,0,1001,1,0,0,0,0,1003,1,0,0,0,0,1005,1,0,0,0,
	0,1007,1,0,0,0,0,1009,1,0,0,0,0,1011,1,0,0,0,0,1013,1,0,0,0,0,1015,1,0,
	0,0,0,1017,1,0,0,0,0,1019,1,0,0,0,0,1021,1,0,0,0,0,1023,1,0,0,0,0,1025,
	1,0,0,0,0,1027,1,0,0,0,0,1029,1,0,0,0,0,1031,1,0,0,0,0,1033,1,0,0,0,0,1035,
	1,0,0,0,0,1037,1,0,0,0,0,1039,1,0,0,0,0,1041,1,0,0,0,0,1043,1,0,0,0,0,1045,
	1,0,0,0,0,1047,1,0,0,0,0,1049,1,0,0,0,0,1051,1,0,0,0,0,1053,1,0,0,0,0,1055,
	1,0,0,0,0,1057,1,0,0,0,0,1059,1,0,0,0,0,1061,1,0,0,0,0,1063,1,0,0,0,0,1065,
	1,0,0,0,0,1067,1,0,0,0,0,1069,1,0,0,0,0,1071,1,0,0,0,0,1073,1,0,0,0,0,1075,
	1,0,0,0,0,1077,1,0,0,0,0,1079,1,0,0,0,0,1081,1,0,0,0,0,1083,1,0,0,0,0,1085,
	1,0,0,0,0,1087,1,0,0,0,0,1089,1,0,0,0,0,1091,1,0,0,0,0,1093,1,0,0,0,0,1095,
	1,0,0,0,0,1097,1,0,0,0,0,1099,1,0,0,0,0,1101,1,0,0,0,0,1103,1,0,0,0,0,1105,
	1,0,0,0,0,1107,1,0,0,0,0,1109,1,0,0,0,0,1111,1,0,0,0,0,1113,1,0,0,0,0,1115,
	1,0,0,0,0,1117,1,0,0,0,0,1119,1,0,0,0,0,1121,1,0,0,0,0,1123,1,0,0,0,0,1125,
	1,0,0,0,0,1127,1,0,0,0,0,1129,1,0,0,0,0,1131,1,0,0,0,0,1133,1,0,0,0,0,1135,
	1,0,0,0,0,1137,1,0,0,0,0,1139,1,0,0,0,0,1141,1,0,0,0,0,1143,1,0,0,0,0,1145,
	1,0,0,0,0,1147,1,0,0,0,0,1149,1,0,0,0,0,1151,1,0,0,0,0,1153,1,0,0,0,0,1155,
	1,0,0,0,0,1157,1,0,0,0,0,1159,1,0,0,0,0,1161,1,0,0,0,0,1163,1,0,0,0,0,1165,
	1,0,0,0,0,1167,1,0,0,0,0,1169,1,0,0,0,0,1171,1,0,0,0,0,1173,1,0,0,0,0,1175,
	1,0,0,0,0,1177,1,0,0,0,0,1179,1,0,0,0,0,1181,1,0,0,0,0,1183,1,0,0,0,0,1185,
	1,0,0,0,0,1187,1,0,0,0,0,1189,1,0,0,0,0,1191,1,0,0,0,0,1193,1,0,0,0,0,1195,
	1,0,0,0,0,1197,1,0,0,0,0,1199,1,0,0,0,0,1201,1,0,0,0,0,1203,1,0,0,0,0,1205,
	1,0,0,0,0,1207,1,0,0,0,0,1209,1,0,0,0,0,1211,1,0,0,0,0,1213,1,0,0,0,0,1215,
	1,0,0,0,0,1217,1,0,0,0,0,1219,1,0,0,0,0,1221,1,0,0,0,0,1223,1,0,0,0,0,1225,
	1,0,0,0,0,1227,1,0,0,0,0,1229,1,0,0,0,0,1231,1,0,0,0,0,1233,1,0,0,0,0,1235,
	1,0,0,0,0,1237,1,0,0,0,0,1239,1,0,0,0,0,1241,1,0,0,0,0,1243,1,0,0,0,0,1245,
	1,0,0,0,0,1247,1,0,0,0,0,1249,1,0,0,0,0,1251,1,0,0,0,0,1253,1,0,0,0,0,1255,
	1,0,0,0,0,1257,1,0,0,0,0,1259,1,0,0,0,0,1261,1,0,0,0,0,1263,1,0,0,0,0,1265,
	1,0,0,0,0,1267,1,0,0,0,0,1269,1,0,0,0,0,1271,1,0,0,0,0,1273,1,0,0,0,0,1275,
	1,0,0,0,0,1277,1,0,0,0,0,1279,1,0,0,0,0,1281,1,0,0,0,0,1283,1,0,0,0,0,1291,
	1,0,0,0,0,1293,1,0,0,0,0,1295,1,0,0,0,0,1297,1,0,0,0,0,1299,1,0,0,0,0,1301,
	1,0,0,0,0,1303,1,0,0,0,0,1305,1,0,0,0,0,1307,1,0,0,0,0,1309,1,0,0,0,0,1311,
	1,0,0,0,0,1313,1,0,0,0,0,1315,1,0,0,0,0,1317,1,0,0,0,0,1321,1,0,0,0,0,1323,
	1,0,0,0,0,1325,1,0,0,0,0,1327,1,0,0,0,0,1329,1,0,0,0,0,1331,1,0,0,0,0,1333,
	1,0,0,0,0,1335,1,0,0,0,0,1337,1,0,0,0,0,1339,1,0,0,0,0,1341,1,0,0,0,0,1345,
	1,0,0,0,0,1347,1,0,0,0,0,1349,1,0,0,0,0,1351,1,0,0,0,0,1353,1,0,0,0,0,1355,
	1,0,0,0,0,1357,1,0,0,0,0,1359,1,0,0,0,0,1361,1,0,0,0,0,1363,1,0,0,0,1,1365,
	1,0,0,0,1,1367,1,0,0,0,1,1371,1,0,0,0,1,1373,1,0,0,0,2,1377,1,0,0,0,2,1379,
	1,0,0,0,2,1381,1,0,0,0,3,1383,1,0,0,0,3,1385,1,0,0,0,3,1387,1,0,0,0,3,1389,
	1,0,0,0,4,1391,1,0,0,0,4,1393,1,0,0,0,5,1395,1,0,0,0,7,1397,1,0,0,0,9,1399,
	1,0,0,0,11,1401,1,0,0,0,13,1403,1,0,0,0,15,1405,1,0,0,0,17,1407,1,0,0,0,
	19,1409,1,0,0,0,21,1411,1,0,0,0,23,1413,1,0,0,0,25,1415,1,0,0,0,27,1417,
	1,0,0,0,29,1419,1,0,0,0,31,1421,1,0,0,0,33,1423,1,0,0,0,35,1425,1,0,0,0,
	37,1427,1,0,0,0,39,1429,1,0,0,0,41,1432,1,0,0,0,43,1435,1,0,0,0,45,1438,
	1,0,0,0,47,1441,1,0,0,0,49,1444,1,0,0,0,51,1447,1,0,0,0,53,1450,1,0,0,0,
	55,1453,1,0,0,0,57,1456,1,0,0,0,59,1458,1,0,0,0,61,1484,1,0,0,0,63,1495,
	1,0,0,0,65,1511,1,0,0,0,67,1513,1,0,0,0,69,1515,1,0,0,0,71,1517,1,0,0,0,
	73,1521,1,0,0,0,75,1529,1,0,0,0,77,1537,1,0,0,0,79,1541,1,0,0,0,81,1545,
	1,0,0,0,83,1551,1,0,0,0,85,1554,1,0,0,0,87,1558,1,0,0,0,89,1569,1,0,0,0,
	91,1574,1,0,0,0,93,1579,1,0,0,0,95,1584,1,0,0,0,97,1590,1,0,0,0,99,1598,
	1,0,0,0,101,1605,1,0,0,0,103,1616,1,0,0,0,105,1623,1,0,0,0,107,1639,1,0,
	0,0,109,1652,1,0,0,0,111,1665,1,0,0,0,113,1678,1,0,0,0,115,1696,1,0,0,0,
	117,1709,1,0,0,0,119,1717,1,0,0,0,121,1728,1,0,0,0,123,1733,1,0,0,0,125,
	1742,1,0,0,0,127,1745,1,0,0,0,129,1750,1,0,0,0,131,1757,1,0,0,0,133,1763,
	1,0,0,0,135,1769,1,0,0,0,137,1773,1,0,0,0,139,1781,1,0,0,0,141,1786,1,0,
	0,0,143,1792,1,0,0,0,145,1798,1,0,0,0,147,1805,1,0,0,0,149,1808,1,0,0,0,
	151,1818,1,0,0,0,153,1828,1,0,0,0,155,1833,1,0,0,0,157,1841,1,0,0,0,159,
	1849,1,0,0,0,161,1855,1,0,0,0,163,1865,1,0,0,0,165,1880,1,0,0,0,167,1884,
	1,0,0,0,169,1889,1,0,0,0,171,1896,1,0,0,0,173,1899,1,0,0,0,175,1904,1,0,
	0,0,177,1907,1,0,0,0,179,1913,1,0,0,0,181,1921,1,0,0,0,183,1929,1,0,0,0,
	185,1940,1,0,0,0,187,1950,1,0,0,0,189,1957,1,0,0,0,191,1970,1,0,0,0,193,
	1975,1,0,0,0,195,1985,1,0,0,0,197,1991,1,0,0,0,199,1996,1,0,0,0,201,1999,
	1,0,0,0,203,2008,1,0,0,0,205,2013,1,0,0,0,207,2019,1,0,0,0,209,2026,1,0,
	0,0,211,2031,1,0,0,0,213,2037,1,0,0,0,215,2046,1,0,0,0,217,2051,1,0,0,0,
	219,2057,1,0,0,0,221,2064,1,0,0,0,223,2069,1,0,0,0,225,2083,1,0,0,0,227,
	2090,1,0,0,0,229,2100,1,0,0,0,231,2113,1,0,0,0,233,2119,1,0,0,0,235,2134,
	1,0,0,0,237,2141,1,0,0,0,239,2146,1,0,0,0,241,2152,1,0,0,0,243,2158,1,0,
	0,0,245,2161,1,0,0,0,247,2168,1,0,0,0,249,2173,1,0,0,0,251,2178,1,0,0,0,
	253,2183,1,0,0,0,255,2191,1,0,0,0,257,2199,1,0,0,0,259,2205,1,0,0,0,261,
	2210,1,0,0,0,263,2219,1,0,0,0,265,2225,1,0,0,0,267,2233,1,0,0,0,269,2241,
	1,0,0,0,271,2247,1,0,0,0,273,2256,1,0,0,0,275,2263,1,0,0,0,277,2270,1,0,
	0,0,279,2274,1,0,0,0,281,2280,1,0,0,0,283,2286,1,0,0,0,285,2296,1,0,0,0,
	287,2301,1,0,0,0,289,2307,1,0,0,0,291,2314,1,0,0,0,293,2324,1,0,0,0,295,
	2335,1,0,0,0,297,2338,1,0,0,0,299,2348,1,0,0,0,301,2357,1,0,0,0,303,2364,
	1,0,0,0,305,2370,1,0,0,0,307,2373,1,0,0,0,309,2379,1,0,0,0,311,2386,1,0,
	0,0,313,2394,1,0,0,0,315,2403,1,0,0,0,317,2411,1,0,0,0,319,2417,1,0,0,0,
	321,2433,1,0,0,0,323,2444,1,0,0,0,325,2450,1,0,0,0,327,2456,1,0,0,0,329,
	2464,1,0,0,0,331,2472,1,0,0,0,333,2481,1,0,0,0,335,2488,1,0,0,0,337,2498,
	1,0,0,0,339,2512,1,0,0,0,341,2523,1,0,0,0,343,2535,1,0,0,0,345,2543,1,0,
	0,0,347,2552,1,0,0,0,349,2563,1,0,0,0,351,2568,1,0,0,0,353,2573,1,0,0,0,
	355,2577,1,0,0,0,357,2584,1,0,0,0,359,2590,1,0,0,0,361,2595,1,0,0,0,363,
	2604,1,0,0,0,365,2608,1,0,0,0,367,2619,1,0,0,0,369,2627,1,0,0,0,371,2636,
	1,0,0,0,373,2645,1,0,0,0,375,2653,1,0,0,0,377,2660,1,0,0,0,379,2670,1,0,
	0,0,381,2681,1,0,0,0,383,2692,1,0,0,0,385,2700,1,0,0,0,387,2708,1,0,0,0,
	389,2717,1,0,0,0,391,2724,1,0,0,0,393,2731,1,0,0,0,395,2736,1,0,0,0,397,
	2741,1,0,0,0,399,2748,1,0,0,0,401,2757,1,0,0,0,403,2767,1,0,0,0,405,2772,
	1,0,0,0,407,2779,1,0,0,0,409,2785,1,0,0,0,411,2793,1,0,0,0,413,2803,1,0,
	0,0,415,2813,1,0,0,0,417,2821,1,0,0,0,419,2829,1,0,0,0,421,2839,1,0,0,0,
	423,2848,1,0,0,0,425,2855,1,0,0,0,427,2861,1,0,0,0,429,2871,1,0,0,0,431,
	2877,1,0,0,0,433,2885,1,0,0,0,435,2894,1,0,0,0,437,2904,1,0,0,0,439,2911,
	1,0,0,0,441,2919,1,0,0,0,443,2927,1,0,0,0,445,2934,1,0,0,0,447,2939,1,0,
	0,0,449,2944,1,0,0,0,451,2953,1,0,0,0,453,2956,1,0,0,0,455,2966,1,0,0,0,
	457,2976,1,0,0,0,459,2985,1,0,0,0,461,2995,1,0,0,0,463,3005,1,0,0,0,465,
	3011,1,0,0,0,467,3019,1,0,0,0,469,3027,1,0,0,0,471,3036,1,0,0,0,473,3043,
	1,0,0,0,475,3055,1,0,0,0,477,3062,1,0,0,0,479,3070,1,0,0,0,481,3078,1,0,
	0,0,483,3088,1,0,0,0,485,3092,1,0,0,0,487,3098,1,0,0,0,489,3107,1,0,0,0,
	491,3113,1,0,0,0,493,3118,1,0,0,0,495,3128,1,0,0,0,497,3134,1,0,0,0,499,
	3141,1,0,0,0,501,3146,1,0,0,0,503,3152,1,0,0,0,505,3161,1,0,0,0,507,3166,
	1,0,0,0,509,3174,1,0,0,0,511,3180,1,0,0,0,513,3188,1,0,0,0,515,3201,1,0,
	0,0,517,3210,1,0,0,0,519,3216,1,0,0,0,521,3223,1,0,0,0,523,3232,1,0,0,0,
	525,3237,1,0,0,0,527,3243,1,0,0,0,529,3248,1,0,0,0,531,3253,1,0,0,0,533,
	3259,1,0,0,0,535,3264,1,0,0,0,537,3267,1,0,0,0,539,3275,1,0,0,0,541,3282,
	1,0,0,0,543,3289,1,0,0,0,545,3295,1,0,0,0,547,3302,1,0,0,0,549,3305,1,0,
	0,0,551,3309,1,0,0,0,553,3314,1,0,0,0,555,3323,1,0,0,0,557,3330,1,0,0,0,
	559,3338,1,0,0,0,561,3344,1,0,0,0,563,3350,1,0,0,0,565,3357,1,0,0,0,567,
	3365,1,0,0,0,569,3375,1,0,0,0,571,3383,1,0,0,0,573,3392,1,0,0,0,575,3398,
	1,0,0,0,577,3408,1,0,0,0,579,3416,1,0,0,0,581,3425,1,0,0,0,583,3434,1,0,
	0,0,585,3440,1,0,0,0,587,3451,1,0,0,0,589,3462,1,0,0,0,591,3472,1,0,0,0,
	593,3480,1,0,0,0,595,3486,1,0,0,0,597,3492,1,0,0,0,599,3497,1,0,0,0,601,
	3506,1,0,0,0,603,3514,1,0,0,0,605,3524,1,0,0,0,607,3528,1,0,0,0,609,3536,
	1,0,0,0,611,3544,1,0,0,0,613,3553,1,0,0,0,615,3561,1,0,0,0,617,3568,1,0,
	0,0,619,3579,1,0,0,0,621,3587,1,0,0,0,623,3595,1,0,0,0,625,3601,1,0,0,0,
	627,3609,1,0,0,0,629,3618,1,0,0,0,631,3626,1,0,0,0,633,3633,1,0,0,0,635,
	3638,1,0,0,0,637,3647,1,0,0,0,639,3652,1,0,0,0,641,3657,1,0,0,0,643,3667,
	1,0,0,0,645,3674,1,0,0,0,647,3681,1,0,0,0,649,3688,1,0,0,0,651,3695,1,0,
	0,0,653,3704,1,0,0,0,655,3713,1,0,0,0,657,3723,1,0,0,0,659,3736,1,0,0,0,
	661,3743,1,0,0,0,663,3751,1,0,0,0,665,3755,1,0,0,0,667,3761,1,0,0,0,669,
	3766,1,0,0,0,671,3773,1,0,0,0,673,3782,1,0,0,0,675,3789,1,0,0,0,677,3800,
	1,0,0,0,679,3806,1,0,0,0,681,3816,1,0,0,0,683,3827,1,0,0,0,685,3833,1,0,
	0,0,687,3840,1,0,0,0,689,3848,1,0,0,0,691,3855,1,0,0,0,693,3861,1,0,0,0,
	695,3867,1,0,0,0,697,3874,1,0,0,0,699,3881,1,0,0,0,701,3892,1,0,0,0,703,
	3897,1,0,0,0,705,3906,1,0,0,0,707,3916,1,0,0,0,709,3921,1,0,0,0,711,3933,
	1,0,0,0,713,3941,1,0,0,0,715,3950,1,0,0,0,717,3958,1,0,0,0,719,3963,1,0,
	0,0,721,3969,1,0,0,0,723,3979,1,0,0,0,725,3991,1,0,0,0,727,4003,1,0,0,0,
	729,4011,1,0,0,0,731,4020,1,0,0,0,733,4029,1,0,0,0,735,4035,1,0,0,0,737,
	4042,1,0,0,0,739,4049,1,0,0,0,741,4055,1,0,0,0,743,4064,1,0,0,0,745,4074,
	1,0,0,0,747,4082,1,0,0,0,749,4090,1,0,0,0,751,4095,1,0,0,0,753,4104,1,0,
	0,0,755,4115,1,0,0,0,757,4123,1,0,0,0,759,4128,1,0,0,0,761,4136,1,0,0,0,
	763,4142,1,0,0,0,765,4146,1,0,0,0,767,4151,1,0,0,0,769,4155,1,0,0,0,771,
	4160,1,0,0,0,773,4168,1,0,0,0,775,4175,1,0,0,0,777,4179,1,0,0,0,779,4187,
	1,0,0,0,781,4192,1,0,0,0,783,4202,1,0,0,0,785,4211,1,0,0,0,787,4215,1,0,
	0,0,789,4223,1,0,0,0,791,4230,1,0,0,0,793,4238,1,0,0,0,795,4244,1,0,0,0,
	797,4253,1,0,0,0,799,4259,1,0,0,0,801,4263,1,0,0,0,803,4271,1,0,0,0,805,
	4280,1,0,0,0,807,4286,1,0,0,0,809,4295,1,0,0,0,811,4301,1,0,0,0,813,4306,
	1,0,0,0,815,4313,1,0,0,0,817,4321,1,0,0,0,819,4329,1,0,0,0,821,4338,1,0,
	0,0,823,4348,1,0,0,0,825,4353,1,0,0,0,827,4357,1,0,0,0,829,4363,1,0,0,0,
	831,4372,1,0,0,0,833,4382,1,0,0,0,835,4387,1,0,0,0,837,4397,1,0,0,0,839,
	4403,1,0,0,0,841,4408,1,0,0,0,843,4415,1,0,0,0,845,4423,1,0,0,0,847,4437,
	1,0,0,0,849,4448,1,0,0,0,851,4455,1,0,0,0,853,4474,1,0,0,0,855,4502,1,0,
	0,0,857,4529,1,0,0,0,859,4535,1,0,0,0,861,4548,1,0,0,0,863,4558,1,0,0,0,
	865,4569,1,0,0,0,867,4579,1,0,0,0,869,4589,1,0,0,0,871,4598,1,0,0,0,873,
	4604,1,0,0,0,875,4612,1,0,0,0,877,4625,1,0,0,0,879,4630,1,0,0,0,881,4638,
	1,0,0,0,883,4645,1,0,0,0,885,4652,1,0,0,0,887,4663,1,0,0,0,889,4673,1,0,
	0,0,891,4680,1,0,0,0,893,4687,1,0,0,0,895,4695,1,0,0,0,897,4703,1,0,0,0,
	899,4713,1,0,0,0,901,4720,1,0,0,0,903,4727,1,0,0,0,905,4734,1,0,0,0,907,
	4746,1,0,0,0,909,4750,1,0,0,0,911,4754,1,0,0,0,913,4760,1,0,0,0,915,4773,
	1,0,0,0,917,4785,1,0,0,0,919,4789,1,0,0,0,921,4793,1,0,0,0,923,4802,1,0,
	0,0,925,4810,1,0,0,0,927,4821,1,0,0,0,929,4827,1,0,0,0,931,4835,1,0,0,0,
	933,4844,1,0,0,0,935,4848,1,0,0,0,937,4856,1,0,0,0,939,4867,1,0,0,0,941,
	4876,1,0,0,0,943,4881,1,0,0,0,945,4888,1,0,0,0,947,4893,1,0,0,0,949,4900,
	1,0,0,0,951,4905,1,0,0,0,953,4914,1,0,0,0,955,4919,1,0,0,0,957,4931,1,0,
	0,0,959,4942,1,0,0,0,961,4951,1,0,0,0,963,4959,1,0,0,0,965,4973,1,0,0,0,
	967,4981,1,0,0,0,969,4992,1,0,0,0,971,4999,1,0,0,0,973,5006,1,0,0,0,975,
	5013,1,0,0,0,977,5020,1,0,0,0,979,5024,1,0,0,0,981,5028,1,0,0,0,983,5033,
	1,0,0,0,985,5038,1,0,0,0,987,5046,1,0,0,0,989,5052,1,0,0,0,991,5062,1,0,
	0,0,993,5067,1,0,0,0,995,5087,1,0,0,0,997,5105,1,0,0,0,999,5111,1,0,0,0,
	1001,5124,1,0,0,0,1003,5135,1,0,0,0,1005,5141,1,0,0,0,1007,5150,1,0,0,0,
	1009,5158,1,0,0,0,1011,5162,1,0,0,0,1013,5174,1,0,0,0,1015,5182,1,0,0,0,
	1017,5188,1,0,0,0,1019,5194,1,0,0,0,1021,5202,1,0,0,0,1023,5210,1,0,0,0,
	1025,5216,1,0,0,0,1027,5221,1,0,0,0,1029,5228,1,0,0,0,1031,5234,1,0,0,0,
	1033,5240,1,0,0,0,1035,5249,1,0,0,0,1037,5255,1,0,0,0,1039,5259,1,0,0,0,
	1041,5264,1,0,0,0,1043,5271,1,0,0,0,1045,5279,1,0,0,0,1047,5289,1,0,0,0,
	1049,5296,1,0,0,0,1051,5301,1,0,0,0,1053,5306,1,0,0,0,1055,5310,1,0,0,0,
	1057,5315,1,0,0,0,1059,5320,1,0,0,0,1061,5328,1,0,0,0,1063,5336,1,0,0,0,
	1065,5340,1,0,0,0,1067,5344,1,0,0,0,1069,5354,1,0,0,0,1071,5360,1,0,0,0,
	1073,5364,1,0,0,0,1075,5368,1,0,0,0,1077,5371,1,0,0,0,1079,5377,1,0,0,0,
	1081,5387,1,0,0,0,1083,5391,1,0,0,0,1085,5394,1,0,0,0,1087,5400,1,0,0,0,
	1089,5408,1,0,0,0,1091,5414,1,0,0,0,1093,5420,1,0,0,0,1095,5425,1,0,0,0,
	1097,5430,1,0,0,0,1099,5441,1,0,0,0,1101,5447,1,0,0,0,1103,5460,1,0,0,0,
	1105,5467,1,0,0,0,1107,5475,1,0,0,0,1109,5480,1,0,0,0,1111,5486,1,0,0,0,
	1113,5491,1,0,0,0,1115,5497,1,0,0,0,1117,5502,1,0,0,0,1119,5508,1,0,0,0,
	1121,5514,1,0,0,0,1123,5521,1,0,0,0,1125,5525,1,0,0,0,1127,5530,1,0,0,0,
	1129,5534,1,0,0,0,1131,5539,1,0,0,0,1133,5543,1,0,0,0,1135,5548,1,0,0,0,
	1137,5552,1,0,0,0,1139,5557,1,0,0,0,1141,5562,1,0,0,0,1143,5567,1,0,0,0,
	1145,5572,1,0,0,0,1147,5578,1,0,0,0,1149,5584,1,0,0,0,1151,5590,1,0,0,0,
	1153,5601,1,0,0,0,1155,5613,1,0,0,0,1157,5630,1,0,0,0,1159,5636,1,0,0,0,
	1161,5649,1,0,0,0,1163,5655,1,0,0,0,1165,5661,1,0,0,0,1167,5667,1,0,0,0,
	1169,5671,1,0,0,0,1171,5678,1,0,0,0,1173,5688,1,0,0,0,1175,5695,1,0,0,0,
	1177,5703,1,0,0,0,1179,5710,1,0,0,0,1181,5715,1,0,0,0,1183,5721,1,0,0,0,
	1185,5725,1,0,0,0,1187,5737,1,0,0,0,1189,5756,1,0,0,0,1191,5768,1,0,0,0,
	1193,5782,1,0,0,0,1195,5797,1,0,0,0,1197,5810,1,0,0,0,1199,5823,1,0,0,0,
	1201,5835,1,0,0,0,1203,5848,1,0,0,0,1205,5863,1,0,0,0,1207,5878,1,0,0,0,
	1209,5900,1,0,0,0,1211,5922,1,0,0,0,1213,5936,1,0,0,0,1215,5943,1,0,0,0,
	1217,5948,1,0,0,0,1219,5954,1,0,0,0,1221,5965,1,0,0,0,1223,5977,1,0,0,0,
	1225,5993,1,0,0,0,1227,6009,1,0,0,0,1229,6016,1,0,0,0,1231,6023,1,0,0,0,
	1233,6032,1,0,0,0,1235,6039,1,0,0,0,1237,6049,1,0,0,0,1239,6056,1,0,0,0,
	1241,6060,1,0,0,0,1243,6076,1,0,0,0,1245,6085,1,0,0,0,1247,6095,1,0,0,0,
	1249,6106,1,0,0,0,1251,6115,1,0,0,0,1253,6128,1,0,0,0,1255,6142,1,0,0,0,
	1257,6159,1,0,0,0,1259,6169,1,0,0,0,1261,6183,1,0,0,0,1263,6193,1,0,0,0,
	1265,6208,1,0,0,0,1267,6225,1,0,0,0,1269,6229,1,0,0,0,1271,6249,1,0,0,0,
	1273,6259,1,0,0,0,1275,6281,1,0,0,0,1277,6294,1,0,0,0,1279,6302,1,0,0,0,
	1281,6310,1,0,0,0,1283,6320,1,0,0,0,1285,6333,1,0,0,0,1287,6337,1,0,0,0,
	1289,6341,1,0,0,0,1291,6343,1,0,0,0,1293,6346,1,0,0,0,1295,6355,1,0,0,0,
	1297,6358,1,0,0,0,1299,6367,1,0,0,0,1301,6371,1,0,0,0,1303,6375,1,0,0,0,
	1305,6379,1,0,0,0,1307,6383,1,0,0,0,1309,6386,1,0,0,0,1311,6395,1,0,0,0,
	1313,6401,1,0,0,0,1315,6404,1,0,0,0,1317,6408,1,0,0,0,1319,6417,1,0,0,0,
	1321,6424,1,0,0,0,1323,6427,1,0,0,0,1325,6435,1,0,0,0,1327,6438,1,0,0,0,
	1329,6441,1,0,0,0,1331,6444,1,0,0,0,1333,6452,1,0,0,0,1335,6455,1,0,0,0,
	1337,6458,1,0,0,0,1339,6460,1,0,0,0,1341,6494,1,0,0,0,1343,6497,1,0,0,0,
	1345,6501,1,0,0,0,1347,6509,1,0,0,0,1349,6525,1,0,0,0,1351,6536,1,0,0,0,
	1353,6540,1,0,0,0,1355,6551,1,0,0,0,1357,6590,1,0,0,0,1359,6641,1,0,0,0,
	1361,6665,1,0,0,0,1363,6668,1,0,0,0,1365,6670,1,0,0,0,1367,6675,1,0,0,0,
	1369,6706,1,0,0,0,1371,6709,1,0,0,0,1373,6714,1,0,0,0,1375,6727,1,0,0,0,
	1377,6730,1,0,0,0,1379,6735,1,0,0,0,1381,6741,1,0,0,0,1383,6746,1,0,0,0,
	1385,6751,1,0,0,0,1387,6756,1,0,0,0,1389,6761,1,0,0,0,1391,6778,1,0,0,0,
	1393,6780,1,0,0,0,1395,1396,5,36,0,0,1396,6,1,0,0,0,1397,1398,5,40,0,0,
	1398,8,1,0,0,0,1399,1400,5,41,0,0,1400,10,1,0,0,0,1401,1402,5,91,0,0,1402,
	12,1,0,0,0,1403,1404,5,93,0,0,1404,14,1,0,0,0,1405,1406,5,44,0,0,1406,16,
	1,0,0,0,1407,1408,5,59,0,0,1408,18,1,0,0,0,1409,1410,5,58,0,0,1410,20,1,
	0,0,0,1411,1412,5,42,0,0,1412,22,1,0,0,0,1413,1414,5,61,0,0,1414,24,1,0,
	0,0,1415,1416,5,46,0,0,1416,26,1,0,0,0,1417,1418,5,43,0,0,1418,28,1,0,0,
	0,1419,1420,5,45,0,0,1420,30,1,0,0,0,1421,1422,5,47,0,0,1422,32,1,0,0,0,
	1423,1424,5,94,0,0,1424,34,1,0,0,0,1425,1426,5,60,0,0,1426,36,1,0,0,0,1427,
	1428,5,62,0,0,1428,38,1,0,0,0,1429,1430,5,60,0,0,1430,1431,5,60,0,0,1431,
	40,1,0,0,0,1432,1433,5,62,0,0,1433,1434,5,62,0,0,1434,42,1,0,0,0,1435,1436,
	5,58,0,0,1436,1437,5,61,0,0,1437,44,1,0,0,0,1438,1439,5,60,0,0,1439,1440,
	5,61,0,0,1440,46,1,0,0,0,1441,1442,5,61,0,0,1442,1443,5,62,0,0,1443,48,
	1,0,0,0,1444,1445,5,62,0,0,1445,1446,5,61,0,0,1446,50,1,0,0,0,1447,1448,
	5,46,0,0,1448,1449,5,46,0,0,1449,52,1,0,0,0,1450,1451,5,60,0,0,1451,1452,
	5,62,0,0,1452,54,1,0,0,0,1453,1454,5,58,0,0,1454,1455,5,58,0,0,1455,56,
	1,0,0,0,1456,1457,5,37,0,0,1457,58,1,0,0,0,1458,1460,5,36,0,0,1459,1461,
	7,0,0,0,1460,1459,1,0,0,0,1461,1462,1,0,0,0,1462,1460,1,0,0,0,1462,1463,
	1,0,0,0,1463,60,1,0,0,0,1464,1480,3,65,30,0,1465,1469,5,43,0,0,1466,1467,
	5,45,0,0,1467,1469,4,28,0,0,1468,1465,1,0,0,0,1468,1466,1,0,0,0,1469,1470,
	1,0,0,0,1470,1468,1,0,0,0,1470,1471,1,0,0,0,1471,1475,1,0,0,0,1472,1476,
	3,65,30,0,1473,1474,5,47,0,0,1474,1476,4,28,1,0,1475,1472,1,0,0,0,1475,
	1473,1,0,0,0,1476,1480,1,0,0,0,1477,1478,5,47,0,0,1478,1480,4,28,2,0,1479,
	1464,1,0,0,0,1479,1468,1,0,0,0,1479,1477,1,0,0,0,1480,1481,1,0,0,0,1481,
	1479,1,0,0,0,1481,1482,1,0,0,0,1482,1485,1,0,0,0,1483,1485,7,1,0,0,1484,
	1479,1,0,0,0,1484,1483,1,0,0,0,1485,1486,1,0,0,0,1486,1487,6,28,0,0,1487,
	62,1,0,0,0,1488,1494,3,67,31,0,1489,1490,5,45,0,0,1490,1494,4,29,3,0,1491,
	1492,5,47,0,0,1492,1494,4,29,4,0,1493,1488,1,0,0,0,1493,1489,1,0,0,0,1493,
	1491,1,0,0,0,1494,1497,1,0,0,0,1495,1493,1,0,0,0,1495,1496,1,0,0,0,1496,
	1498,1,0,0,0,1497,1495,1,0,0,0,1498,1500,3,69,32,0,1499,1501,3,61,28,0,
	1500,1499,1,0,0,0,1500,1501,1,0,0,0,1501,1505,1,0,0,0,1502,1506,5,43,0,
	0,1503,1504,5,45,0,0,1504,1506,4,29,5,0,1505,1502,1,0,0,0,1505,1503,1,0,
	0,0,1506,1507,1,0,0,0,1507,1505,1,0,0,0,1507,1508,1,0,0,0,1508,1509,1,0,
	0,0,1509,1510,6,29,1,0,1510,64,1,0,0,0,1511,1512,7,2,0,0,1512,66,1,0,0,
	0,1513,1514,7,3,0,0,1514,68,1,0,0,0,1515,1516,7,4,0,0,1516,70,1,0,0,0,1517,
	1518,7,5,0,0,1518,1519,7,6,0,0,1519,1520,7,6,0,0,1520,72,1,0,0,0,1521,1522,
	7,5,0,0,1522,1523,7,7,0,0,1523,1524,7,5,0,0,1524,1525,7,6,0,0,1525,1526,
	7,8,0,0,1526,1527,7,9,0,0,1527,1528,7,10,0,0,1528,74,1,0,0,0,1529,1530,
	7,5,0,0,1530,1531,7,7,0,0,1531,1532,7,5,0,0,1532,1533,7,6,0,0,1533,1534,
	7,8,0,0,1534,1535,7,11,0,0,1535,1536,7,10,0,0,1536,76,1,0,0,0,1537,1538,
	7,5,0,0,1538,1539,7,7,0,0,1539,1540,7,12,0,0,1540,78,1,0,0,0,1541,1542,
	7,5,0,0,1542,1543,7,7,0,0,1543,1544,7,8,0,0,1544,80,1,0,0,0,1545,1546,7,
	5,0,0,1546,1547,7,13,0,0,1547,1548,7,13,0,0,1548,1549,7,5,0,0,1549,1550,
	7,8,0,0,1550,82,1,0,0,0,1551,1552,7,5,0,0,1552,1553,7,9,0,0,1553,84,1,0,
	0,0,1554,1555,7,5,0,0,1555,1556,7,9,0,0,1556,1557,7,14,0,0,1557,86,1,0,
	0,0,1558,1559,7,5,0,0,1559,1560,7,9,0,0,1560,1561,7,8,0,0,1561,1562,7,15,
	0,0,1562,1563,7,15,0,0,1563,1564,7,10,0,0,1564,1565,7,16,0,0,1565,1566,
	7,13,0,0,1566,1567,7,17,0,0,1567,1568,7,14,0,0,1568,88,1,0,0,0,1569,1570,
	7,18,0,0,1570,1571,7,19,0,0,1571,1572,7,16,0,0,1572,1573,7,20,0,0,1573,
	90,1,0,0,0,1574,1575,7,14,0,0,1575,1576,7,5,0,0,1576,1577,7,9,0,0,1577,
	1578,7,10,0,0,1578,92,1,0,0,0,1579,1580,7,14,0,0,1580,1581,7,5,0,0,1581,
	1582,7,9,0,0,1582,1583,7,16,0,0,1583,94,1,0,0,0,1584,1585,7,14,0,0,1585,
	1586,7,20,0,0,1586,1587,7,10,0,0,1587,1588,7,14,0,0,1588,1589,7,21,0,0,
	1589,96,1,0,0,0,1590,1591,7,14,0,0,1591,1592,7,19,0,0,1592,1593,7,6,0,0,
	1593,1594,7,6,0,0,1594,1595,7,5,0,0,1595,1596,7,16,0,0,1596,1597,7,10,0,
	0,1597,98,1,0,0,0,1598,1599,7,14,0,0,1599,1600,7,19,0,0,1600,1601,7,6,0,
	0,1601,1602,7,22,0,0,1602,1603,7,15,0,0,1603,1604,7,7,0,0,1604,100,1,0,
	0,0,1605,1606,7,14,0,0,1606,1607,7,19,0,0,1607,1608,7,7,0,0,1608,1609,7,
	9,0,0,1609,1610,7,16,0,0,1610,1611,7,13,0,0,1611,1612,7,5,0,0,1612,1613,
	7,17,0,0,1613,1614,7,7,0,0,1614,1615,7,16,0,0,1615,102,1,0,0,0,1616,1617,
	7,14,0,0,1617,1618,7,13,0,0,1618,1619,7,10,0,0,1619,1620,7,5,0,0,1620,1621,
	7,16,0,0,1621,1622,7,10,0,0,1622,104,1,0,0,0,1623,1624,7,14,0,0,1624,1625,
	7,22,0,0,1625,1626,7,13,0,0,1626,1627,7,13,0,0,1627,1628,7,10,0,0,1628,
	1629,7,7,0,0,1629,1630,7,16,0,0,1630,1631,5,95,0,0,1631,1632,7,14,0,0,1632,
	1633,7,5,0,0,1633,1634,7,16,0,0,1634,1635,7,5,0,0,1635,1636,7,6,0,0,1636,
	1637,7,19,0,0,1637,1638,7,23,0,0,1638,106,1,0,0,0,1639,1640,7,14,0,0,1640,
	1641,7,22,0,0,1641,1642,7,13,0,0,1642,1643,7,13,0,0,1643,1644,7,10,0,0,
	1644,1645,7,7,0,0,1645,1646,7,16,0,0,1646,1647,5,95,0,0,1647,1648,7,12,
	0,0,1648,1649,7,5,0,0,1649,1650,7,16,0,0,1650,1651,7,10,0,0,1651,108,1,
	0,0,0,1652,1653,7,14,0,0,1653,1654,7,22,0,0,1654,1655,7,13,0,0,1655,1656,
	7,13,0,0,1656,1657,7,10,0,0,1657,1658,7,7,0,0,1658,1659,7,16,0,0,1659,1660,
	5,95,0,0,1660,1661,7,13,0,0,1661,1662,7,19,0,0,1662,1663,7,6,0,0,1663,1664,
	7,10,0,0,1664,110,1,0,0,0,1665,1666,7,14,0,0,1666,1667,7,22,0,0,1667,1668,
	7,13,0,0,1668,1669,7,13,0,0,1669,1670,7,10,0,0,1670,1671,7,7,0,0,1671,1672,
	7,16,0,0,1672,1673,5,95,0,0,1673,1674,7,16,0,0,1674,1675,7,17,0,0,1675,
	1676,7,15,0,0,1676,1677,7,10,0,0,1677,112,1,0,0,0,1678,1679,7,14,0,0,1679,
	1680,7,22,0,0,1680,1681,7,13,0,0,1681,1682,7,13,0,0,1682,1683,7,10,0,0,
	1683,1684,7,7,0,0,1684,1685,7,16,0,0,1685,1686,5,95,0,0,1686,1687,7,16,
	0,0,1687,1688,7,17,0,0,1688,1689,7,15,0,0,1689,1690,7,10,0,0,1690,1691,
	7,9,0,0,1691,1692,7,16,0,0,1692,1693,7,5,0,0,1693,1694,7,15,0,0,1694,1695,
	7,24,0,0,1695,114,1,0,0,0,1696,1697,7,14,0,0,1697,1698,7,22,0,0,1698,1699,
	7,13,0,0,1699,1700,7,13,0,0,1700,1701,7,10,0,0,1701,1702,7,7,0,0,1702,1703,
	7,16,0,0,1703,1704,5,95,0,0,1704,1705,7,22,0,0,1705,1706,7,9,0,0,1706,1707,
	7,10,0,0,1707,1708,7,13,0,0,1708,116,1,0,0,0,1709,1710,7,12,0,0,1710,1711,
	7,10,0,0,1711,1712,7,25,0,0,1712,1713,7,5,0,0,1713,1714,7,22,0,0,1714,1715,
	7,6,0,0,1715,1716,7,16,0,0,1716,118,1,0,0,0,1717,1718,7,12,0,0,1718,1719,
	7,10,0,0,1719,1720,7,25,0,0,1720,1721,7,10,0,0,1721,1722,7,13,0,0,1722,
	1723,7,13,0,0,1723,1724,7,5,0,0,1724,1725,7,18,0,0,1725,1726,7,6,0,0,1726,
	1727,7,10,0,0,1727,120,1,0,0,0,1728,1729,7,12,0,0,1729,1730,7,10,0,0,1730,
	1731,7,9,0,0,1731,1732,7,14,0,0,1732,122,1,0,0,0,1733,1734,7,12,0,0,1734,
	1735,7,17,0,0,1735,1736,7,9,0,0,1736,1737,7,16,0,0,1737,1738,7,17,0,0,1738,
	1739,7,7,0,0,1739,1740,7,14,0,0,1740,1741,7,16,0,0,1741,124,1,0,0,0,1742,
	1743,7,12,0,0,1743,1744,7,19,0,0,1744,126,1,0,0,0,1745,1746,7,10,0,0,1746,
	1747,7,6,0,0,1747,1748,7,9,0,0,1748,1749,7,10,0,0,1749,128,1,0,0,0,1750,
	1751,7,10,0,0,1751,1752,7,26,0,0,1752,1753,7,14,0,0,1753,1754,7,10,0,0,
	1754,1755,7,24,0,0,1755,1756,7,16,0,0,1756,130,1,0,0,0,1757,1758,7,25,0,
	0,1758,1759,7,5,0,0,1759,1760,7,6,0,0,1760,1761,7,9,0,0,1761,1762,7,10,
	0,0,1762,132,1,0,0,0,1763,1764,7,25,0,0,1764,1765,7,10,0,0,1765,1766,7,
	16,0,0,1766,1767,7,14,0,0,1767,1768,7,20,0,0,1768,134,1,0,0,0,1769,1770,
	7,25,0,0,1770,1771,7,19,0,0,1771,1772,7,13,0,0,1772,136,1,0,0,0,1773,1774,
	7,25,0,0,1774,1775,7,19,0,0,1775,1776,7,13,0,0,1776,1777,7,10,0,0,1777,
	1778,7,17,0,0,1778,1779,7,23,0,0,1779,1780,7,7,0,0,1780,138,1,0,0,0,1781,
	1782,7,25,0,0,1782,1783,7,13,0,0,1783,1784,7,19,0,0,1784,1785,7,15,0,0,
	1785,140,1,0,0,0,1786,1787,7,23,0,0,1787,1788,7,13,0,0,1788,1789,7,5,0,
	0,1789,1790,7,7,0,0,1790,1791,7,16,0,0,1791,142,1,0,0,0,1792,1793,7,23,
	0,0,1793,1794,7,13,0,0,1794,1795,7,19,0,0,1795,1796,7,22,0,0,1796,1797,
	7,24,0,0,1797,144,1,0,0,0,1798,1799,7,20,0,0,1799,1800,7,5,0,0,1800,1801,
	7,27,0,0,1801,1802,7,17,0,0,1802,1803,7,7,0,0,1803,1804,7,23,0,0,1804,146,
	1,0,0,0,1805,1806,7,17,0,0,1806,1807,7,7,0,0,1807,148,1,0,0,0,1808,1809,
	7,17,0,0,1809,1810,7,7,0,0,1810,1811,7,17,0,0,1811,1812,7,16,0,0,1812,1813,
	7,17,0,0,1813,1814,7,5,0,0,1814,1815,7,6,0,0,1815,1816,7,6,0,0,1816,1817,
	7,8,0,0,1817,150,1,0,0,0,1818,1819,7,17,0,0,1819,1820,7,7,0,0,1820,1821,
	7,16,0,0,1821,1822,7,10,0,0,1822,1823,7,13,0,0,1823,1824,7,9,0,0,1824,1825,
	7,10,0,0,1825,1826,7,14,0,0,1826,1827,7,16,0,0,1827,152,1,0,0,0,1828,1829,
	7,17,0,0,1829,1830,7,7,0,0,1830,1831,7,16,0,0,1831,1832,7,19,0,0,1832,154,
	1,0,0,0,1833,1834,7,6,0,0,1834,1835,7,5,0,0,1835,1836,7,16,0,0,1836,1837,
	7,10,0,0,1837,1838,7,13,0,0,1838,1839,7,5,0,0,1839,1840,7,6,0,0,1840,156,
	1,0,0,0,1841,1842,7,6,0,0,1842,1843,7,10,0,0,1843,1844,7,5,0,0,1844,1845,
	7,12,0,0,1845,1846,7,17,0,0,1846,1847,7,7,0,0,1847,1848,7,23,0,0,1848,158,
	1,0,0,0,1849,1850,7,6,0,0,1850,1851,7,17,0,0,1851,1852,7,15,0,0,1852,1853,
	7,17,0,0,1853,1854,7,16,0,0,1854,160,1,0,0,0,1855,1856,7,6,0,0,1856,1857,
	7,19,0,0,1857,1858,7,14,0,0,1858,1859,7,5,0,0,1859,1860,7,6,0,0,1860,1861,
	7,16,0,0,1861,1862,7,17,0,0,1862,1863,7,15,0,0,1863,1864,7,10,0,0,1864,
	162,1,0,0,0,1865,1866,7,6,0,0,1866,1867,7,19,0,0,1867,1868,7,14,0,0,1868,
	1869,7,5,0,0,1869,1870,7,6,0,0,1870,1871,7,16,0,0,1871,1872,7,17,0,0,1872,
	1873,7,15,0,0,1873,1874,7,10,0,0,1874,1875,7,9,0,0,1875,1876,7,16,0,0,1876,
	1877,7,5,0,0,1877,1878,7,15,0,0,1878,1879,7,24,0,0,1879,164,1,0,0,0,1880,
	1881,7,7,0,0,1881,1882,7,19,0,0,1882,1883,7,16,0,0,1883,166,1,0,0,0,1884,
	1885,7,7,0,0,1885,1886,7,22,0,0,1886,1887,7,6,0,0,1887,1888,7,6,0,0,1888,
	168,1,0,0,0,1889,1890,7,19,0,0,1890,1891,7,25,0,0,1891,1892,7,25,0,0,1892,
	1893,7,9,0,0,1893,1894,7,10,0,0,1894,1895,7,16,0,0,1895,170,1,0,0,0,1896,
	1897,7,19,0,0,1897,1898,7,7,0,0,1898,172,1,0,0,0,1899,1900,7,19,0,0,1900,
	1901,7,7,0,0,1901,1902,7,6,0,0,1902,1903,7,8,0,0,1903,174,1,0,0,0,1904,
	1905,7,19,0,0,1905,1906,7,13,0,0,1906,176,1,0,0,0,1907,1908,7,19,0,0,1908,
	1909,7,13,0,0,1909,1910,7,12,0,0,1910,1911,7,10,0,0,1911,1912,7,13,0,0,
	1912,178,1,0,0,0,1913,1914,7,24,0,0,1914,1915,7,6,0,0,1915,1916,7,5,0,0,
	1916,1917,7,14,0,0,1917,1918,7,17,0,0,1918,1919,7,7,0,0,1919,1920,7,23,
	0,0,1920,180,1,0,0,0,1921,1922,7,24,0,0,1922,1923,7,13,0,0,1923,1924,7,
	17,0,0,1924,1925,7,15,0,0,1925,1926,7,5,0,0,1926,1927,7,13,0,0,1927,1928,
	7,8,0,0,1928,182,1,0,0,0,1929,1930,7,13,0,0,1930,1931,7,10,0,0,1931,1932,
	7,25,0,0,1932,1933,7,10,0,0,1933,1934,7,13,0,0,1934,1935,7,10,0,0,1935,
	1936,7,7,0,0,1936,1937,7,14,0,0,1937,1938,7,10,0,0,1938,1939,7,9,0,0,1939,
	184,1,0,0,0,1940,1941,7,13,0,0,1941,1942,7,10,0,0,1942,1943,7,16,0,0,1943,
	1944,7,22,0,0,1944,1945,7,13,0,0,1945,1946,7,7,0,0,1946,1947,7,17,0,0,1947,
	1948,7,7,0,0,1948,1949,7,23,0,0,1949,186,1,0,0,0,1950,1951,7,9,0,0,1951,
	1952,7,10,0,0,1952,1953,7,6,0,0,1953,1954,7,10,0,0,1954,1955,7,14,0,0,1955,
	1956,7,16,0,0,1956,188,1,0,0,0,1957,1958,7,9,0,0,1958,1959,7,10,0,0,1959,
	1960,7,9,0,0,1960,1961,7,9,0,0,1961,1962,7,17,0,0,1962,1963,7,19,0,0,1963,
	1964,7,7,0,0,1964,1965,5,95,0,0,1965,1966,7,22,0,0,1966,1967,7,9,0,0,1967,
	1968,7,10,0,0,1968,1969,7,13,0,0,1969,190,1,0,0,0,1970,1971,7,9,0,0,1971,
	1972,7,19,0,0,1972,1973,7,15,0,0,1973,1974,7,10,0,0,1974,192,1,0,0,0,1975,
	1976,7,9,0,0,1976,1977,7,8,0,0,1977,1978,7,15,0,0,1978,1979,7,15,0,0,1979,
	1980,7,10,0,0,1980,1981,7,16,0,0,1981,1982,7,13,0,0,1982,1983,7,17,0,0,
	1983,1984,7,14,0,0,1984,194,1,0,0,0,1985,1986,7,16,0,0,1986,1987,7,5,0,
	0,1987,1988,7,18,0,0,1988,1989,7,6,0,0,1989,1990,7,10,0,0,1990,196,1,0,
	0,0,1991,1992,7,16,0,0,1992,1993,7,20,0,0,1993,1994,7,10,0,0,1994,1995,
	7,7,0,0,1995,198,1,0,0,0,1996,1997,7,16,0,0,1997,1998,7,19,0,0,1998,200,
	1,0,0,0,1999,2000,7,16,0,0,2000,2001,7,13,0,0,2001,2002,7,5,0,0,2002,2003,
	7,17,0,0,2003,2004,7,6,0,0,2004,2005,7,17,0,0,2005,2006,7,7,0,0,2006,2007,
	7,23,0,0,2007,202,1,0,0,0,2008,2009,7,16,0,0,2009,2010,7,13,0,0,2010,2011,
	7,22,0,0,2011,2012,7,10,0,0,2012,204,1,0,0,0,2013,2014,7,22,0,0,2014,2015,
	7,7,0,0,2015,2016,7,17,0,0,2016,2017,7,19,0,0,2017,2018,7,7,0,0,2018,206,
	1,0,0,0,2019,2020,7,22,0,0,2020,2021,7,7,0,0,2021,2022,7,17,0,0,2022,2023,
	7,28,0,0,2023,2024,7,22,0,0,2024,2025,7,10,0,0,2025,208,1,0,0,0,2026,2027,
	7,22,0,0,2027,2028,7,9,0,0,2028,2029,7,10,0,0,2029,2030,7,13,0,0,2030,210,
	1,0,0,0,2031,2032,7,22,0,0,2032,2033,7,9,0,0,2033,2034,7,17,0,0,2034,2035,
	7,7,0,0,2035,2036,7,23,0,0,2036,212,1,0,0,0,2037,2038,7,27,0,0,2038,2039,
	7,5,0,0,2039,2040,7,13,0,0,2040,2041,7,17,0,0,2041,2042,7,5,0,0,2042,2043,
	7,12,0,0,2043,2044,7,17,0,0,2044,2045,7,14,0,0,2045,214,1,0,0,0,2046,2047,
	7,29,0,0,2047,2048,7,20,0,0,2048,2049,7,10,0,0,2049,2050,7,7,0,0,2050,216,
	1,0,0,0,2051,2052,7,29,0,0,2052,2053,7,20,0,0,2053,2054,7,10,0,0,2054,2055,
	7,13,0,0,2055,2056,7,10,0,0,2056,218,1,0,0,0,2057,2058,7,29,0,0,2058,2059,
	7,17,0,0,2059,2060,7,7,0,0,2060,2061,7,12,0,0,2061,2062,7,19,0,0,2062,2063,
	7,29,0,0,2063,220,1,0,0,0,2064,2065,7,29,0,0,2065,2066,7,17,0,0,2066,2067,
	7,16,0,0,2067,2068,7,20,0,0,2068,222,1,0,0,0,2069,2070,7,5,0,0,2070,2071,
	7,22,0,0,2071,2072,7,16,0,0,2072,2073,7,20,0,0,2073,2074,7,19,0,0,2074,
	2075,7,13,0,0,2075,2076,7,17,0,0,2076,2077,7,11,0,0,2077,2078,7,5,0,0,2078,
	2079,7,16,0,0,2079,2080,7,17,0,0,2080,2081,7,19,0,0,2081,2082,7,7,0,0,2082,
	224,1,0,0,0,2083,2084,7,18,0,0,2084,2085,7,17,0,0,2085,2086,7,7,0,0,2086,
	2087,7,5,0,0,2087,2088,7,13,0,0,2088,2089,7,8,0,0,2089,226,1,0,0,0,2090,
	2091,7,14,0,0,2091,2092,7,19,0,0,2092,2093,7,6,0,0,2093,2094,7,6,0,0,2094,
	2095,7,5,0,0,2095,2096,7,16,0,0,2096,2097,7,17,0,0,2097,2098,7,19,0,0,2098,
	2099,7,7,0,0,2099,228,1,0,0,0,2100,2101,7,14,0,0,2101,2102,7,19,0,0,2102,
	2103,7,7,0,0,2103,2104,7,14,0,0,2104,2105,7,22,0,0,2105,2106,7,13,0,0,2106,
	2107,7,13,0,0,2107,2108,7,10,0,0,2108,2109,7,7,0,0,2109,2110,7,16,0,0,2110,
	2111,7,6,0,0,2111,2112,7,8,0,0,2112,230,1,0,0,0,2113,2114,7,14,0,0,2114,
	2115,7,13,0,0,2115,2116,7,19,0,0,2116,2117,7,9,0,0,2117,2118,7,9,0,0,2118,
	232,1,0,0,0,2119,2120,7,14,0,0,2120,2121,7,22,0,0,2121,2122,7,13,0,0,2122,
	2123,7,13,0,0,2123,2124,7,10,0,0,2124,2125,7,7,0,0,2125,2126,7,16,0,0,2126,
	2127,5,95,0,0,2127,2128,7,9,0,0,2128,2129,7,14,0,0,2129,2130,7,20,0,0,2130,
	2131,7,10,0,0,2131,2132,7,15,0,0,2132,2133,7,5,0,0,2133,234,1,0,0,0,2134,
	2135,7,25,0,0,2135,2136,7,13,0,0,2136,2137,7,10,0,0,2137,2138,7,10,0,0,
	2138,2139,7,11,0,0,2139,2140,7,10,0,0,2140,236,1,0,0,0,2141,2142,7,25,0,
	0,2142,2143,7,22,0,0,2143,2144,7,6,0,0,2144,2145,7,6,0,0,2145,238,1,0,0,
	0,2146,2147,7,17,0,0,2147,2148,7,6,0,0,2148,2149,7,17,0,0,2149,2150,7,21,
	0,0,2150,2151,7,10,0,0,2151,240,1,0,0,0,2152,2153,7,17,0,0,2153,2154,7,
	7,0,0,2154,2155,7,7,0,0,2155,2156,7,10,0,0,2156,2157,7,13,0,0,2157,242,
	1,0,0,0,2158,2159,7,17,0,0,2159,2160,7,9,0,0,2160,244,1,0,0,0,2161,2162,
	7,17,0,0,2162,2163,7,9,0,0,2163,2164,7,7,0,0,2164,2165,7,22,0,0,2165,2166,
	7,6,0,0,2166,2167,7,6,0,0,2167,246,1,0,0,0,2168,2169,7,30,0,0,2169,2170,
	7,19,0,0,2170,2171,7,17,0,0,2171,2172,7,7,0,0,2172,248,1,0,0,0,2173,2174,
	7,6,0,0,2174,2175,7,10,0,0,2175,2176,7,25,0,0,2176,2177,7,16,0,0,2177,250,
	1,0,0,0,2178,2179,7,6,0,0,2179,2180,7,17,0,0,2180,2181,7,21,0,0,2181,2182,
	7,10,0,0,2182,252,1,0,0,0,2183,2184,7,7,0,0,2184,2185,7,5,0,0,2185,2186,
	7,16,0,0,2186,2187,7,22,0,0,2187,2188,7,13,0,0,2188,2189,7,5,0,0,2189,2190,
	7,6,0,0,2190,254,1,0,0,0,2191,2192,7,7,0,0,2192,2193,7,19,0,0,2193,2194,
	7,16,0,0,2194,2195,7,7,0,0,2195,2196,7,22,0,0,2196,2197,7,6,0,0,2197,2198,
	7,6,0,0,2198,256,1,0,0,0,2199,2200,7,19,0,0,2200,2201,7,22,0,0,2201,2202,
	7,16,0,0,2202,2203,7,10,0,0,2203,2204,7,13,0,0,2204,258,1,0,0,0,2205,2206,
	7,19,0,0,2206,2207,7,27,0,0,2207,2208,7,10,0,0,2208,2209,7,13,0,0,2209,
	260,1,0,0,0,2210,2211,7,19,0,0,2211,2212,7,27,0,0,2212,2213,7,10,0,0,2213,
	2214,7,13,0,0,2214,2215,7,6,0,0,2215,2216,7,5,0,0,2216,2217,7,24,0,0,2217,
	2218,7,9,0,0,2218,262,1,0,0,0,2219,2220,7,13,0,0,2220,2221,7,17,0,0,2221,
	2222,7,23,0,0,2222,2223,7,20,0,0,2223,2224,7,16,0,0,2224,264,1,0,0,0,2225,
	2226,7,9,0,0,2226,2227,7,17,0,0,2227,2228,7,15,0,0,2228,2229,7,17,0,0,2229,
	2230,7,6,0,0,2230,2231,7,5,0,0,2231,2232,7,13,0,0,2232,266,1,0,0,0,2233,
	2234,7,27,0,0,2234,2235,7,10,0,0,2235,2236,7,13,0,0,2236,2237,7,18,0,0,
	2237,2238,7,19,0,0,2238,2239,7,9,0,0,2239,2240,7,10,0,0,2240,268,1,0,0,
	0,2241,2242,7,5,0,0,2242,2243,7,18,0,0,2243,2244,7,19,0,0,2244,2245,7,13,
	0,0,2245,2246,7,16,0,0,2246,270,1,0,0,0,2247,2248,7,5,0,0,2248,2249,7,18,
	0,0,2249,2250,7,9,0,0,2250,2251,7,19,0,0,2251,2252,7,6,0,0,2252,2253,7,
	22,0,0,2253,2254,7,16,0,0,2254,2255,7,10,0,0,2255,272,1,0,0,0,2256,2257,
	7,5,0,0,2257,2258,7,14,0,0,2258,2259,7,14,0,0,2259,2260,7,10,0,0,2260,2261,
	7,9,0,0,2261,2262,7,9,0,0,2262,274,1,0,0,0,2263,2264,7,5,0,0,2264,2265,
	7,14,0,0,2265,2266,7,16,0,0,2266,2267,7,17,0,0,2267,2268,7,19,0,0,2268,
	2269,7,7,0,0,2269,276,1,0,0,0,2270,2271,7,5,0,0,2271,2272,7,12,0,0,2272,
	2273,7,12,0,0,2273,278,1,0,0,0,2274,2275,7,5,0,0,2275,2276,7,12,0,0,2276,
	2277,7,15,0,0,2277,2278,7,17,0,0,2278,2279,7,7,0,0,2279,280,1,0,0,0,2280,
	2281,7,5,0,0,2281,2282,7,25,0,0,2282,2283,7,16,0,0,2283,2284,7,10,0,0,2284,
	2285,7,13,0,0,2285,282,1,0,0,0,2286,2287,7,5,0,0,2287,2288,7,23,0,0,2288,
	2289,7,23,0,0,2289,2290,7,13,0,0,2290,2291,7,10,0,0,2291,2292,7,23,0,0,
	2292,2293,7,5,0,0,2293,2294,7,16,0,0,2294,2295,7,10,0,0,2295,284,1,0,0,
	0,2296,2297,7,5,0,0,2297,2298,7,6,0,0,2298,2299,7,9,0,0,2299,2300,7,19,
	0,0,2300,286,1,0,0,0,2301,2302,7,5,0,0,2302,2303,7,6,0,0,2303,2304,7,16,
	0,0,2304,2305,7,10,0,0,2305,2306,7,13,0,0,2306,288,1,0,0,0,2307,2308,7,
	5,0,0,2308,2309,7,6,0,0,2309,2310,7,29,0,0,2310,2311,7,5,0,0,2311,2312,
	7,8,0,0,2312,2313,7,9,0,0,2313,290,1,0,0,0,2314,2315,7,5,0,0,2315,2316,
	7,9,0,0,2316,2317,7,9,0,0,2317,2318,7,10,0,0,2318,2319,7,13,0,0,2319,2320,
	7,16,0,0,2320,2321,7,17,0,0,2321,2322,7,19,0,0,2322,2323,7,7,0,0,2323,292,
	1,0,0,0,2324,2325,7,5,0,0,2325,2326,7,9,0,0,2326,2327,7,9,0,0,2327,2328,
	7,17,0,0,2328,2329,7,23,0,0,2329,2330,7,7,0,0,2330,2331,7,15,0,0,2331,2332,
	7,10,0,0,2332,2333,7,7,0,0,2333,2334,7,16,0,0,2334,294,1,0,0,0,2335,2336,
	7,5,0,0,2336,2337,7,16,0,0,2337,296,1,0,0,0,2338,2339,7,5,0,0,2339,2340,
	7,16,0,0,2340,2341,7,16,0,0,2341,2342,7,13,0,0,2342,2343,7,17,0,0,2343,
	2344,7,18,0,0,2344,2345,7,22,0,0,2345,2346,7,16,0,0,2346,2347,7,10,0,0,
	2347,298,1,0,0,0,2348,2349,7,18,0,0,2349,2350,7,5,0,0,2350,2351,7,14,0,
	0,2351,2352,7,21,0,0,2352,2353,7,29,0,0,2353,2354,7,5,0,0,2354,2355,7,13,
	0,0,2355,2356,7,12,0,0,2356,300,1,0,0,0,2357,2358,7,18,0,0,2358,2359,7,
	10,0,0,2359,2360,7,25,0,0,2360,2361,7,19,0,0,2361,2362,7,13,0,0,2362,2363,
	7,10,0,0,2363,302,1,0,0,0,2364,2365,7,18,0,0,2365,2366,7,10,0,0,2366,2367,
	7,23,0,0,2367,2368,7,17,0,0,2368,2369,7,7,0,0,2369,304,1,0,0,0,2370,2371,
	7,18,0,0,2371,2372,7,8,0,0,2372,306,1,0,0,0,2373,2374,7,14,0,0,2374,2375,
	7,5,0,0,2375,2376,7,14,0,0,2376,2377,7,20,0,0,2377,2378,7,10,0,0,2378,308,
	1,0,0,0,2379,2380,7,14,0,0,2380,2381,7,5,0,0,2381,2382,7,6,0,0,2382,2383,
	7,6,0,0,2383,2384,7,10,0,0,2384,2385,7,12,0,0,2385,310,1,0,0,0,2386,2387,
	7,14,0,0,2387,2388,7,5,0,0,2388,2389,7,9,0,0,2389,2390,7,14,0,0,2390,2391,
	7,5,0,0,2391,2392,7,12,0,0,2392,2393,7,10,0,0,2393,312,1,0,0,0,2394,2395,
	7,14,0,0,2395,2396,7,5,0,0,2396,2397,7,9,0,0,2397,2398,7,14,0,0,2398,2399,
	7,5,0,0,2399,2400,7,12,0,0,2400,2401,7,10,0,0,2401,2402,7,12,0,0,2402,314,
	1,0,0,0,2403,2404,7,14,0,0,2404,2405,7,5,0,0,2405,2406,7,16,0,0,2406,2407,
	7,5,0,0,2407,2408,7,6,0,0,2408,2409,7,19,0,0,2409,2410,7,23,0,0,2410,316,
	1,0,0,0,2411,2412,7,14,0,0,2412,2413,7,20,0,0,2413,2414,7,5,0,0,2414,2415,
	7,17,0,0,2415,2416,7,7,0,0,2416,318,1,0,0,0,2417,2418,7,14,0,0,2418,2419,
	7,20,0,0,2419,2420,7,5,0,0,2420,2421,7,13,0,0,2421,2422,7,5,0,0,2422,2423,
	7,14,0,0,2423,2424,7,16,0,0,2424,2425,7,10,0,0,2425,2426,7,13,0,0,2426,
	2427,7,17,0,0,2427,2428,7,9,0,0,2428,2429,7,16,0,0,2429,2430,7,17,0,0,2430,
	2431,7,14,0,0,2431,2432,7,9,0,0,2432,320,1,0,0,0,2433,2434,7,14,0,0,2434,
	2435,7,20,0,0,2435,2436,7,10,0,0,2436,2437,7,14,0,0,2437,2438,7,21,0,0,
	2438,2439,7,24,0,0,2439,2440,7,19,0,0,2440,2441,7,17,0,0,2441,2442,7,7,
	0,0,2442,2443,7,16,0,0,2443,322,1,0,0,0,2444,2445,7,14,0,0,2445,2446,7,
	6,0,0,2446,2447,7,5,0,0,2447,2448,7,9,0,0,2448,2449,7,9,0,0,2449,324,1,
	0,0,0,2450,2451,7,14,0,0,2451,2452,7,6,0,0,2452,2453,7,19,0,0,2453,2454,
	7,9,0,0,2454,2455,7,10,0,0,2455,326,1,0,0,0,2456,2457,7,14,0,0,2457,2458,
	7,6,0,0,2458,2459,7,22,0,0,2459,2460,7,9,0,0,2460,2461,7,16,0,0,2461,2462,
	7,10,0,0,2462,2463,7,13,0,0,2463,328,1,0,0,0,2464,2465,7,14,0,0,2465,2466,
	7,19,0,0,2466,2467,7,15,0,0,2467,2468,7,15,0,0,2468,2469,7,10,0,0,2469,
	2470,7,7,0,0,2470,2471,7,16,0,0,2471,330,1,0,0,0,2472,2473,7,14,0,0,2473,
	2474,7,19,0,0,2474,2475,7,15,0,0,2475,2476,7,15,0,0,2476,2477,7,10,0,0,
	2477,2478,7,7,0,0,2478,2479,7,16,0,0,2479,2480,7,9,0,0,2480,332,1,0,0,0,
	2481,2482,7,14,0,0,2482,2483,7,19,0,0,2483,2484,7,15,0,0,2484,2485,7,15,
	0,0,2485,2486,7,17,0,0,2486,2487,7,16,0,0,2487,334,1,0,0,0,2488,2489,7,
	14,0,0,2489,2490,7,19,0,0,2490,2491,7,15,0,0,2491,2492,7,15,0,0,2492,2493,
	7,17,0,0,2493,2494,7,16,0,0,2494,2495,7,16,0,0,2495,2496,7,10,0,0,2496,
	2497,7,12,0,0,2497,336,1,0,0,0,2498,2499,7,14,0,0,2499,2500,7,19,0,0,2500,
	2501,7,7,0,0,2501,2502,7,25,0,0,2502,2503,7,17,0,0,2503,2504,7,23,0,0,2504,
	2505,7,22,0,0,2505,2506,7,13,0,0,2506,2507,7,5,0,0,2507,2508,7,16,0,0,2508,
	2509,7,17,0,0,2509,2510,7,19,0,0,2510,2511,7,7,0,0,2511,338,1,0,0,0,2512,
	2513,7,14,0,0,2513,2514,7,19,0,0,2514,2515,7,7,0,0,2515,2516,7,7,0,0,2516,
	2517,7,10,0,0,2517,2518,7,14,0,0,2518,2519,7,16,0,0,2519,2520,7,17,0,0,
	2520,2521,7,19,0,0,2521,2522,7,7,0,0,2522,340,1,0,0,0,2523,2524,7,14,0,
	0,2524,2525,7,19,0,0,2525,2526,7,7,0,0,2526,2527,7,9,0,0,2527,2528,7,16,
	0,0,2528,2529,7,13,0,0,2529,2530,7,5,0,0,2530,2531,7,17,0,0,2531,2532,7,
	7,0,0,2532,2533,7,16,0,0,2533,2534,7,9,0,0,2534,342,1,0,0,0,2535,2536,7,
	14,0,0,2536,2537,7,19,0,0,2537,2538,7,7,0,0,2538,2539,7,16,0,0,2539,2540,
	7,10,0,0,2540,2541,7,7,0,0,2541,2542,7,16,0,0,2542,344,1,0,0,0,2543,2544,
	7,14,0,0,2544,2545,7,19,0,0,2545,2546,7,7,0,0,2546,2547,7,16,0,0,2547,2548,
	7,17,0,0,2548,2549,7,7,0,0,2549,2550,7,22,0,0,2550,2551,7,10,0,0,2551,346,
	1,0,0,0,2552,2553,7,14,0,0,2553,2554,7,19,0,0,2554,2555,7,7,0,0,2555,2556,
	7,27,0,0,2556,2557,7,10,0,0,2557,2558,7,13,0,0,2558,2559,7,9,0,0,2559,2560,
	7,17,0,0,2560,2561,7,19,0,0,2561,2562,7,7,0,0,2562,348,1,0,0,0,2563,2564,
	7,14,0,0,2564,2565,7,19,0,0,2565,2566,7,24,0,0,2566,2567,7,8,0,0,2567,350,
	1,0,0,0,2568,2569,7,14,0,0,2569,2570,7,19,0,0,2570,2571,7,9,0,0,2571,2572,
	7,16,0,0,2572,352,1,0,0,0,2573,2574,7,14,0,0,2574,2575,7,9,0,0,2575,2576,
	7,27,0,0,2576,354,1,0,0,0,2577,2578,7,14,0,0,2578,2579,7,22,0,0,2579,2580,
	7,13,0,0,2580,2581,7,9,0,0,2581,2582,7,19,0,0,2582,2583,7,13,0,0,2583,356,
	1,0,0,0,2584,2585,7,14,0,0,2585,2586,7,8,0,0,2586,2587,7,14,0,0,2587,2588,
	7,6,0,0,2588,2589,7,10,0,0,2589,358,1,0,0,0,2590,2591,7,12,0,0,2591,2592,
	7,5,0,0,2592,2593,7,16,0,0,2593,2594,7,5,0,0,2594,360,1,0,0,0,2595,2596,
	7,12,0,0,2596,2597,7,5,0,0,2597,2598,7,16,0,0,2598,2599,7,5,0,0,2599,2600,
	7,18,0,0,2600,2601,7,5,0,0,2601,2602,7,9,0,0,2602,2603,7,10,0,0,2603,362,
	1,0,0,0,2604,2605,7,12,0,0,2605,2606,7,5,0,0,2606,2607,7,8,0,0,2607,364,
	1,0,0,0,2608,2609,7,12,0,0,2609,2610,7,10,0,0,2610,2611,7,5,0,0,2611,2612,
	7,6,0,0,2612,2613,7,6,0,0,2613,2614,7,19,0,0,2614,2615,7,14,0,0,2615,2616,
	7,5,0,0,2616,2617,7,16,0,0,2617,2618,7,10,0,0,2618,366,1,0,0,0,2619,2620,
	7,12,0,0,2620,2621,7,10,0,0,2621,2622,7,14,0,0,2622,2623,7,6,0,0,2623,2624,
	7,5,0,0,2624,2625,7,13,0,0,2625,2626,7,10,0,0,2626,368,1,0,0,0,2627,2628,
	7,12,0,0,2628,2629,7,10,0,0,2629,2630,7,25,0,0,2630,2631,7,5,0,0,2631,2632,
	7,22,0,0,2632,2633,7,6,0,0,2633,2634,7,16,0,0,2634,2635,7,9,0,0,2635,370,
	1,0,0,0,2636,2637,7,12,0,0,2637,2638,7,10,0,0,2638,2639,7,25,0,0,2639,2640,
	7,10,0,0,2640,2641,7,13,0,0,2641,2642,7,13,0,0,2642,2643,7,10,0,0,2643,
	2644,7,12,0,0,2644,372,1,0,0,0,2645,2646,7,12,0,0,2646,2647,7,10,0,0,2647,
	2648,7,25,0,0,2648,2649,7,17,0,0,2649,2650,7,7,0,0,2650,2651,7,10,0,0,2651,
	2652,7,13,0,0,2652,374,1,0,0,0,2653,2654,7,12,0,0,2654,2655,7,10,0,0,2655,
	2656,7,6,0,0,2656,2657,7,10,0,0,2657,2658,7,16,0,0,2658,2659,7,10,0,0,2659,
	376,1,0,0,0,2660,2661,7,12,0,0,2661,2662,7,10,0,0,2662,2663,7,6,0,0,2663,
	2664,7,17,0,0,2664,2665,7,15,0,0,2665,2666,7,17,0,0,2666,2667,7,16,0,0,
	2667,2668,7,10,0,0,2668,2669,7,13,0,0,2669,378,1,0,0,0,2670,2671,7,12,0,
	0,2671,2672,7,10,0,0,2672,2673,7,6,0,0,2673,2674,7,17,0,0,2674,2675,7,15,
	0,0,2675,2676,7,17,0,0,2676,2677,7,16,0,0,2677,2678,7,10,0,0,2678,2679,
	7,13,0,0,2679,2680,7,9,0,0,2680,380,1,0,0,0,2681,2682,7,12,0,0,2682,2683,
	7,17,0,0,2683,2684,7,14,0,0,2684,2685,7,16,0,0,2685,2686,7,17,0,0,2686,
	2687,7,19,0,0,2687,2688,7,7,0,0,2688,2689,7,5,0,0,2689,2690,7,13,0,0,2690,
	2691,7,8,0,0,2691,382,1,0,0,0,2692,2693,7,12,0,0,2693,2694,7,17,0,0,2694,
	2695,7,9,0,0,2695,2696,7,5,0,0,2696,2697,7,18,0,0,2697,2698,7,6,0,0,2698,
	2699,7,10,0,0,2699,384,1,0,0,0,2700,2701,7,12,0,0,2701,2702,7,17,0,0,2702,
	2703,7,9,0,0,2703,2704,7,14,0,0,2704,2705,7,5,0,0,2705,2706,7,13,0,0,2706,
	2707,7,12,0,0,2707,386,1,0,0,0,2708,2709,7,12,0,0,2709,2710,7,19,0,0,2710,
	2711,7,14,0,0,2711,2712,7,22,0,0,2712,2713,7,15,0,0,2713,2714,7,10,0,0,
	2714,2715,7,7,0,0,2715,2716,7,16,0,0,2716,388,1,0,0,0,2717,2718,7,12,0,
	0,2718,2719,7,19,0,0,2719,2720,7,15,0,0,2720,2721,7,5,0,0,2721,2722,7,17,
	0,0,2722,2723,7,7,0,0,2723,390,1,0,0,0,2724,2725,7,12,0,0,2725,2726,7,19,
	0,0,2726,2727,7,22,0,0,2727,2728,7,18,0,0,2728,2729,7,6,0,0,2729,2730,7,
	10,0,0,2730,392,1,0,0,0,2731,2732,7,12,0,0,2732,2733,7,13,0,0,2733,2734,
	7,19,0,0,2734,2735,7,24,0,0,2735,394,1,0,0,0,2736,2737,7,10,0,0,2737,2738,
	7,5,0,0,2738,2739,7,14,0,0,2739,2740,7,20,0,0,2740,396,1,0,0,0,2741,2742,
	7,10,0,0,2742,2743,7,7,0,0,2743,2744,7,5,0,0,2744,2745,7,18,0,0,2745,2746,
	7,6,0,0,2746,2747,7,10,0,0,2747,398,1,0,0,0,2748,2749,7,10,0,0,2749,2750,
	7,7,0,0,2750,2751,7,14,0,0,2751,2752,7,19,0,0,2752,2753,7,12,0,0,2753,2754,
	7,17,0,0,2754,2755,7,7,0,0,2755,2756,7,23,0,0,2756,400,1,0,0,0,2757,2758,
	7,10,0,0,2758,2759,7,7,0,0,2759,2760,7,14,0,0,2760,2761,7,13,0,0,2761,2762,
	7,8,0,0,2762,2763,7,24,0,0,2763,2764,7,16,0,0,2764,2765,7,10,0,0,2765,2766,
	7,12,0,0,2766,402,1,0,0,0,2767,2768,7,10,0,0,2768,2769,7,7,0,0,2769,2770,
	7,22,0,0,2770,2771,7,15,0,0,2771,404,1,0,0,0,2772,2773,7,10,0,0,2773,2774,
	7,9,0,0,2774,2775,7,14,0,0,2775,2776,7,5,0,0,2776,2777,7,24,0,0,2777,2778,
	7,10,0,0,2778,406,1,0,0,0,2779,2780,7,10,0,0,2780,2781,7,27,0,0,2781,2782,
	7,10,0,0,2782,2783,7,7,0,0,2783,2784,7,16,0,0,2784,408,1,0,0,0,2785,2786,
	7,10,0,0,2786,2787,7,26,0,0,2787,2788,7,14,0,0,2788,2789,7,6,0,0,2789,2790,
	7,22,0,0,2790,2791,7,12,0,0,2791,2792,7,10,0,0,2792,410,1,0,0,0,2793,2794,
	7,10,0,0,2794,2795,7,26,0,0,2795,2796,7,14,0,0,2796,2797,7,6,0,0,2797,2798,
	7,22,0,0,2798,2799,7,12,0,0,2799,2800,7,17,0,0,2800,2801,7,7,0,0,2801,2802,
	7,23,0,0,2802,412,1,0,0,0,2803,2804,7,10,0,0,2804,2805,7,26,0,0,2805,2806,
	7,14,0,0,2806,2807,7,6,0,0,2807,2808,7,22,0,0,2808,2809,7,9,0,0,2809,2810,
	7,17,0,0,2810,2811,7,27,0,0,2811,2812,7,10,0,0,2812,414,1,0,0,0,2813,2814,
	7,10,0,0,2814,2815,7,26,0,0,2815,2816,7,10,0,0,2816,2817,7,14,0,0,2817,
	2818,7,22,0,0,2818,2819,7,16,0,0,2819,2820,7,10,0,0,2820,416,1,0,0,0,2821,
	2822,7,10,0,0,2822,2823,7,26,0,0,2823,2824,7,24,0,0,2824,2825,7,6,0,0,2825,
	2826,7,5,0,0,2826,2827,7,17,0,0,2827,2828,7,7,0,0,2828,418,1,0,0,0,2829,
	2830,7,10,0,0,2830,2831,7,26,0,0,2831,2832,7,16,0,0,2832,2833,7,10,0,0,
	2833,2834,7,7,0,0,2834,2835,7,9,0,0,2835,2836,7,17,0,0,2836,2837,7,19,0,
	0,2837,2838,7,7,0,0,2838,420,1,0,0,0,2839,2840,7,10,0,0,2840,2841,7,26,
	0,0,2841,2842,7,16,0,0,2842,2843,7,10,0,0,2843,2844,7,13,0,0,2844,2845,
	7,7,0,0,2845,2846,7,5,0,0,2846,2847,7,6,0,0,2847,422,1,0,0,0,2848,2849,
	7,25,0,0,2849,2850,7,5,0,0,2850,2851,7,15,0,0,2851,2852,7,17,0,0,2852,2853,
	7,6,0,0,2853,2854,7,8,0,0,2854,424,1,0,0,0,2855,2856,7,25,0,0,2856,2857,
	7,17,0,0,2857,2858,7,13,0,0,2858,2859,7,9,0,0,2859,2860,7,16,0,0,2860,426,
	1,0,0,0,2861,2862,7,25,0,0,2862,2863,7,19,0,0,2863,2864,7,6,0,0,2864,2865,
	7,6,0,0,2865,2866,7,19,0,0,2866,2867,7,29,0,0,2867,2868,7,17,0,0,2868,2869,
	7,7,0,0,2869,2870,7,23,0,0,2870,428,1,0,0,0,2871,2872,7,25,0,0,2872,2873,
	7,19,0,0,2873,2874,7,13,0,0,2874,2875,7,14,0,0,2875,2876,7,10,0,0,2876,
	430,1,0,0,0,2877,2878,7,25,0,0,2878,2879,7,19,0,0,2879,2880,7,13,0,0,2880,
	2881,7,29,0,0,2881,2882,7,5,0,0,2882,2883,7,13,0,0,2883,2884,7,12,0,0,2884,
	432,1,0,0,0,2885,2886,7,25,0,0,2886,2887,7,22,0,0,2887,2888,7,7,0,0,2888,
	2889,7,14,0,0,2889,2890,7,16,0,0,2890,2891,7,17,0,0,2891,2892,7,19,0,0,
	2892,2893,7,7,0,0,2893,434,1,0,0,0,2894,2895,7,25,0,0,2895,2896,7,22,0,
	0,2896,2897,7,7,0,0,2897,2898,7,14,0,0,2898,2899,7,16,0,0,2899,2900,7,17,
	0,0,2900,2901,7,19,0,0,2901,2902,7,7,0,0,2902,2903,7,9,0,0,2903,436,1,0,
	0,0,2904,2905,7,23,0,0,2905,2906,7,6,0,0,2906,2907,7,19,0,0,2907,2908,7,
	18,0,0,2908,2909,7,5,0,0,2909,2910,7,6,0,0,2910,438,1,0,0,0,2911,2912,7,
	23,0,0,2912,2913,7,13,0,0,2913,2914,7,5,0,0,2914,2915,7,7,0,0,2915,2916,
	7,16,0,0,2916,2917,7,10,0,0,2917,2918,7,12,0,0,2918,440,1,0,0,0,2919,2920,
	7,20,0,0,2920,2921,7,5,0,0,2921,2922,7,7,0,0,2922,2923,7,12,0,0,2923,2924,
	7,6,0,0,2924,2925,7,10,0,0,2925,2926,7,13,0,0,2926,442,1,0,0,0,2927,2928,
	7,20,0,0,2928,2929,7,10,0,0,2929,2930,7,5,0,0,2930,2931,7,12,0,0,2931,2932,
	7,10,0,0,2932,2933,7,13,0,0,2933,444,1,0,0,0,2934,2935,7,20,0,0,2935,2936,
	7,19,0,0,2936,2937,7,6,0,0,2937,2938,7,12,0,0,2938,446,1,0,0,0,2939,2940,
	7,20,0,0,2940,2941,7,19,0,0,2941,2942,7,22,0,0,2942,2943,7,13,0,0,2943,
	448,1,0,0,0,2944,2945,7,17,0,0,2945,2946,7,12,0,0,2946,2947,7,10,0,0,2947,
	2948,7,7,0,0,2948,2949,7,16,0,0,2949,2950,7,17,0,0,2950,2951,7,16,0,0,2951,
	2952,7,8,0,0,2952,450,1,0,0,0,2953,2954,7,17,0,0,2954,2955,7,25,0,0,2955,
	452,1,0,0,0,2956,2957,7,17,0,0,2957,2958,7,15,0,0,2958,2959,7,15,0,0,2959,
	2960,7,10,0,0,2960,2961,7,12,0,0,2961,2962,7,17,0,0,2962,2963,7,5,0,0,2963,
	2964,7,16,0,0,2964,2965,7,10,0,0,2965,454,1,0,0,0,2966,2967,7,17,0,0,2967,
	2968,7,15,0,0,2968,2969,7,15,0,0,2969,2970,7,22,0,0,2970,2971,7,16,0,0,
	2971,2972,7,5,0,0,2972,2973,7,18,0,0,2973,2974,7,6,0,0,2974,2975,7,10,0,
	0,2975,456,1,0,0,0,2976,2977,7,17,0,0,2977,2978,7,15,0,0,2978,2979,7,24,
	0,0,2979,2980,7,6,0,0,2980,2981,7,17,0,0,2981,2982,7,14,0,0,2982,2983,7,
	17,0,0,2983,2984,7,16,0,0,2984,458,1,0,0,0,2985,2986,7,17,0,0,2986,2987,
	7,7,0,0,2987,2988,7,14,0,0,2988,2989,7,6,0,0,2989,2990,7,22,0,0,2990,2991,
	7,12,0,0,2991,2992,7,17,0,0,2992,2993,7,7,0,0,2993,2994,7,23,0,0,2994,460,
	1,0,0,0,2995,2996,7,17,0,0,2996,2997,7,7,0,0,2997,2998,7,14,0,0,2998,2999,
	7,13,0,0,2999,3000,7,10,0,0,3000,3001,7,15,0,0,3001,3002,7,10,0,0,3002,
	3003,7,7,0,0,3003,3004,7,16,0,0,3004,462,1,0,0,0,3005,3006,7,17,0,0,3006,
	3007,7,7,0,0,3007,3008,7,12,0,0,3008,3009,7,10,0,0,3009,3010,7,26,0,0,3010,
	464,1,0,0,0,3011,3012,7,17,0,0,3012,3013,7,7,0,0,3013,3014,7,12,0,0,3014,
	3015,7,10,0,0,3015,3016,7,26,0,0,3016,3017,7,10,0,0,3017,3018,7,9,0,0,3018,
	466,1,0,0,0,3019,3020,7,17,0,0,3020,3021,7,7,0,0,3021,3022,7,20,0,0,3022,
	3023,7,10,0,0,3023,3024,7,13,0,0,3024,3025,7,17,0,0,3025,3026,7,16,0,0,
	3026,468,1,0,0,0,3027,3028,7,17,0,0,3028,3029,7,7,0,0,3029,3030,7,20,0,
	0,3030,3031,7,10,0,0,3031,3032,7,13,0,0,3032,3033,7,17,0,0,3033,3034,7,
	16,0,0,3034,3035,7,9,0,0,3035,470,1,0,0,0,3036,3037,7,17,0,0,3037,3038,
	7,7,0,0,3038,3039,7,6,0,0,3039,3040,7,17,0,0,3040,3041,7,7,0,0,3041,3042,
	7,10,0,0,3042,472,1,0,0,0,3043,3044,7,17,0,0,3044,3045,7,7,0,0,3045,3046,
	7,9,0,0,3046,3047,7,10,0,0,3047,3048,7,7,0,0,3048,3049,7,9,0,0,3049,3050,
	7,17,0,0,3050,3051,7,16,0,0,3051,3052,7,17,0,0,3052,3053,7,27,0,0,3053,
	3054,7,10,0,0,3054,474,1,0,0,0,3055,3056,7,17,0,0,3056,3057,7,7,0,0,3057,
	3058,7,9,0,0,3058,3059,7,10,0,0,3059,3060,7,13,0,0,3060,3061,7,16,0,0,3061,
	476,1,0,0,0,3062,3063,7,17,0,0,3063,3064,7,7,0,0,3064,3065,7,9,0,0,3065,
	3066,7,16,0,0,3066,3067,7,10,0,0,3067,3068,7,5,0,0,3068,3069,7,12,0,0,3069,
	478,1,0,0,0,3070,3071,7,17,0,0,3071,3072,7,7,0,0,3072,3073,7,27,0,0,3073,
	3074,7,19,0,0,3074,3075,7,21,0,0,3075,3076,7,10,0,0,3076,3077,7,13,0,0,
	3077,480,1,0,0,0,3078,3079,7,17,0,0,3079,3080,7,9,0,0,3080,3081,7,19,0,
	0,3081,3082,7,6,0,0,3082,3083,7,5,0,0,3083,3084,7,16,0,0,3084,3085,7,17,
	0,0,3085,3086,7,19,0,0,3086,3087,7,7,0,0,3087,482,1,0,0,0,3088,3089,7,21,
	0,0,3089,3090,7,10,0,0,3090,3091,7,8,0,0,3091,484,1,0,0,0,3092,3093,7,6,
	0,0,3093,3094,7,5,0,0,3094,3095,7,18,0,0,3095,3096,7,10,0,0,3096,3097,7,
	6,0,0,3097,486,1,0,0,0,3098,3099,7,6,0,0,3099,3100,7,5,0,0,3100,3101,7,
	7,0,0,3101,3102,7,23,0,0,3102,3103,7,22,0,0,3103,3104,7,5,0,0,3104,3105,
	7,23,0,0,3105,3106,7,10,0,0,3106,488,1,0,0,0,3107,3108,7,6,0,0,3108,3109,
	7,5,0,0,3109,3110,7,13,0,0,3110,3111,7,23,0,0,3111,3112,7,10,0,0,3112,490,
	1,0,0,0,3113,3114,7,6,0,0,3114,3115,7,5,0,0,3115,3116,7,9,0,0,3116,3117,
	7,16,0,0,3117,492,1,0,0,0,3118,3119,7,6,0,0,3119,3120,7,10,0,0,3120,3121,
	7,5,0,0,3121,3122,7,21,0,0,3122,3123,7,24,0,0,3123,3124,7,13,0,0,3124,3125,
	7,19,0,0,3125,3126,7,19,0,0,3126,3127,7,25,0,0,3127,494,1,0,0,0,3128,3129,
	7,6,0,0,3129,3130,7,10,0,0,3130,3131,7,27,0,0,3131,3132,7,10,0,0,3132,3133,
	7,6,0,0,3133,496,1,0,0,0,3134,3135,7,6,0,0,3135,3136,7,17,0,0,3136,3137,
	7,9,0,0,3137,3138,7,16,0,0,3138,3139,7,10,0,0,3139,3140,7,7,0,0,3140,498,
	1,0,0,0,3141,3142,7,6,0,0,3142,3143,7,19,0,0,3143,3144,7,5,0,0,3144,3145,
	7,12,0,0,3145,500,1,0,0,0,3146,3147,7,6,0,0,3147,3148,7,19,0,0,3148,3149,
	7,14,0,0,3149,3150,7,5,0,0,3150,3151,7,6,0,0,3151,502,1,0,0,0,3152,3153,
	7,6,0,0,3153,3154,7,19,0,0,3154,3155,7,14,0,0,3155,3156,7,5,0,0,3156,3157,
	7,16,0,0,3157,3158,7,17,0,0,3158,3159,7,19,0,0,3159,3160,7,7,0,0,3160,504,
	1,0,0,0,3161,3162,7,6,0,0,3162,3163,7,19,0,0,3163,3164,7,14,0,0,3164,3165,
	7,21,0,0,3165,506,1,0,0,0,3166,3167,7,15,0,0,3167,3168,7,5,0,0,3168,3169,
	7,24,0,0,3169,3170,7,24,0,0,3170,3171,7,17,0,0,3171,3172,7,7,0,0,3172,3173,
	7,23,0,0,3173,508,1,0,0,0,3174,3175,7,15,0,0,3175,3176,7,5,0,0,3176,3177,
	7,16,0,0,3177,3178,7,14,0,0,3178,3179,7,20,0,0,3179,510,1,0,0,0,3180,3181,
	7,15,0,0,3181,3182,7,5,0,0,3182,3183,7,16,0,0,3183,3184,7,14,0,0,3184,3185,
	7,20,0,0,3185,3186,7,10,0,0,3186,3187,7,12,0,0,3187,512,1,0,0,0,3188,3189,
	7,15,0,0,3189,3190,7,5,0,0,3190,3191,7,16,0,0,3191,3192,7,10,0,0,3192,3193,
	7,13,0,0,3193,3194,7,17,0,0,3194,3195,7,5,0,0,3195,3196,7,6,0,0,3196,3197,
	7,17,0,0,3197,3198,7,11,0,0,3198,3199,7,10,0,0,3199,3200,7,12,0,0,3200,
	514,1,0,0,0,3201,3202,7,15,0,0,3202,3203,7,5,0,0,3203,3204,7,26,0,0,3204,
	3205,7,27,0,0,3205,3206,7,5,0,0,3206,3207,7,6,0,0,3207,3208,7,22,0,0,3208,
	3209,7,10,0,0,3209,516,1,0,0,0,3210,3211,7,15,0,0,3211,3212,7,10,0,0,3212,
	3213,7,13,0,0,3213,3214,7,23,0,0,3214,3215,7,10,0,0,3215,518,1,0,0,0,3216,
	3217,7,15,0,0,3217,3218,7,17,0,0,3218,3219,7,7,0,0,3219,3220,7,22,0,0,3220,
	3221,7,16,0,0,3221,3222,7,10,0,0,3222,520,1,0,0,0,3223,3224,7,15,0,0,3224,
	3225,7,17,0,0,3225,3226,7,7,0,0,3226,3227,7,27,0,0,3227,3228,7,5,0,0,3228,
	3229,7,6,0,0,3229,3230,7,22,0,0,3230,3231,7,10,0,0,3231,522,1,0,0,0,3232,
	3233,7,15,0,0,3233,3234,7,19,0,0,3234,3235,7,12,0,0,3235,3236,7,10,0,0,
	3236,524,1,0,0,0,3237,3238,7,15,0,0,3238,3239,7,19,0,0,3239,3240,7,7,0,
	0,3240,3241,7,16,0,0,3241,3242,7,20,0,0,3242,526,1,0,0,0,3243,3244,7,15,
	0,0,3244,3245,7,19,0,0,3245,3246,7,27,0,0,3246,3247,7,10,0,0,3247,528,1,
	0,0,0,3248,3249,7,7,0,0,3249,3250,7,5,0,0,3250,3251,7,15,0,0,3251,3252,
	7,10,0,0,3252,530,1,0,0,0,3253,3254,7,7,0,0,3254,3255,7,5,0,0,3255,3256,
	7,15,0,0,3256,3257,7,10,0,0,3257,3258,7,9,0,0,3258,532,1,0,0,0,3259,3260,
	7,7,0,0,3260,3261,7,10,0,0,3261,3262,7,26,0,0,3262,3263,7,16,0,0,3263,534,
	1,0,0,0,3264,3265,7,7,0,0,3265,3266,7,19,0,0,3266,536,1,0,0,0,3267,3268,
	7,7,0,0,3268,3269,7,19,0,0,3269,3270,7,16,0,0,3270,3271,7,20,0,0,3271,3272,
	7,17,0,0,3272,3273,7,7,0,0,3273,3274,7,23,0,0,3274,538,1,0,0,0,3275,3276,
	7,7,0,0,3276,3277,7,19,0,0,3277,3278,7,16,0,0,3278,3279,7,17,0,0,3279,3280,
	7,25,0,0,3280,3281,7,8,0,0,3281,540,1,0,0,0,3282,3283,7,7,0,0,3283,3284,
	7,19,0,0,3284,3285,7,29,0,0,3285,3286,7,5,0,0,3286,3287,7,17,0,0,3287,3288,
	7,16,0,0,3288,542,1,0,0,0,3289,3290,7,7,0,0,3290,3291,7,22,0,0,3291,3292,
	7,6,0,0,3292,3293,7,6,0,0,3293,3294,7,9,0,0,3294,544,1,0,0,0,3295,3296,
	7,19,0,0,3296,3297,7,18,0,0,3297,3298,7,30,0,0,3298,3299,7,10,0,0,3299,
	3300,7,14,0,0,3300,3301,7,16,0,0,3301,546,1,0,0,0,3302,3303,7,19,0,0,3303,
	3304,7,25,0,0,3304,548,1,0,0,0,3305,3306,7,19,0,0,3306,3307,7,25,0,0,3307,
	3308,7,25,0,0,3308,550,1,0,0,0,3309,3310,7,19,0,0,3310,3311,7,17,0,0,3311,
	3312,7,12,0,0,3312,3313,7,9,0,0,3313,552,1,0,0,0,3314,3315,7,19,0,0,3315,
	3316,7,24,0,0,3316,3317,7,10,0,0,3317,3318,7,13,0,0,3318,3319,7,5,0,0,3319,
	3320,7,16,0,0,3320,3321,7,19,0,0,3321,3322,7,13,0,0,3322,554,1,0,0,0,3323,
	3324,7,19,0,0,3324,3325,7,24,0,0,3325,3326,7,16,0,0,3326,3327,7,17,0,0,
	3327,3328,7,19,0,0,3328,3329,7,7,0,0,3329,556,1,0,0,0,3330,3331,7,19,0,
	0,3331,3332,7,24,0,0,3332,3333,7,16,0,0,3333,3334,7,17,0,0,3334,3335,7,
	19,0,0,3335,3336,7,7,0,0,3336,3337,7,9,0,0,3337,558,1,0,0,0,3338,3339,7,
	19,0,0,3339,3340,7,29,0,0,3340,3341,7,7,0,0,3341,3342,7,10,0,0,3342,3343,
	7,12,0,0,3343,560,1,0,0,0,3344,3345,7,19,0,0,3345,3346,7,29,0,0,3346,3347,
	7,7,0,0,3347,3348,7,10,0,0,3348,3349,7,13,0,0,3349,562,1,0,0,0,3350,3351,
	7,24,0,0,3351,3352,7,5,0,0,3352,3353,7,13,0,0,3353,3354,7,9,0,0,3354,3355,
	7,10,0,0,3355,3356,7,13,0,0,3356,564,1,0,0,0,3357,3358,7,24,0,0,3358,3359,
	7,5,0,0,3359,3360,7,13,0,0,3360,3361,7,16,0,0,3361,3362,7,17,0,0,3362,3363,
	7,5,0,0,3363,3364,7,6,0,0,3364,566,1,0,0,0,3365,3366,7,24,0,0,3366,3367,
	7,5,0,0,3367,3368,7,13,0,0,3368,3369,7,16,0,0,3369,3370,7,17,0,0,3370,3371,
	7,16,0,0,3371,3372,7,17,0,0,3372,3373,7,19,0,0,3373,3374,7,7,0,0,3374,568,
	1,0,0,0,3375,3376,7,24,0,0,3376,3377,7,5,0,0,3377,3378,7,9,0,0,3378,3379,
	7,9,0,0,3379,3380,7,17,0,0,3380,3381,7,7,0,0,3381,3382,7,23,0,0,3382,570,
	1,0,0,0,3383,3384,7,24,0,0,3384,3385,7,5,0,0,3385,3386,7,9,0,0,3386,3387,
	7,9,0,0,3387,3388,7,29,0,0,3388,3389,7,19,0,0,3389,3390,7,13,0,0,3390,3391,
	7,12,0,0,3391,572,1,0,0,0,3392,3393,7,24,0,0,3393,3394,7,6,0,0,3394,3395,
	7,5,0,0,3395,3396,7,7,0,0,3396,3397,7,9,0,0,3397,574,1,0,0,0,3398,3399,
	7,24,0,0,3399,3400,7,13,0,0,3400,3401,7,10,0,0,3401,3402,7,14,0,0,3402,
	3403,7,10,0,0,3403,3404,7,12,0,0,3404,3405,7,17,0,0,3405,3406,7,7,0,0,3406,
	3407,7,23,0,0,3407,576,1,0,0,0,3408,3409,7,24,0,0,3409,3410,7,13,0,0,3410,
	3411,7,10,0,0,3411,3412,7,24,0,0,3412,3413,7,5,0,0,3413,3414,7,13,0,0,3414,
	3415,7,10,0,0,3415,578,1,0,0,0,3416,3417,7,24,0,0,3417,3418,7,13,0,0,3418,
	3419,7,10,0,0,3419,3420,7,24,0,0,3420,3421,7,5,0,0,3421,3422,7,13,0,0,3422,
	3423,7,10,0,0,3423,3424,7,12,0,0,3424,580,1,0,0,0,3425,3426,7,24,0,0,3426,
	3427,7,13,0,0,3427,3428,7,10,0,0,3428,3429,7,9,0,0,3429,3430,7,10,0,0,3430,
	3431,7,13,0,0,3431,3432,7,27,0,0,3432,3433,7,10,0,0,3433,582,1,0,0,0,3434,
	3435,7,24,0,0,3435,3436,7,13,0,0,3436,3437,7,17,0,0,3437,3438,7,19,0,0,
	3438,3439,7,13,0,0,3439,584,1,0,0,0,3440,3441,7,24,0,0,3441,3442,7,13,0,
	0,3442,3443,7,17,0,0,3443,3444,7,27,0,0,3444,3445,7,17,0,0,3445,3446,7,
	6,0,0,3446,3447,7,10,0,0,3447,3448,7,23,0,0,3448,3449,7,10,0,0,3449,3450,
	7,9,0,0,3450,586,1,0,0,0,3451,3452,7,24,0,0,3452,3453,7,13,0,0,3453,3454,
	7,19,0,0,3454,3455,7,14,0,0,3455,3456,7,10,0,0,3456,3457,7,12,0,0,3457,
	3458,7,22,0,0,3458,3459,7,13,0,0,3459,3460,7,5,0,0,3460,3461,7,6,0,0,3461,
	588,1,0,0,0,3462,3463,7,24,0,0,3463,3464,7,13,0,0,3464,3465,7,19,0,0,3465,
	3466,7,14,0,0,3466,3467,7,10,0,0,3467,3468,7,12,0,0,3468,3469,7,22,0,0,
	3469,3470,7,13,0,0,3470,3471,7,10,0,0,3471,590,1,0,0,0,3472,3473,7,24,0,
	0,3473,3474,7,13,0,0,3474,3475,7,19,0,0,3475,3476,7,23,0,0,3476,3477,7,
	13,0,0,3477,3478,7,5,0,0,3478,3479,7,15,0,0,3479,592,1,0,0,0,3480,3481,
	7,28,0,0,3481,3482,7,22,0,0,3482,3483,7,19,0,0,3483,3484,7,16,0,0,3484,
	3485,7,10,0,0,3485,594,1,0,0,0,3486,3487,7,13,0,0,3487,3488,7,5,0,0,3488,
	3489,7,7,0,0,3489,3490,7,23,0,0,3490,3491,7,10,0,0,3491,596,1,0,0,0,3492,
	3493,7,13,0,0,3493,3494,7,10,0,0,3494,3495,7,5,0,0,3495,3496,7,12,0,0,3496,
	598,1,0,0,0,3497,3498,7,13,0,0,3498,3499,7,10,0,0,3499,3500,7,5,0,0,3500,
	3501,7,9,0,0,3501,3502,7,9,0,0,3502,3503,7,17,0,0,3503,3504,7,23,0,0,3504,
	3505,7,7,0,0,3505,600,1,0,0,0,3506,3507,7,13,0,0,3507,3508,7,10,0,0,3508,
	3509,7,14,0,0,3509,3510,7,20,0,0,3510,3511,7,10,0,0,3511,3512,7,14,0,0,
	3512,3513,7,21,0,0,3513,602,1,0,0,0,3514,3515,7,13,0,0,3515,3516,7,10,0,
	0,3516,3517,7,14,0,0,3517,3518,7,22,0,0,3518,3519,7,13,0,0,3519,3520,7,
	9,0,0,3520,3521,7,17,0,0,3521,3522,7,27,0,0,3522,3523,7,10,0,0,3523,604,
	1,0,0,0,3524,3525,7,13,0,0,3525,3526,7,10,0,0,3526,3527,7,25,0,0,3527,606,
	1,0,0,0,3528,3529,7,13,0,0,3529,3530,7,10,0,0,3530,3531,7,25,0,0,3531,3532,
	7,13,0,0,3532,3533,7,10,0,0,3533,3534,7,9,0,0,3534,3535,7,20,0,0,3535,608,
	1,0,0,0,3536,3537,7,13,0,0,3537,3538,7,10,0,0,3538,3539,7,17,0,0,3539,3540,
	7,7,0,0,3540,3541,7,12,0,0,3541,3542,7,10,0,0,3542,3543,7,26,0,0,3543,610,
	1,0,0,0,3544,3545,7,13,0,0,3545,3546,7,10,0,0,3546,3547,7,6,0,0,3547,3548,
	7,5,0,0,3548,3549,7,16,0,0,3549,3550,7,17,0,0,3550,3551,7,27,0,0,3551,3552,
	7,10,0,0,3552,612,1,0,0,0,3553,3554,7,13,0,0,3554,3555,7,10,0,0,3555,3556,
	7,6,0,0,3556,3557,7,10,0,0,3557,3558,7,5,0,0,3558,3559,7,9,0,0,3559,3560,
	7,10,0,0,3560,614,1,0,0,0,3561,3562,7,13,0,0,3562,3563,7,10,0,0,3563,3564,
	7,7,0,0,3564,3565,7,5,0,0,3565,3566,7,15,0,0,3566,3567,7,10,0,0,3567,616,
	1,0,0,0,3568,3569,7,13,0,0,3569,3570,7,10,0,0,3570,3571,7,24,0,0,3571,3572,
	7,10,0,0,3572,3573,7,5,0,0,3573,3574,7,16,0,0,3574,3575,7,5,0,0,3575,3576,
	7,18,0,0,3576,3577,7,6,0,0,3577,3578,7,10,0,0,3578,618,1,0,0,0,3579,3580,
	7,13,0,0,3580,3581,7,10,0,0,3581,3582,7,24,0,0,3582,3583,7,6,0,0,3583,3584,
	7,5,0,0,3584,3585,7,14,0,0,3585,3586,7,10,0,0,3586,620,1,0,0,0,3587,3588,
	7,13,0,0,3588,3589,7,10,0,0,3589,3590,7,24,0,0,3590,3591,7,6,0,0,3591,3592,
	7,17,0,0,3592,3593,7,14,0,0,3593,3594,7,5,0,0,3594,622,1,0,0,0,3595,3596,
	7,13,0,0,3596,3597,7,10,0,0,3597,3598,7,9,0,0,3598,3599,7,10,0,0,3599,3600,
	7,16,0,0,3600,624,1,0,0,0,3601,3602,7,13,0,0,3602,3603,7,10,0,0,3603,3604,
	7,9,0,0,3604,3605,7,16,0,0,3605,3606,7,5,0,0,3606,3607,7,13,0,0,3607,3608,
	7,16,0,0,3608,626,1,0,0,0,3609,3610,7,13,0,0,3610,3611,7,10,0,0,3611,3612,
	7,9,0,0,3612,3613,7,16,0,0,3613,3614,7,13,0,0,3614,3615,7,17,0,0,3615,3616,
	7,14,0,0,3616,3617,7,16,0,0,3617,628,1,0,0,0,3618,3619,7,13,0,0,3619,3620,
	7,10,0,0,3620,3621,7,16,0,0,3621,3622,7,22,0,0,3622,3623,7,13,0,0,3623,
	3624,7,7,0,0,3624,3625,7,9,0,0,3625,630,1,0,0,0,3626,3627,7,13,0,0,3627,
	3628,7,10,0,0,3628,3629,7,27,0,0,3629,3630,7,19,0,0,3630,3631,7,21,0,0,
	3631,3632,7,10,0,0,3632,632,1,0,0,0,3633,3634,7,13,0,0,3634,3635,7,19,0,
	0,3635,3636,7,6,0,0,3636,3637,7,10,0,0,3637,634,1,0,0,0,3638,3639,7,13,
	0,0,3639,3640,7,19,0,0,3640,3641,7,6,0,0,3641,3642,7,6,0,0,3642,3643,7,
	18,0,0,3643,3644,7,5,0,0,3644,3645,7,14,0,0,3645,3646,7,21,0,0,3646,636,
	1,0,0,0,3647,3648,7,13,0,0,3648,3649,7,19,0,0,3649,3650,7,29,0,0,3650,3651,
	7,9,0,0,3651,638,1,0,0,0,3652,3653,7,13,0,0,3653,3654,7,22,0,0,3654,3655,
	7,6,0,0,3655,3656,7,10,0,0,3656,640,1,0,0,0,3657,3658,7,9,0,0,3658,3659,
	7,5,0,0,3659,3660,7,27,0,0,3660,3661,7,10,0,0,3661,3662,7,24,0,0,3662,3663,
	7,19,0,0,3663,3664,7,17,0,0,3664,3665,7,7,0,0,3665,3666,7,16,0,0,3666,642,
	1,0,0,0,3667,3668,7,9,0,0,3668,3669,7,14,0,0,3669,3670,7,20,0,0,3670,3671,
	7,10,0,0,3671,3672,7,15,0,0,3672,3673,7,5,0,0,3673,644,1,0,0,0,3674,3675,
	7,9,0,0,3675,3676,7,14,0,0,3676,3677,7,13,0,0,3677,3678,7,19,0,0,3678,3679,
	7,6,0,0,3679,3680,7,6,0,0,3680,646,1,0,0,0,3681,3682,7,9,0,0,3682,3683,
	7,10,0,0,3683,3684,7,5,0,0,3684,3685,7,13,0,0,3685,3686,7,14,0,0,3686,3687,
	7,20,0,0,3687,648,1,0,0,0,3688,3689,7,9,0,0,3689,3690,7,10,0,0,3690,3691,
	7,14,0,0,3691,3692,7,19,0,0,3692,3693,7,7,0,0,3693,3694,7,12,0,0,3694,650,
	1,0,0,0,3695,3696,7,9,0,0,3696,3697,7,10,0,0,3697,3698,7,14,0,0,3698,3699,
	7,22,0,0,3699,3700,7,13,0,0,3700,3701,7,17,0,0,3701,3702,7,16,0,0,3702,
	3703,7,8,0,0,3703,652,1,0,0,0,3704,3705,7,9,0,0,3705,3706,7,10,0,0,3706,
	3707,7,28,0,0,3707,3708,7,22,0,0,3708,3709,7,10,0,0,3709,3710,7,7,0,0,3710,
	3711,7,14,0,0,3711,3712,7,10,0,0,3712,654,1,0,0,0,3713,3714,7,9,0,0,3714,
	3715,7,10,0,0,3715,3716,7,28,0,0,3716,3717,7,22,0,0,3717,3718,7,10,0,0,
	3718,3719,7,7,0,0,3719,3720,7,14,0,0,3720,3721,7,10,0,0,3721,3722,7,9,0,
	0,3722,656,1,0,0,0,3723,3724,7,9,0,0,3724,3725,7,10,0,0,3725,3726,7,13,
	0,0,3726,3727,7,17,0,0,3727,3728,7,5,0,0,3728,3729,7,6,0,0,3729,3730,7,
	17,0,0,3730,3731,7,11,0,0,3731,3732,7,5,0,0,3732,3733,7,18,0,0,3733,3734,
	7,6,0,0,3734,3735,7,10,0,0,3735,658,1,0,0,0,3736,3737,7,9,0,0,3737,3738,
	7,10,0,0,3738,3739,7,13,0,0,3739,3740,7,27,0,0,3740,3741,7,10,0,0,3741,
	3742,7,13,0,0,3742,660,1,0,0,0,3743,3744,7,9,0,0,3744,3745,7,10,0,0,3745,
	3746,7,9,0,0,3746,3747,7,9,0,0,3747,3748,7,17,0,0,3748,3749,7,19,0,0,3749,
	3750,7,7,0,0,3750,662,1,0,0,0,3751,3752,7,9,0,0,3752,3753,7,10,0,0,3753,
	3754,7,16,0,0,3754,664,1,0,0,0,3755,3756,7,9,0,0,3756,3757,7,20,0,0,3757,
	3758,7,5,0,0,3758,3759,7,13,0,0,3759,3760,7,10,0,0,3760,666,1,0,0,0,3761,
	3762,7,9,0,0,3762,3763,7,20,0,0,3763,3764,7,19,0,0,3764,3765,7,29,0,0,3765,
	668,1,0,0,0,3766,3767,7,9,0,0,3767,3768,7,17,0,0,3768,3769,7,15,0,0,3769,
	3770,7,24,0,0,3770,3771,7,6,0,0,3771,3772,7,10,0,0,3772,670,1,0,0,0,3773,
	3774,7,9,0,0,3774,3775,7,7,0,0,3775,3776,7,5,0,0,3776,3777,7,24,0,0,3777,
	3778,7,9,0,0,3778,3779,7,20,0,0,3779,3780,7,19,0,0,3780,3781,7,16,0,0,3781,
	672,1,0,0,0,3782,3783,7,9,0,0,3783,3784,7,16,0,0,3784,3785,7,5,0,0,3785,
	3786,7,18,0,0,3786,3787,7,6,0,0,3787,3788,7,10,0,0,3788,674,1,0,0,0,3789,
	3790,7,9,0,0,3790,3791,7,16,0,0,3791,3792,7,5,0,0,3792,3793,7,7,0,0,3793,
	3794,7,12,0,0,3794,3795,7,5,0,0,3795,3796,7,6,0,0,3796,3797,7,19,0,0,3797,
	3798,7,7,0,0,3798,3799,7,10,0,0,3799,676,1,0,0,0,3800,3801,7,9,0,0,3801,
	3802,7,16,0,0,3802,3803,7,5,0,0,3803,3804,7,13,0,0,3804,3805,7,16,0,0,3805,
	678,1,0,0,0,3806,3807,7,9,0,0,3807,3808,7,16,0,0,3808,3809,7,5,0,0,3809,
	3810,7,16,0,0,3810,3811,7,10,0,0,3811,3812,7,15,0,0,3812,3813,7,10,0,0,
	3813,3814,7,7,0,0,3814,3815,7,16,0,0,3815,680,1,0,0,0,3816,3817,7,9,0,0,
	3817,3818,7,16,0,0,3818,3819,7,5,0,0,3819,3820,7,16,0,0,3820,3821,7,17,
	0,0,3821,3822,7,9,0,0,3822,3823,7,16,0,0,3823,3824,7,17,0,0,3824,3825,7,
	14,0,0,3825,3826,7,9,0,0,3826,682,1,0,0,0,3827,3828,7,9,0,0,3828,3829,7,
	16,0,0,3829,3830,7,12,0,0,3830,3831,7,17,0,0,3831,3832,7,7,0,0,3832,684,
	1,0,0,0,3833,3834,7,9,0,0,3834,3835,7,16,0,0,3835,3836,7,12,0,0,3836,3837,
	7,19,0,0,3837,3838,7,22,0,0,3838,3839,7,16,0,0,3839,686,1,0,0,0,3840,3841,
	7,9,0,0,3841,3842,7,16,0,0,3842,3843,7,19,0,0,3843,3844,7,13,0,0,3844,3845,
	7,5,0,0,3845,3846,7,23,0,0,3846,3847,7,10,0,0,3847,688,1,0,0,0,3848,3849,
	7,9,0,0,3849,3850,7,16,0,0,3850,3851,7,13,0,0,3851,3852,7,17,0,0,3852,3853,
	7,14,0,0,3853,3854,7,16,0,0,3854,690,1,0,0,0,3855,3856,7,9,0,0,3856,3857,
	7,16,0,0,3857,3858,7,13,0,0,3858,3859,7,17,0,0,3859,3860,7,24,0,0,3860,
	692,1,0,0,0,3861,3862,7,9,0,0,3862,3863,7,8,0,0,3863,3864,7,9,0,0,3864,
	3865,7,17,0,0,3865,3866,7,12,0,0,3866,694,1,0,0,0,3867,3868,7,9,0,0,3868,
	3869,7,8,0,0,3869,3870,7,9,0,0,3870,3871,7,16,0,0,3871,3872,7,10,0,0,3872,
	3873,7,15,0,0,3873,696,1,0,0,0,3874,3875,7,16,0,0,3875,3876,7,5,0,0,3876,
	3877,7,18,0,0,3877,3878,7,6,0,0,3878,3879,7,10,0,0,3879,3880,7,9,0,0,3880,
	698,1,0,0,0,3881,3882,7,16,0,0,3882,3883,7,5,0,0,3883,3884,7,18,0,0,3884,
	3885,7,6,0,0,3885,3886,7,10,0,0,3886,3887,7,9,0,0,3887,3888,7,24,0,0,3888,
	3889,7,5,0,0,3889,3890,7,14,0,0,3890,3891,7,10,0,0,3891,700,1,0,0,0,3892,
	3893,7,16,0,0,3893,3894,7,10,0,0,3894,3895,7,15,0,0,3895,3896,7,24,0,0,
	3896,702,1,0,0,0,3897,3898,7,16,0,0,3898,3899,7,10,0,0,3899,3900,7,15,0,
	0,3900,3901,7,24,0,0,3901,3902,7,6,0,0,3902,3903,7,5,0,0,3903,3904,7,16,
	0,0,3904,3905,7,10,0,0,3905,704,1,0,0,0,3906,3907,7,16,0,0,3907,3908,7,
	10,0,0,3908,3909,7,15,0,0,3909,3910,7,24,0,0,3910,3911,7,19,0,0,3911,3912,
	7,13,0,0,3912,3913,7,5,0,0,3913,3914,7,13,0,0,3914,3915,7,8,0,0,3915,706,
	1,0,0,0,3916,3917,7,16,0,0,3917,3918,7,10,0,0,3918,3919,7,26,0,0,3919,3920,
	7,16,0,0,3920,708,1,0,0,0,3921,3922,7,16,0,0,3922,3923,7,13,0,0,3923,3924,
	7,5,0,0,3924,3925,7,7,0,0,3925,3926,7,9,0,0,3926,3927,7,5,0,0,3927,3928,
	7,14,0,0,3928,3929,7,16,0,0,3929,3930,7,17,0,0,3930,3931,7,19,0,0,3931,
	3932,7,7,0,0,3932,710,1,0,0,0,3933,3934,7,16,0,0,3934,3935,7,13,0,0,3935,
	3936,7,17,0,0,3936,3937,7,23,0,0,3937,3938,7,23,0,0,3938,3939,7,10,0,0,
	3939,3940,7,13,0,0,3940,712,1,0,0,0,3941,3942,7,16,0,0,3942,3943,7,13,0,
	0,3943,3944,7,22,0,0,3944,3945,7,7,0,0,3945,3946,7,14,0,0,3946,3947,7,5,
	0,0,3947,3948,7,16,0,0,3948,3949,7,10,0,0,3949,714,1,0,0,0,3950,3951,7,
	16,0,0,3951,3952,7,13,0,0,3952,3953,7,22,0,0,3953,3954,7,9,0,0,3954,3955,
	7,16,0,0,3955,3956,7,10,0,0,3956,3957,7,12,0,0,3957,716,1,0,0,0,3958,3959,
	7,16,0,0,3959,3960,7,8,0,0,3960,3961,7,24,0,0,3961,3962,7,10,0,0,3962,718,
	1,0,0,0,3963,3964,7,16,0,0,3964,3965,7,8,0,0,3965,3966,7,24,0,0,3966,3967,
	7,10,0,0,3967,3968,7,9,0,0,3968,720,1,0,0,0,3969,3970,7,22,0,0,3970,3971,
	7,7,0,0,3971,3972,7,18,0,0,3972,3973,7,19,0,0,3973,3974,7,22,0,0,3974,3975,
	7,7,0,0,3975,3976,7,12,0,0,3976,3977,7,10,0,0,3977,3978,7,12,0,0,3978,722,
	1,0,0,0,3979,3980,7,22,0,0,3980,3981,7,7,0,0,3981,3982,7,14,0,0,3982,3983,
	7,19,0,0,3983,3984,7,15,0,0,3984,3985,7,15,0,0,3985,3986,7,17,0,0,3986,
	3987,7,16,0,0,3987,3988,7,16,0,0,3988,3989,7,10,0,0,3989,3990,7,12,0,0,
	3990,724,1,0,0,0,3991,3992,7,22,0,0,3992,3993,7,7,0,0,3993,3994,7,10,0,
	0,3994,3995,7,7,0,0,3995,3996,7,14,0,0,3996,3997,7,13,0,0,3997,3998,7,8,
	0,0,3998,3999,7,24,0,0,3999,4000,7,16,0,0,4000,4001,7,10,0,0,4001,4002,
	7,12,0,0,4002,726,1,0,0,0,4003,4004,7,22,0,0,4004,4005,7,7,0,0,4005,4006,
	7,21,0,0,4006,4007,7,7,0,0,4007,4008,7,19,0,0,4008,4009,7,29,0,0,4009,4010,
	7,7,0,0,4010,728,1,0,0,0,4011,4012,7,22,0,0,4012,4013,7,7,0,0,4013,4014,
	7,6,0,0,4014,4015,7,17,0,0,4015,4016,7,9,0,0,4016,4017,7,16,0,0,4017,4018,
	7,10,0,0,4018,4019,7,7,0,0,4019,730,1,0,0,0,4020,4021,7,22,0,0,4021,4022,
	7,7,0,0,4022,4023,7,6,0,0,4023,4024,7,19,0,0,4024,4025,7,23,0,0,4025,4026,
	7,23,0,0,4026,4027,7,10,0,0,4027,4028,7,12,0,0,4028,732,1,0,0,0,4029,4030,
	7,22,0,0,4030,4031,7,7,0,0,4031,4032,7,16,0,0,4032,4033,7,17,0,0,4033,4034,
	7,6,0,0,4034,734,1,0,0,0,4035,4036,7,22,0,0,4036,4037,7,24,0,0,4037,4038,
	7,12,0,0,4038,4039,7,5,0,0,4039,4040,7,16,0,0,4040,4041,7,10,0,0,4041,736,
	1,0,0,0,4042,4043,7,27,0,0,4043,4044,7,5,0,0,4044,4045,7,14,0,0,4045,4046,
	7,22,0,0,4046,4047,7,22,0,0,4047,4048,7,15,0,0,4048,738,1,0,0,0,4049,4050,
	7,27,0,0,4050,4051,7,5,0,0,4051,4052,7,6,0,0,4052,4053,7,17,0,0,4053,4054,
	7,12,0,0,4054,740,1,0,0,0,4055,4056,7,27,0,0,4056,4057,7,5,0,0,4057,4058,
	7,6,0,0,4058,4059,7,17,0,0,4059,4060,7,12,0,0,4060,4061,7,5,0,0,4061,4062,
	7,16,0,0,4062,4063,7,10,0,0,4063,742,1,0,0,0,4064,4065,7,27,0,0,4065,4066,
	7,5,0,0,4066,4067,7,6,0,0,4067,4068,7,17,0,0,4068,4069,7,12,0,0,4069,4070,
	7,5,0,0,4070,4071,7,16,0,0,4071,4072,7,19,0,0,4072,4073,7,13,0,0,4073,744,
	1,0,0,0,4074,4075,7,27,0,0,4075,4076,7,5,0,0,4076,4077,7,13,0,0,4077,4078,
	7,8,0,0,4078,4079,7,17,0,0,4079,4080,7,7,0,0,4080,4081,7,23,0,0,4081,746,
	1,0,0,0,4082,4083,7,27,0,0,4083,4084,7,10,0,0,4084,4085,7,13,0,0,4085,4086,
	7,9,0,0,4086,4087,7,17,0,0,4087,4088,7,19,0,0,4088,4089,7,7,0,0,4089,748,
	1,0,0,0,4090,4091,7,27,0,0,4091,4092,7,17,0,0,4092,4093,7,10,0,0,4093,4094,
	7,29,0,0,4094,750,1,0,0,0,4095,4096,7,27,0,0,4096,4097,7,19,0,0,4097,4098,
	7,6,0,0,4098,4099,7,5,0,0,4099,4100,7,16,0,0,4100,4101,7,17,0,0,4101,4102,
	7,6,0,0,4102,4103,7,10,0,0,4103,752,1,0,0,0,4104,4105,7,29,0,0,4105,4106,
	7,20,0,0,4106,4107,7,17,0,0,4107,4108,7,16,0,0,4108,4109,7,10,0,0,4109,
	4110,7,9,0,0,4110,4111,7,24,0,0,4111,4112,7,5,0,0,4112,4113,7,14,0,0,4113,
	4114,7,10,0,0,4114,754,1,0,0,0,4115,4116,7,29,0,0,4116,4117,7,17,0,0,4117,
	4118,7,16,0,0,4118,4119,7,20,0,0,4119,4120,7,19,0,0,4120,4121,7,22,0,0,
	4121,4122,7,16,0,0,4122,756,1,0,0,0,4123,4124,7,29,0,0,4124,4125,7,19,0,
	0,4125,4126,7,13,0,0,4126,4127,7,21,0,0,4127,758,1,0,0,0,4128,4129,7,29,
	0,0,4129,4130,7,13,0,0,4130,4131,7,5,0,0,4131,4132,7,24,0,0,4132,4133,7,
	24,0,0,4133,4134,7,10,0,0,4134,4135,7,13,0,0,4135,760,1,0,0,0,4136,4137,
	7,29,0,0,4137,4138,7,13,0,0,4138,4139,7,17,0,0,4139,4140,7,16,0,0,4140,
	4141,7,10,0,0,4141,762,1,0,0,0,4142,4143,7,26,0,0,4143,4144,7,15,0,0,4144,
	4145,7,6,0,0,4145,764,1,0,0,0,4146,4147,7,8,0,0,4147,4148,7,10,0,0,4148,
	4149,7,5,0,0,4149,4150,7,13,0,0,4150,766,1,0,0,0,4151,4152,7,8,0,0,4152,
	4153,7,10,0,0,4153,4154,7,9,0,0,4154,768,1,0,0,0,4155,4156,7,11,0,0,4156,
	4157,7,19,0,0,4157,4158,7,7,0,0,4158,4159,7,10,0,0,4159,770,1,0,0,0,4160,
	4161,7,18,0,0,4161,4162,7,10,0,0,4162,4163,7,16,0,0,4163,4164,7,29,0,0,
	4164,4165,7,10,0,0,4165,4166,7,10,0,0,4166,4167,7,7,0,0,4167,772,1,0,0,
	0,4168,4169,7,18,0,0,4169,4170,7,17,0,0,4170,4171,7,23,0,0,4171,4172,7,
	17,0,0,4172,4173,7,7,0,0,4173,4174,7,16,0,0,4174,774,1,0,0,0,4175,4176,
	7,18,0,0,4176,4177,7,17,0,0,4177,4178,7,16,0,0,4178,776,1,0,0,0,4179,4180,
	7,18,0,0,4180,4181,7,19,0,0,4181,4182,7,19,0,0,4182,4183,7,6,0,0,4183,4184,
	7,10,0,0,4184,4185,7,5,0,0,4185,4186,7,7,0,0,4186,778,1,0,0,0,4187,4188,
	7,14,0,0,4188,4189,7,20,0,0,4189,4190,7,5,0,0,4190,4191,7,13,0,0,4191,780,
	1,0,0,0,4192,4193,7,14,0,0,4193,4194,7,20,0,0,4194,4195,7,5,0,0,4195,4196,
	7,13,0,0,4196,4197,7,5,0,0,4197,4198,7,14,0,0,4198,4199,7,16,0,0,4199,4200,
	7,10,0,0,4200,4201,7,13,0,0,4201,782,1,0,0,0,4202,4203,7,14,0,0,4203,4204,
	7,19,0,0,4204,4205,7,5,0,0,4205,4206,7,6,0,0,4206,4207,7,10,0,0,4207,4208,
	7,9,0,0,4208,4209,7,14,0,0,4209,4210,7,10,0,0,4210,784,1,0,0,0,4211,4212,
	7,12,0,0,4212,4213,7,10,0,0,4213,4214,7,14,0,0,4214,786,1,0,0,0,4215,4216,
	7,12,0,0,4216,4217,7,10,0,0,4217,4218,7,14,0,0,4218,4219,7,17,0,0,4219,
	4220,7,15,0,0,4220,4221,7,5,0,0,4221,4222,7,6,0,0,4222,788,1,0,0,0,4223,
	4224,7,10,0,0,4224,4225,7,26,0,0,4225,4226,7,17,0,0,4226,4227,7,9,0,0,4227,
	4228,7,16,0,0,4228,4229,7,9,0,0,4229,790,1,0,0,0,4230,4231,7,10,0,0,4231,
	4232,7,26,0,0,4232,4233,7,16,0,0,4233,4234,7,13,0,0,4234,4235,7,5,0,0,4235,
	4236,7,14,0,0,4236,4237,7,16,0,0,4237,792,1,0,0,0,4238,4239,7,25,0,0,4239,
	4240,7,6,0,0,4240,4241,7,19,0,0,4241,4242,7,5,0,0,4242,4243,7,16,0,0,4243,
	794,1,0,0,0,4244,4245,7,23,0,0,4245,4246,7,13,0,0,4246,4247,7,10,0,0,4247,
	4248,7,5,0,0,4248,4249,7,16,0,0,4249,4250,7,10,0,0,4250,4251,7,9,0,0,4251,
	4252,7,16,0,0,4252,796,1,0,0,0,4253,4254,7,17,0,0,4254,4255,7,7,0,0,4255,
	4256,7,19,0,0,4256,4257,7,22,0,0,4257,4258,7,16,0,0,4258,798,1,0,0,0,4259,
	4260,7,17,0,0,4260,4261,7,7,0,0,4261,4262,7,16,0,0,4262,800,1,0,0,0,4263,
	4264,7,17,0,0,4264,4265,7,7,0,0,4265,4266,7,16,0,0,4266,4267,7,10,0,0,4267,
	4268,7,23,0,0,4268,4269,7,10,0,0,4269,4270,7,13,0,0,4270,802,1,0,0,0,4271,
	4272,7,17,0,0,4272,4273,7,7,0,0,4273,4274,7,16,0,0,4274,4275,7,10,0,0,4275,
	4276,7,13,0,0,4276,4277,7,27,0,0,4277,4278,7,5,0,0,4278,4279,7,6,0,0,4279,
	804,1,0,0,0,4280,4281,7,6,0,0,4281,4282,7,10,0,0,4282,4283,7,5,0,0,4283,
	4284,7,9,0,0,4284,4285,7,16,0,0,4285,806,1,0,0,0,4286,4287,7,7,0,0,4287,
	4288,7,5,0,0,4288,4289,7,16,0,0,4289,4290,7,17,0,0,4290,4291,7,19,0,0,4291,
	4292,7,7,0,0,4292,4293,7,5,0,0,4293,4294,7,6,0,0,4294,808,1,0,0,0,4295,
	4296,7,7,0,0,4296,4297,7,14,0,0,4297,4298,7,20,0,0,4298,4299,7,5,0,0,4299,
	4300,7,13,0,0,4300,810,1,0,0,0,4301,4302,7,7,0,0,4302,4303,7,19,0,0,4303,
	4304,7,7,0,0,4304,4305,7,10,0,0,4305,812,1,0,0,0,4306,4307,7,7,0,0,4307,
	4308,7,22,0,0,4308,4309,7,6,0,0,4309,4310,7,6,0,0,4310,4311,7,17,0,0,4311,
	4312,7,25,0,0,4312,814,1,0,0,0,4313,4314,7,7,0,0,4314,4315,7,22,0,0,4315,
	4316,7,15,0,0,4316,4317,7,10,0,0,4317,4318,7,13,0,0,4318,4319,7,17,0,0,
	4319,4320,7,14,0,0,4320,816,1,0,0,0,4321,4322,7,19,0,0,4322,4323,7,27,0,
	0,4323,4324,7,10,0,0,4324,4325,7,13,0,0,4325,4326,7,6,0,0,4326,4327,7,5,
	0,0,4327,4328,7,8,0,0,4328,818,1,0,0,0,4329,4330,7,24,0,0,4330,4331,7,19,
	0,0,4331,4332,7,9,0,0,4332,4333,7,17,0,0,4333,4334,7,16,0,0,4334,4335,7,
	17,0,0,4335,4336,7,19,0,0,4336,4337,7,7,0,0,4337,820,1,0,0,0,4338,4339,
	7,24,0,0,4339,4340,7,13,0,0,4340,4341,7,10,0,0,4341,4342,7,14,0,0,4342,
	4343,7,17,0,0,4343,4344,7,9,0,0,4344,4345,7,17,0,0,4345,4346,7,19,0,0,4346,
	4347,7,7,0,0,4347,822,1,0,0,0,4348,4349,7,13,0,0,4349,4350,7,10,0,0,4350,
	4351,7,5,0,0,4351,4352,7,6,0,0,4352,824,1,0,0,0,4353,4354,7,13,0,0,4354,
	4355,7,19,0,0,4355,4356,7,29,0,0,4356,826,1,0,0,0,4357,4358,7,9,0,0,4358,
	4359,7,10,0,0,4359,4360,7,16,0,0,4360,4361,7,19,0,0,4361,4362,7,25,0,0,
	4362,828,1,0,0,0,4363,4364,7,9,0,0,4364,4365,7,15,0,0,4365,4366,7,5,0,0,
	4366,4367,7,6,0,0,4367,4368,7,6,0,0,4368,4369,7,17,0,0,4369,4370,7,7,0,
	0,4370,4371,7,16,0,0,4371,830,1,0,0,0,4372,4373,7,9,0,0,4373,4374,7,22,
	0,0,4374,4375,7,18,0,0,4375,4376,7,9,0,0,4376,4377,7,16,0,0,4377,4378,7,
	13,0,0,4378,4379,7,17,0,0,4379,4380,7,7,0,0,4380,4381,7,23,0,0,4381,832,
	1,0,0,0,4382,4383,7,16,0,0,4383,4384,7,17,0,0,4384,4385,7,15,0,0,4385,4386,
	7,10,0,0,4386,834,1,0,0,0,4387,4388,7,16,0,0,4388,4389,7,17,0,0,4389,4390,
	7,15,0,0,4390,4391,7,10,0,0,4391,4392,7,9,0,0,4392,4393,7,16,0,0,4393,4394,
	7,5,0,0,4394,4395,7,15,0,0,4395,4396,7,24,0,0,4396,836,1,0,0,0,4397,4398,
	7,16,0,0,4398,4399,7,13,0,0,4399,4400,7,10,0,0,4400,4401,7,5,0,0,4401,4402,
	7,16,0,0,4402,838,1,0,0,0,4403,4404,7,16,0,0,4404,4405,7,13,0,0,4405,4406,
	7,17,0,0,4406,4407,7,15,0,0,4407,840,1,0,0,0,4408,4409,7,27,0,0,4409,4410,
	7,5,0,0,4410,4411,7,6,0,0,4411,4412,7,22,0,0,4412,4413,7,10,0,0,4413,4414,
	7,9,0,0,4414,842,1,0,0,0,4415,4416,7,27,0,0,4416,4417,7,5,0,0,4417,4418,
	7,13,0,0,4418,4419,7,14,0,0,4419,4420,7,20,0,0,4420,4421,7,5,0,0,4421,4422,
	7,13,0,0,4422,844,1,0,0,0,4423,4424,7,26,0,0,4424,4425,7,15,0,0,4425,4426,
	7,6,0,0,4426,4427,7,5,0,0,4427,4428,7,16,0,0,4428,4429,7,16,0,0,4429,4430,
	7,13,0,0,4430,4431,7,17,0,0,4431,4432,7,18,0,0,4432,4433,7,22,0,0,4433,
	4434,7,16,0,0,4434,4435,7,10,0,0,4435,4436,7,9,0,0,4436,846,1,0,0,0,4437,
	4438,7,26,0,0,4438,4439,7,15,0,0,4439,4440,7,6,0,0,4440,4441,7,14,0,0,4441,
	4442,7,19,0,0,4442,4443,7,15,0,0,4443,4444,7,15,0,0,4444,4445,7,10,0,0,
	4445,4446,7,7,0,0,4446,4447,7,16,0,0,4447,848,1,0,0,0,4448,4449,7,26,0,
	0,4449,4450,7,15,0,0,4450,4451,7,6,0,0,4451,4452,7,5,0,0,4452,4453,7,23,
	0,0,4453,4454,7,23,0,0,4454,850,1,0,0,0,4455,4456,7,26,0,0,4456,4457,7,
	15,0,0,4457,4458,7,6,0,0,4458,4459,5,95,0,0,4459,4460,7,17,0,0,4460,4461,
	7,9,0,0,4461,4462,5,95,0,0,4462,4463,7,29,0,0,4463,4464,7,10,0,0,4464,4465,
	7,6,0,0,4465,4466,7,6,0,0,4466,4467,5,95,0,0,4467,4468,7,25,0,0,4468,4469,
	7,19,0,0,4469,4470,7,13,0,0,4470,4471,7,15,0,0,4471,4472,7,10,0,0,4472,
	4473,7,12,0,0,4473,852,1,0,0,0,4474,4475,7,26,0,0,4475,4476,7,15,0,0,4476,
	4477,7,6,0,0,4477,4478,5,95,0,0,4478,4479,7,17,0,0,4479,4480,7,9,0,0,4480,
	4481,5,95,0,0,4481,4482,7,29,0,0,4482,4483,7,10,0,0,4483,4484,7,6,0,0,4484,
	4485,7,6,0,0,4485,4486,5,95,0,0,4486,4487,7,25,0,0,4487,4488,7,19,0,0,4488,
	4489,7,13,0,0,4489,4490,7,15,0,0,4490,4491,7,10,0,0,4491,4492,7,12,0,0,
	4492,4493,5,95,0,0,4493,4494,7,12,0,0,4494,4495,7,19,0,0,4495,4496,7,14,
	0,0,4496,4497,7,22,0,0,4497,4498,7,15,0,0,4498,4499,7,10,0,0,4499,4500,
	7,7,0,0,4500,4501,7,16,0,0,4501,854,1,0,0,0,4502,4503,7,26,0,0,4503,4504,
	7,15,0,0,4504,4505,7,6,0,0,4505,4506,5,95,0,0,4506,4507,7,17,0,0,4507,4508,
	7,9,0,0,4508,4509,5,95,0,0,4509,4510,7,29,0,0,4510,4511,7,10,0,0,4511,4512,
	7,6,0,0,4512,4513,7,6,0,0,4513,4514,5,95,0,0,4514,4515,7,25,0,0,4515,4516,
	7,19,0,0,4516,4517,7,13,0,0,4517,4518,7,15,0,0,4518,4519,7,10,0,0,4519,
	4520,7,12,0,0,4520,4521,5,95,0,0,4521,4522,7,14,0,0,4522,4523,7,19,0,0,
	4523,4524,7,7,0,0,4524,4525,7,16,0,0,4525,4526,7,10,0,0,4526,4527,7,7,0,
	0,4527,4528,7,16,0,0,4528,856,1,0,0,0,4529,4530,7,26,0,0,4530,4531,7,24,
	0,0,4531,4532,7,5,0,0,4532,4533,7,16,0,0,4533,4534,7,20,0,0,4534,858,1,
	0,0,0,4535,4536,7,26,0,0,4536,4537,7,24,0,0,4537,4538,7,5,0,0,4538,4539,
	7,16,0,0,4539,4540,7,20,0,0,4540,4541,5,95,0,0,4541,4542,7,10,0,0,4542,
	4543,7,26,0,0,4543,4544,7,17,0,0,4544,4545,7,9,0,0,4545,4546,7,16,0,0,4546,
	4547,7,9,0,0,4547,860,1,0,0,0,4548,4549,7,26,0,0,4549,4550,7,15,0,0,4550,
	4551,7,6,0,0,4551,4552,7,14,0,0,4552,4553,7,19,0,0,4553,4554,7,7,0,0,4554,
	4555,7,14,0,0,4555,4556,7,5,0,0,4556,4557,7,16,0,0,4557,862,1,0,0,0,4558,
	4559,7,26,0,0,4559,4560,7,15,0,0,4560,4561,7,6,0,0,4561,4562,7,10,0,0,4562,
	4563,7,6,0,0,4563,4564,7,10,0,0,4564,4565,7,15,0,0,4565,4566,7,10,0,0,4566,
	4567,7,7,0,0,4567,4568,7,16,0,0,4568,864,1,0,0,0,4569,4570,7,26,0,0,4570,
	4571,7,15,0,0,4571,4572,7,6,0,0,4572,4573,7,10,0,0,4573,4574,7,26,0,0,4574,
	4575,7,17,0,0,4575,4576,7,9,0,0,4576,4577,7,16,0,0,4577,4578,7,9,0,0,4578,
	866,1,0,0,0,4579,4580,7,26,0,0,4580,4581,7,15,0,0,4581,4582,7,6,0,0,4582,
	4583,7,25,0,0,4583,4584,7,19,0,0,4584,4585,7,13,0,0,4585,4586,7,10,0,0,
	4586,4587,7,9,0,0,4587,4588,7,16,0,0,4588,868,1,0,0,0,4589,4590,7,26,0,
	0,4590,4591,7,15,0,0,4591,4592,7,6,0,0,4592,4593,7,24,0,0,4593,4594,7,5,
	0,0,4594,4595,7,13,0,0,4595,4596,7,9,0,0,4596,4597,7,10,0,0,4597,870,1,
	0,0,0,4598,4599,7,26,0,0,4599,4600,7,15,0,0,4600,4601,7,6,0,0,4601,4602,
	7,24,0,0,4602,4603,7,17,0,0,4603,872,1,0,0,0,4604,4605,7,26,0,0,4605,4606,
	7,15,0,0,4606,4607,7,6,0,0,4607,4608,7,13,0,0,4608,4609,7,19,0,0,4609,4610,
	7,19,0,0,4610,4611,7,16,0,0,4611,874,1,0,0,0,4612,4613,7,26,0,0,4613,4614,
	7,15,0,0,4614,4615,7,6,0,0,4615,4616,7,9,0,0,4616,4617,7,10,0,0,4617,4618,
	7,13,0,0,4618,4619,7,17,0,0,4619,4620,7,5,0,0,4620,4621,7,6,0,0,4621,4622,
	7,17,0,0,4622,4623,7,11,0,0,4623,4624,7,10,0,0,4624,876,1,0,0,0,4625,4626,
	7,14,0,0,4626,4627,7,5,0,0,4627,4628,7,6,0,0,4628,4629,7,6,0,0,4629,878,
	1,0,0,0,4630,4631,7,14,0,0,4631,4632,7,22,0,0,4632,4633,7,13,0,0,4633,4634,
	7,13,0,0,4634,4635,7,10,0,0,4635,4636,7,7,0,0,4636,4637,7,16,0,0,4637,880,
	1,0,0,0,4638,4639,7,5,0,0,4639,4640,7,16,0,0,4640,4641,7,16,0,0,4641,4642,
	7,5,0,0,4642,4643,7,14,0,0,4643,4644,7,20,0,0,4644,882,1,0,0,0,4645,4646,
	7,12,0,0,4646,4647,7,10,0,0,4647,4648,7,16,0,0,4648,4649,7,5,0,0,4649,4650,
	7,14,0,0,4650,4651,7,20,0,0,4651,884,1,0,0,0,4652,4653,7,10,0,0,4653,4654,
	7,26,0,0,4654,4655,7,24,0,0,4655,4656,7,13,0,0,4656,4657,7,10,0,0,4657,
	4658,7,9,0,0,4658,4659,7,9,0,0,4659,4660,7,17,0,0,4660,4661,7,19,0,0,4661,
	4662,7,7,0,0,4662,886,1,0,0,0,4663,4664,7,23,0,0,4664,4665,7,10,0,0,4665,
	4666,7,7,0,0,4666,4667,7,10,0,0,4667,4668,7,13,0,0,4668,4669,7,5,0,0,4669,
	4670,7,16,0,0,4670,4671,7,10,0,0,4671,4672,7,12,0,0,4672,888,1,0,0,0,4673,
	4674,7,6,0,0,4674,4675,7,19,0,0,4675,4676,7,23,0,0,4676,4677,7,23,0,0,4677,
	4678,7,10,0,0,4678,4679,7,12,0,0,4679,890,1,0,0,0,4680,4681,7,9,0,0,4681,
	4682,7,16,0,0,4682,4683,7,19,0,0,4683,4684,7,13,0,0,4684,4685,7,10,0,0,
	4685,4686,7,12,0,0,4686,892,1,0,0,0,4687,4688,7,17,0,0,4688,4689,7,7,0,
	0,4689,4690,7,14,0,0,4690,4691,7,6,0,0,4691,4692,7,22,0,0,4692,4693,7,12,
	0,0,4693,4694,7,10,0,0,4694,894,1,0,0,0,4695,4696,7,13,0,0,4696,4697,7,
	19,0,0,4697,4698,7,22,0,0,4698,4699,7,16,0,0,4699,4700,7,17,0,0,4700,4701,
	7,7,0,0,4701,4702,7,10,0,0,4702,896,1,0,0,0,4703,4704,7,16,0,0,4704,4705,
	7,13,0,0,4705,4706,7,5,0,0,4706,4707,7,7,0,0,4707,4708,7,9,0,0,4708,4709,
	7,25,0,0,4709,4710,7,19,0,0,4710,4711,7,13,0,0,4711,4712,7,15,0,0,4712,
	898,1,0,0,0,4713,4714,7,17,0,0,4714,4715,7,15,0,0,4715,4716,7,24,0,0,4716,
	4717,7,19,0,0,4717,4718,7,13,0,0,4718,4719,7,16,0,0,4719,900,1,0,0,0,4720,
	4721,7,24,0,0,4721,4722,7,19,0,0,4722,4723,7,6,0,0,4723,4724,7,17,0,0,4724,
	4725,7,14,0,0,4725,4726,7,8,0,0,4726,902,1,0,0,0,4727,4728,7,15,0,0,4728,
	4729,7,10,0,0,4729,4730,7,16,0,0,4730,4731,7,20,0,0,4731,4732,7,19,0,0,
	4732,4733,7,12,0,0,4733,904,1,0,0,0,4734,4735,7,13,0,0,4735,4736,7,10,0,
	0,4736,4737,7,25,0,0,4737,4738,7,10,0,0,4738,4739,7,13,0,0,4739,4740,7,
	10,0,0,4740,4741,7,7,0,0,4741,4742,7,14,0,0,4742,4743,7,17,0,0,4743,4744,
	7,7,0,0,4744,4745,7,23,0,0,4745,906,1,0,0,0,4746,4747,7,7,0,0,4747,4748,
	7,10,0,0,4748,4749,7,29,0,0,4749,908,1,0,0,0,4750,4751,7,19,0,0,4751,4752,
	7,6,0,0,4752,4753,7,12,0,0,4753,910,1,0,0,0,4754,4755,7,27,0,0,4755,4756,
	7,5,0,0,4756,4757,7,6,0,0,4757,4758,7,22,0,0,4758,4759,7,10,0,0,4759,912,
	1,0,0,0,4760,4761,7,9,0,0,4761,4762,7,22,0,0,4762,4763,7,18,0,0,4763,4764,
	7,9,0,0,4764,4765,7,14,0,0,4765,4766,7,13,0,0,4766,4767,7,17,0,0,4767,4768,
	7,24,0,0,4768,4769,7,16,0,0,4769,4770,7,17,0,0,4770,4771,7,19,0,0,4771,
	4772,7,7,0,0,4772,914,1,0,0,0,4773,4774,7,24,0,0,4774,4775,7,22,0,0,4775,
	4776,7,18,0,0,4776,4777,7,6,0,0,4777,4778,7,17,0,0,4778,4779,7,14,0,0,4779,
	4780,7,5,0,0,4780,4781,7,16,0,0,4781,4782,7,17,0,0,4782,4783,7,19,0,0,4783,
	4784,7,7,0,0,4784,916,1,0,0,0,4785,4786,7,19,0,0,4786,4787,7,22,0,0,4787,
	4788,7,16,0,0,4788,918,1,0,0,0,4789,4790,7,10,0,0,4790,4791,7,7,0,0,4791,
	4792,7,12,0,0,4792,920,1,0,0,0,4793,4794,7,13,0,0,4794,4795,7,19,0,0,4795,
	4796,7,22,0,0,4796,4797,7,16,0,0,4797,4798,7,17,0,0,4798,4799,7,7,0,0,4799,
	4800,7,10,0,0,4800,4801,7,9,0,0,4801,922,1,0,0,0,4802,4803,7,9,0,0,4803,
	4804,7,14,0,0,4804,4805,7,20,0,0,4805,4806,7,10,0,0,4806,4807,7,15,0,0,
	4807,4808,7,5,0,0,4808,4809,7,9,0,0,4809,924,1,0,0,0,4810,4811,7,24,0,0,
	4811,4812,7,13,0,0,4812,4813,7,19,0,0,4813,4814,7,14,0,0,4814,4815,7,10,
	0,0,4815,4816,7,12,0,0,4816,4817,7,22,0,0,4817,4818,7,13,0,0,4818,4819,
	7,10,0,0,4819,4820,7,9,0,0,4820,926,1,0,0,0,4821,4822,7,17,0,0,4822,4823,
	7,7,0,0,4823,4824,7,24,0,0,4824,4825,7,22,0,0,4825,4826,7,16,0,0,4826,928,
	1,0,0,0,4827,4828,7,9,0,0,4828,4829,7,22,0,0,4829,4830,7,24,0,0,4830,4831,
	7,24,0,0,4831,4832,7,19,0,0,4832,4833,7,13,0,0,4833,4834,7,16,0,0,4834,
	930,1,0,0,0,4835,4836,7,24,0,0,4836,4837,7,5,0,0,4837,4838,7,13,0,0,4838,
	4839,7,5,0,0,4839,4840,7,6,0,0,4840,4841,7,6,0,0,4841,4842,7,10,0,0,4842,
	4843,7,6,0,0,4843,932,1,0,0,0,4844,4845,7,9,0,0,4845,4846,7,28,0,0,4846,
	4847,7,6,0,0,4847,934,1,0,0,0,4848,4849,7,12,0,0,4849,4850,7,10,0,0,4850,
	4851,7,24,0,0,4851,4852,7,10,0,0,4852,4853,7,7,0,0,4853,4854,7,12,0,0,4854,
	4855,7,9,0,0,4855,936,1,0,0,0,4856,4857,7,19,0,0,4857,4858,7,27,0,0,4858,
	4859,7,10,0,0,4859,4860,7,13,0,0,4860,4861,7,13,0,0,4861,4862,7,17,0,0,
	4862,4863,7,12,0,0,4863,4864,7,17,0,0,4864,4865,7,7,0,0,4865,4866,7,23,
	0,0,4866,938,1,0,0,0,4867,4868,7,14,0,0,4868,4869,7,19,0,0,4869,4870,7,
	7,0,0,4870,4871,7,25,0,0,4871,4872,7,6,0,0,4872,4873,7,17,0,0,4873,4874,
	7,14,0,0,4874,4875,7,16,0,0,4875,940,1,0,0,0,4876,4877,7,9,0,0,4877,4878,
	7,21,0,0,4878,4879,7,17,0,0,4879,4880,7,24,0,0,4880,942,1,0,0,0,4881,4882,
	7,6,0,0,4882,4883,7,19,0,0,4883,4884,7,14,0,0,4884,4885,7,21,0,0,4885,4886,
	7,10,0,0,4886,4887,7,12,0,0,4887,944,1,0,0,0,4888,4889,7,16,0,0,4889,4890,
	7,17,0,0,4890,4891,7,10,0,0,4891,4892,7,9,0,0,4892,946,1,0,0,0,4893,4894,
	7,13,0,0,4894,4895,7,19,0,0,4895,4896,7,6,0,0,4896,4897,7,6,0,0,4897,4898,
	7,22,0,0,4898,4899,7,24,0,0,4899,948,1,0,0,0,4900,4901,7,14,0,0,4901,4902,
	7,22,0,0,4902,4903,7,18,0,0,4903,4904,7,10,0,0,4904,950,1,0,0,0,4905,4906,
	7,23,0,0,4906,4907,7,13,0,0,4907,4908,7,19,0,0,4908,4909,7,22,0,0,4909,
	4910,7,24,0,0,4910,4911,7,17,0,0,4911,4912,7,7,0,0,4912,4913,7,23,0,0,4913,
	952,1,0,0,0,4914,4915,7,9,0,0,4915,4916,7,10,0,0,4916,4917,7,16,0,0,4917,
	4918,7,9,0,0,4918,954,1,0,0,0,4919,4920,7,16,0,0,4920,4921,7,5,0,0,4921,
	4922,7,18,0,0,4922,4923,7,6,0,0,4923,4924,7,10,0,0,4924,4925,7,9,0,0,4925,
	4926,7,5,0,0,4926,4927,7,15,0,0,4927,4928,7,24,0,0,4928,4929,7,6,0,0,4929,
	4930,7,10,0,0,4930,956,1,0,0,0,4931,4932,7,19,0,0,4932,4933,7,13,0,0,4933,
	4934,7,12,0,0,4934,4935,7,17,0,0,4935,4936,7,7,0,0,4936,4937,7,5,0,0,4937,
	4938,7,6,0,0,4938,4939,7,17,0,0,4939,4940,7,16,0,0,4940,4941,7,8,0,0,4941,
	958,1,0,0,0,4942,4943,7,26,0,0,4943,4944,7,15,0,0,4944,4945,7,6,0,0,4945,
	4946,7,16,0,0,4946,4947,7,5,0,0,4947,4948,7,18,0,0,4948,4949,7,6,0,0,4949,
	4950,7,10,0,0,4950,960,1,0,0,0,4951,4952,7,14,0,0,4952,4953,7,19,0,0,4953,
	4954,7,6,0,0,4954,4955,7,22,0,0,4955,4956,7,15,0,0,4956,4957,7,7,0,0,4957,
	4958,7,9,0,0,4958,962,1,0,0,0,4959,4960,7,26,0,0,4960,4961,7,15,0,0,4961,
	4962,7,6,0,0,4962,4963,7,7,0,0,4963,4964,7,5,0,0,4964,4965,7,15,0,0,4965,
	4966,7,10,0,0,4966,4967,7,9,0,0,4967,4968,7,24,0,0,4968,4969,7,5,0,0,4969,
	4970,7,14,0,0,4970,4971,7,10,0,0,4971,4972,7,9,0,0,4972,964,1,0,0,0,4973,
	4974,7,13,0,0,4974,4975,7,19,0,0,4975,4976,7,29,0,0,4976,4977,7,16,0,0,
	4977,4978,7,8,0,0,4978,4979,7,24,0,0,4979,4980,7,10,0,0,4980,966,1,0,0,
	0,4981,4982,7,7,0,0,4982,4983,7,19,0,0,4983,4984,7,13,0,0,4984,4985,7,15,
	0,0,4985,4986,7,5,0,0,4986,4987,7,6,0,0,4987,4988,7,17,0,0,4988,4989,7,
	11,0,0,4989,4990,7,10,0,0,4990,4991,7,12,0,0,4991,968,1,0,0,0,4992,4993,
	7,29,0,0,4993,4994,7,17,0,0,4994,4995,7,16,0,0,4995,4996,7,20,0,0,4996,
	4997,7,17,0,0,4997,4998,7,7,0,0,4998,970,1,0,0,0,4999,5000,7,25,0,0,5000,
	5001,7,17,0,0,5001,5002,7,6,0,0,5002,5003,7,16,0,0,5003,5004,7,10,0,0,5004,
	5005,7,13,0,0,5005,972,1,0,0,0,5006,5007,7,23,0,0,5007,5008,7,13,0,0,5008,
	5009,7,19,0,0,5009,5010,7,22,0,0,5010,5011,7,24,0,0,5011,5012,7,9,0,0,5012,
	974,1,0,0,0,5013,5014,7,19,0,0,5014,5015,7,16,0,0,5015,5016,7,20,0,0,5016,
	5017,7,10,0,0,5017,5018,7,13,0,0,5018,5019,7,9,0,0,5019,976,1,0,0,0,5020,
	5021,7,7,0,0,5021,5022,7,25,0,0,5022,5023,7,14,0,0,5023,978,1,0,0,0,5024,
	5025,7,7,0,0,5025,5026,7,25,0,0,5026,5027,7,12,0,0,5027,980,1,0,0,0,5028,
	5029,7,7,0,0,5029,5030,7,25,0,0,5030,5031,7,21,0,0,5031,5032,7,14,0,0,5032,
	982,1,0,0,0,5033,5034,7,7,0,0,5034,5035,7,25,0,0,5035,5036,7,21,0,0,5036,
	5037,7,12,0,0,5037,984,1,0,0,0,5038,5039,7,22,0,0,5039,5040,7,10,0,0,5040,
	5041,7,9,0,0,5041,5042,7,14,0,0,5042,5043,7,5,0,0,5043,5044,7,24,0,0,5044,
	5045,7,10,0,0,5045,986,1,0,0,0,5046,5047,7,27,0,0,5047,5048,7,17,0,0,5048,
	5049,7,10,0,0,5049,5050,7,29,0,0,5050,5051,7,9,0,0,5051,988,1,0,0,0,5052,
	5053,7,7,0,0,5053,5054,7,19,0,0,5054,5055,7,13,0,0,5055,5056,7,15,0,0,5056,
	5057,7,5,0,0,5057,5058,7,6,0,0,5058,5059,7,17,0,0,5059,5060,7,11,0,0,5060,
	5061,7,10,0,0,5061,990,1,0,0,0,5062,5063,7,12,0,0,5063,5064,7,22,0,0,5064,
	5065,7,15,0,0,5065,5066,7,24,0,0,5066,992,1,0,0,0,5067,5068,7,24,0,0,5068,
	5069,7,13,0,0,5069,5070,7,17,0,0,5070,5071,7,7,0,0,5071,5072,7,16,0,0,5072,
	5073,5,95,0,0,5073,5074,7,9,0,0,5074,5075,7,16,0,0,5075,5076,7,13,0,0,5076,
	5077,7,17,0,0,5077,5078,7,14,0,0,5078,5079,7,16,0,0,5079,5080,5,95,0,0,
	5080,5081,7,24,0,0,5081,5082,7,5,0,0,5082,5083,7,13,0,0,5083,5084,7,5,0,
	0,5084,5085,7,15,0,0,5085,5086,7,9,0,0,5086,994,1,0,0,0,5087,5088,7,27,
	0,0,5088,5089,7,5,0,0,5089,5090,7,13,0,0,5090,5091,7,17,0,0,5091,5092,7,
	5,0,0,5092,5093,7,18,0,0,5093,5094,7,6,0,0,5094,5095,7,10,0,0,5095,5096,
	5,95,0,0,5096,5097,7,14,0,0,5097,5098,7,19,0,0,5098,5099,7,7,0,0,5099,5100,
	7,25,0,0,5100,5101,7,6,0,0,5101,5102,7,17,0,0,5102,5103,7,14,0,0,5103,5104,
	7,16,0,0,5104,996,1,0,0,0,5105,5106,7,10,0,0,5106,5107,7,13,0,0,5107,5108,
	7,13,0,0,5108,5109,7,19,0,0,5109,5110,7,13,0,0,5110,998,1,0,0,0,5111,5112,
	7,22,0,0,5112,5113,7,9,0,0,5113,5114,7,10,0,0,5114,5115,5,95,0,0,5115,5116,
	7,27,0,0,5116,5117,7,5,0,0,5117,5118,7,13,0,0,5118,5119,7,17,0,0,5119,5120,
	7,5,0,0,5120,5121,7,18,0,0,5121,5122,7,6,0,0,5122,5123,7,10,0,0,5123,1000,
	1,0,0,0,5124,5125,7,22,0,0,5125,5126,7,9,0,0,5126,5127,7,10,0,0,5127,5128,
	5,95,0,0,5128,5129,7,14,0,0,5129,5130,7,19,0,0,5130,5131,7,6,0,0,5131,5132,
	7,22,0,0,5132,5133,7,15,0,0,5133,5134,7,7,0,0,5134,1002,1,0,0,0,5135,5136,
	7,5,0,0,5136,5137,7,6,0,0,5137,5138,7,17,0,0,5138,5139,7,5,0,0,5139,5140,
	7,9,0,0,5140,1004,1,0,0,0,5141,5142,7,14,0,0,5142,5143,7,19,0,0,5143,5144,
	7,7,0,0,5144,5145,7,9,0,0,5145,5146,7,16,0,0,5146,5147,7,5,0,0,5147,5148,
	7,7,0,0,5148,5149,7,16,0,0,5149,1006,1,0,0,0,5150,5151,7,24,0,0,5151,5152,
	7,10,0,0,5152,5153,7,13,0,0,5153,5154,7,25,0,0,5154,5155,7,19,0,0,5155,
	5156,7,13,0,0,5156,5157,7,15,0,0,5157,1008,1,0,0,0,5158,5159,7,23,0,0,5159,
	5160,7,10,0,0,5160,5161,7,16,0,0,5161,1010,1,0,0,0,5162,5163,7,12,0,0,5163,
	5164,7,17,0,0,5164,5165,7,5,0,0,5165,5166,7,23,0,0,5166,5167,7,7,0,0,5167,
	5168,7,19,0,0,5168,5169,7,9,0,0,5169,5170,7,16,0,0,5170,5171,7,17,0,0,5171,
	5172,7,14,0,0,5172,5173,7,9,0,0,5173,1012,1,0,0,0,5174,5175,7,9,0,0,5175,
	5176,7,16,0,0,5176,5177,7,5,0,0,5177,5178,7,14,0,0,5178,5179,7,21,0,0,5179,
	5180,7,10,0,0,5180,5181,7,12,0,0,5181,1014,1,0,0,0,5182,5183,7,10,0,0,5183,
	5184,7,6,0,0,5184,5185,7,9,0,0,5185,5186,7,17,0,0,5186,5187,7,25,0,0,5187,
	1016,1,0,0,0,5188,5189,7,29,0,0,5189,5190,7,20,0,0,5190,5191,7,17,0,0,5191,
	5192,7,6,0,0,5192,5193,7,10,0,0,5193,1018,1,0,0,0,5194,5195,7,13,0,0,5195,
	5196,7,10,0,0,5196,5197,7,27,0,0,5197,5198,7,10,0,0,5198,5199,7,13,0,0,
	5199,5200,7,9,0,0,5200,5201,7,10,0,0,5201,1020,1,0,0,0,5202,5203,7,25,0,
	0,5203,5204,7,19,0,0,5204,5205,7,13,0,0,5205,5206,7,10,0,0,5206,5207,7,
	5,0,0,5207,5208,7,14,0,0,5208,5209,7,20,0,0,5209,1022,1,0,0,0,5210,5211,
	7,9,0,0,5211,5212,7,6,0,0,5212,5213,7,17,0,0,5213,5214,7,14,0,0,5214,5215,
	7,10,0,0,5215,1024,1,0,0,0,5216,5217,7,10,0,0,5217,5218,7,26,0,0,5218,5219,
	7,17,0,0,5219,5220,7,16,0,0,5220,1026,1,0,0,0,5221,5222,7,13,0,0,5222,5223,
	7,10,0,0,5223,5224,7,16,0,0,5224,5225,7,22,0,0,5225,5226,7,13,0,0,5226,
	5227,7,7,0,0,5227,1028,1,0,0,0,5228,5229,7,28,0,0,5229,5230,7,22,0,0,5230,
	5231,7,10,0,0,5231,5232,7,13,0,0,5232,5233,7,8,0,0,5233,1030,1,0,0,0,5234,
	5235,7,13,0,0,5235,5236,7,5,0,0,5236,5237,7,17,0,0,5237,5238,7,9,0,0,5238,
	5239,7,10,0,0,5239,1032,1,0,0,0,5240,5241,7,9,0,0,5241,5242,7,28,0,0,5242,
	5243,7,6,0,0,5243,5244,7,9,0,0,5244,5245,7,16,0,0,5245,5246,7,5,0,0,5246,
	5247,7,16,0,0,5247,5248,7,10,0,0,5248,1034,1,0,0,0,5249,5250,7,12,0,0,5250,
	5251,7,10,0,0,5251,5252,7,18,0,0,5252,5253,7,22,0,0,5253,5254,7,23,0,0,
	5254,1036,1,0,0,0,5255,5256,7,6,0,0,5256,5257,7,19,0,0,5257,5258,7,23,0,
	0,5258,1038,1,0,0,0,5259,5260,7,17,0,0,5260,5261,7,7,0,0,5261,5262,7,25,
	0,0,5262,5263,7,19,0,0,5263,1040,1,0,0,0,5264,5265,7,7,0,0,5265,5266,7,
	19,0,0,5266,5267,7,16,0,0,5267,5268,7,17,0,0,5268,5269,7,14,0,0,5269,5270,
	7,10,0,0,5270,1042,1,0,0,0,5271,5272,7,29,0,0,5272,5273,7,5,0,0,5273,5274,
	7,13,0,0,5274,5275,7,7,0,0,5275,5276,7,17,0,0,5276,5277,7,7,0,0,5277,5278,
	7,23,0,0,5278,1044,1,0,0,0,5279,5280,7,10,0,0,5280,5281,7,26,0,0,5281,5282,
	7,14,0,0,5282,5283,7,10,0,0,5283,5284,7,24,0,0,5284,5285,7,16,0,0,5285,
	5286,7,17,0,0,5286,5287,7,19,0,0,5287,5288,7,7,0,0,5288,1046,1,0,0,0,5289,
	5290,7,5,0,0,5290,5291,7,9,0,0,5291,5292,7,9,0,0,5292,5293,7,10,0,0,5293,
	5294,7,13,0,0,5294,5295,7,16,0,0,5295,1048,1,0,0,0,5296,5297,7,6,0,0,5297,
	5298,7,19,0,0,5298,5299,7,19,0,0,5299,5300,7,24,0,0,5300,1050,1,0,0,0,5301,
	5302,7,19,0,0,5302,5303,7,24,0,0,5303,5304,7,10,0,0,5304,5305,7,7,0,0,5305,
	1052,1,0,0,0,5306,5307,7,5,0,0,5307,5308,7,18,0,0,5308,5309,7,9,0,0,5309,
	1054,1,0,0,0,5310,5311,7,14,0,0,5311,5312,7,18,0,0,5312,5313,7,13,0,0,5313,
	5314,7,16,0,0,5314,1056,1,0,0,0,5315,5316,7,14,0,0,5316,5317,7,10,0,0,5317,
	5318,7,17,0,0,5318,5319,7,6,0,0,5319,1058,1,0,0,0,5320,5321,7,14,0,0,5321,
	5322,7,10,0,0,5322,5323,7,17,0,0,5323,5324,7,6,0,0,5324,5325,7,17,0,0,5325,
	5326,7,7,0,0,5326,5327,7,23,0,0,5327,1060,1,0,0,0,5328,5329,7,12,0,0,5329,
	5330,7,10,0,0,5330,5331,7,23,0,0,5331,5332,7,13,0,0,5332,5333,7,10,0,0,
	5333,5334,7,10,0,0,5334,5335,7,9,0,0,5335,1062,1,0,0,0,5336,5337,7,12,0,
	0,5337,5338,7,17,0,0,5338,5339,7,27,0,0,5339,1064,1,0,0,0,5340,5341,7,10,
	0,0,5341,5342,7,26,0,0,5342,5343,7,24,0,0,5343,1066,1,0,0,0,5344,5345,7,
	25,0,0,5345,5346,7,5,0,0,5346,5347,7,14,0,0,5347,5348,7,16,0,0,5348,5349,
	7,19,0,0,5349,5350,7,13,0,0,5350,5351,7,17,0,0,5351,5352,7,5,0,0,5352,5353,
	7,6,0,0,5353,1068,1,0,0,0,5354,5355,7,25,0,0,5355,5356,7,6,0,0,5356,5357,
	7,19,0,0,5357,5358,7,19,0,0,5358,5359,7,13,0,0,5359,1070,1,0,0,0,5360,5361,
	7,23,0,0,5361,5362,7,14,0,0,5362,5363,7,12,0,0,5363,1072,1,0,0,0,5364,5365,
	7,6,0,0,5365,5366,7,14,0,0,5366,5367,7,15,0,0,5367,1074,1,0,0,0,5368,5369,
	7,6,0,0,5369,5370,7,7,0,0,5370,1076,1,0,0,0,5371,5372,7,6,0,0,5372,5373,
	7,19,0,0,5373,5374,7,23,0,0,5374,5375,5,49,0,0,5375,5376,5,48,0,0,5376,
	1078,1,0,0,0,5377,5378,7,15,0,0,5378,5379,7,17,0,0,5379,5380,7,7,0,0,5380,
	5381,5,95,0,0,5381,5382,7,9,0,0,5382,5383,7,14,0,0,5383,5384,7,5,0,0,5384,
	5385,7,6,0,0,5385,5386,7,10,0,0,5386,1080,1,0,0,0,5387,5388,7,15,0,0,5388,
	5389,7,19,0,0,5389,5390,7,12,0,0,5390,1082,1,0,0,0,5391,5392,7,24,0,0,5392,
	5393,7,17,0,0,5393,1084,1,0,0,0,5394,5395,7,24,0,0,5395,5396,7,19,0,0,5396,
	5397,7,29,0,0,5397,5398,7,10,0,0,5398,5399,7,13,0,0,5399,1086,1,0,0,0,5400,
	5401,7,13,0,0,5401,5402,7,5,0,0,5402,5403,7,12,0,0,5403,5404,7,17,0,0,5404,
	5405,7,5,0,0,5405,5406,7,7,0,0,5406,5407,7,9,0,0,5407,1088,1,0,0,0,5408,
	5409,7,13,0,0,5409,5410,7,19,0,0,5410,5411,7,22,0,0,5411,5412,7,7,0,0,5412,
	5413,7,12,0,0,5413,1090,1,0,0,0,5414,5415,7,9,0,0,5415,5416,7,14,0,0,5416,
	5417,7,5,0,0,5417,5418,7,6,0,0,5418,5419,7,10,0,0,5419,1092,1,0,0,0,5420,
	5421,7,9,0,0,5421,5422,7,17,0,0,5422,5423,7,23,0,0,5423,5424,7,7,0,0,5424,
	1094,1,0,0,0,5425,5426,7,9,0,0,5426,5427,7,28,0,0,5427,5428,7,13,0,0,5428,
	5429,7,16,0,0,5429,1096,1,0,0,0,5430,5431,7,16,0,0,5431,5432,7,13,0,0,5432,
	5433,7,17,0,0,5433,5434,7,15,0,0,5434,5435,5,95,0,0,5435,5436,7,9,0,0,5436,
	5437,7,14,0,0,5437,5438,7,5,0,0,5438,5439,7,6,0,0,5439,5440,7,10,0,0,5440,
	1098,1,0,0,0,5441,5442,7,16,0,0,5442,5443,7,13,0,0,5443,5444,7,22,0,0,5444,
	5445,7,7,0,0,5445,5446,7,14,0,0,5446,1100,1,0,0,0,5447,5448,7,29,0,0,5448,
	5449,7,17,0,0,5449,5450,7,12,0,0,5450,5451,7,16,0,0,5451,5452,7,20,0,0,
	5452,5453,5,95,0,0,5453,5454,7,18,0,0,5454,5455,7,22,0,0,5455,5456,7,14,
	0,0,5456,5457,7,21,0,0,5457,5458,7,10,0,0,5458,5459,7,16,0,0,5459,1102,
	1,0,0,0,5460,5461,7,13,0,0,5461,5462,7,5,0,0,5462,5463,7,7,0,0,5463,5464,
	7,12,0,0,5464,5465,7,19,0,0,5465,5466,7,15,0,0,5466,1104,1,0,0,0,5467,5468,
	7,9,0,0,5468,5469,7,10,0,0,5469,5470,7,16,0,0,5470,5471,7,9,0,0,5471,5472,
	7,10,0,0,5472,5473,7,10,0,0,5473,5474,7,12,0,0,5474,1106,1,0,0,0,5475,5476,
	7,5,0,0,5476,5477,7,14,0,0,5477,5478,7,19,0,0,5478,5479,7,9,0,0,5479,1108,
	1,0,0,0,5480,5481,7,5,0,0,5481,5482,7,14,0,0,5482,5483,7,19,0,0,5483,5484,
	7,9,0,0,5484,5485,7,12,0,0,5485,1110,1,0,0,0,5486,5487,7,5,0,0,5487,5488,
	7,9,0,0,5488,5489,7,17,0,0,5489,5490,7,7,0,0,5490,1112,1,0,0,0,5491,5492,
	7,5,0,0,5492,5493,7,9,0,0,5493,5494,7,17,0,0,5494,5495,7,7,0,0,5495,5496,
	7,12,0,0,5496,1114,1,0,0,0,5497,5498,7,5,0,0,5498,5499,7,16,0,0,5499,5500,
	7,5,0,0,5500,5501,7,7,0,0,5501,1116,1,0,0,0,5502,5503,7,5,0,0,5503,5504,
	7,16,0,0,5504,5505,7,5,0,0,5505,5506,7,7,0,0,5506,5507,7,12,0,0,5507,1118,
	1,0,0,0,5508,5509,7,5,0,0,5509,5510,7,16,0,0,5510,5511,7,5,0,0,5511,5512,
	7,7,0,0,5512,5513,5,50,0,0,5513,1120,1,0,0,0,5514,5515,7,5,0,0,5515,5516,
	7,16,0,0,5516,5517,7,5,0,0,5517,5518,7,7,0,0,5518,5519,5,50,0,0,5519,5520,
	7,12,0,0,5520,1122,1,0,0,0,5521,5522,7,14,0,0,5522,5523,7,19,0,0,5523,5524,
	7,9,0,0,5524,1124,1,0,0,0,5525,5526,7,14,0,0,5526,5527,7,19,0,0,5527,5528,
	7,9,0,0,5528,5529,7,12,0,0,5529,1126,1,0,0,0,5530,5531,7,14,0,0,5531,5532,
	7,19,0,0,5532,5533,7,16,0,0,5533,1128,1,0,0,0,5534,5535,7,14,0,0,5535,5536,
	7,19,0,0,5536,5537,7,16,0,0,5537,5538,7,12,0,0,5538,1130,1,0,0,0,5539,5540,
	7,9,0,0,5540,5541,7,17,0,0,5541,5542,7,7,0,0,5542,1132,1,0,0,0,5543,5544,
	7,9,0,0,5544,5545,7,17,0,0,5545,5546,7,7,0,0,5546,5547,7,12,0,0,5547,1134,
	1,0,0,0,5548,5549,7,16,0,0,5549,5550,7,5,0,0,5550,5551,7,7,0,0,5551,1136,
	1,0,0,0,5552,5553,7,16,0,0,5553,5554,7,5,0,0,5554,5555,7,7,0,0,5555,5556,
	7,12,0,0,5556,1138,1,0,0,0,5557,5558,7,9,0,0,5558,5559,7,17,0,0,5559,5560,
	7,7,0,0,5560,5561,7,20,0,0,5561,1140,1,0,0,0,5562,5563,7,14,0,0,5563,5564,
	7,19,0,0,5564,5565,7,9,0,0,5565,5566,7,20,0,0,5566,1142,1,0,0,0,5567,5568,
	7,16,0,0,5568,5569,7,5,0,0,5569,5570,7,7,0,0,5570,5571,7,20,0,0,5571,1144,
	1,0,0,0,5572,5573,7,5,0,0,5573,5574,7,9,0,0,5574,5575,7,17,0,0,5575,5576,
	7,7,0,0,5576,5577,7,20,0,0,5577,1146,1,0,0,0,5578,5579,7,5,0,0,5579,5580,
	7,14,0,0,5580,5581,7,19,0,0,5581,5582,7,9,0,0,5582,5583,7,20,0,0,5583,1148,
	1,0,0,0,5584,5585,7,5,0,0,5585,5586,7,16,0,0,5586,5587,7,5,0,0,5587,5588,
	7,7,0,0,5588,5589,7,20,0,0,5589,1150,1,0,0,0,5590,5591,7,18,0,0,5591,5592,
	7,17,0,0,5592,5593,7,16,0,0,5593,5594,5,95,0,0,5594,5595,7,6,0,0,5595,5596,
	7,10,0,0,5596,5597,7,7,0,0,5597,5598,7,23,0,0,5598,5599,7,16,0,0,5599,5600,
	7,20,0,0,5600,1152,1,0,0,0,5601,5602,7,14,0,0,5602,5603,7,20,0,0,5603,5604,
	7,5,0,0,5604,5605,7,13,0,0,5605,5606,5,95,0,0,5606,5607,7,6,0,0,5607,5608,
	7,10,0,0,5608,5609,7,7,0,0,5609,5610,7,23,0,0,5610,5611,7,16,0,0,5611,5612,
	7,20,0,0,5612,1154,1,0,0,0,5613,5614,7,14,0,0,5614,5615,7,20,0,0,5615,5616,
	7,5,0,0,5616,5617,7,13,0,0,5617,5618,7,5,0,0,5618,5619,7,14,0,0,5619,5620,
	7,16,0,0,5620,5621,7,10,0,0,5621,5622,7,13,0,0,5622,5623,5,95,0,0,5623,
	5624,7,6,0,0,5624,5625,7,10,0,0,5625,5626,7,7,0,0,5626,5627,7,23,0,0,5627,
	5628,7,16,0,0,5628,5629,7,20,0,0,5629,1156,1,0,0,0,5630,5631,7,6,0,0,5631,
	5632,7,19,0,0,5632,5633,7,29,0,0,5633,5634,7,10,0,0,5634,5635,7,13,0,0,
	5635,1158,1,0,0,0,5636,5637,7,19,0,0,5637,5638,7,14,0,0,5638,5639,7,16,
	0,0,5639,5640,7,10,0,0,5640,5641,7,16,0,0,5641,5642,5,95,0,0,5642,5643,
	7,6,0,0,5643,5644,7,10,0,0,5644,5645,7,7,0,0,5645,5646,7,23,0,0,5646,5647,
	7,16,0,0,5647,5648,7,20,0,0,5648,1160,1,0,0,0,5649,5650,7,22,0,0,5650,5651,
	7,24,0,0,5651,5652,7,24,0,0,5652,5653,7,10,0,0,5653,5654,7,13,0,0,5654,
	1162,1,0,0,0,5655,5656,7,5,0,0,5656,5657,7,9,0,0,5657,5658,7,14,0,0,5658,
	5659,7,17,0,0,5659,5660,7,17,0,0,5660,1164,1,0,0,0,5661,5662,7,18,0,0,5662,
	5663,7,16,0,0,5663,5664,7,13,0,0,5664,5665,7,17,0,0,5665,5666,7,15,0,0,
	5666,1166,1,0,0,0,5667,5668,7,14,0,0,5668,5669,7,20,0,0,5669,5670,7,13,
	0,0,5670,1168,1,0,0,0,5671,5672,7,14,0,0,5672,5673,7,19,0,0,5673,5674,7,
	7,0,0,5674,5675,7,14,0,0,5675,5676,7,5,0,0,5676,5677,7,16,0,0,5677,1170,
	1,0,0,0,5678,5679,7,14,0,0,5679,5680,7,19,0,0,5680,5681,7,7,0,0,5681,5682,
	7,14,0,0,5682,5683,7,5,0,0,5683,5684,7,16,0,0,5684,5685,5,95,0,0,5685,5686,
	7,29,0,0,5686,5687,7,9,0,0,5687,1172,1,0,0,0,5688,5689,7,25,0,0,5689,5690,
	7,19,0,0,5690,5691,7,13,0,0,5691,5692,7,15,0,0,5692,5693,7,5,0,0,5693,5694,
	7,16,0,0,5694,1174,1,0,0,0,5695,5696,7,17,0,0,5696,5697,7,7,0,0,5697,5698,
	7,17,0,0,5698,5699,7,16,0,0,5699,5700,7,14,0,0,5700,5701,7,5,0,0,5701,5702,
	7,24,0,0,5702,1176,1,0,0,0,5703,5704,7,6,0,0,5704,5705,7,10,0,0,5705,5706,
	7,7,0,0,5706,5707,7,23,0,0,5707,5708,7,16,0,0,5708,5709,7,20,0,0,5709,1178,
	1,0,0,0,5710,5711,7,6,0,0,5711,5712,7,24,0,0,5712,5713,7,5,0,0,5713,5714,
	7,12,0,0,5714,1180,1,0,0,0,5715,5716,7,6,0,0,5716,5717,7,16,0,0,5717,5718,
	7,13,0,0,5718,5719,7,17,0,0,5719,5720,7,15,0,0,5720,1182,1,0,0,0,5721,5722,
	7,15,0,0,5722,5723,7,12,0,0,5723,5724,5,53,0,0,5724,1184,1,0,0,0,5725,5726,
	7,24,0,0,5726,5727,7,5,0,0,5727,5728,7,13,0,0,5728,5729,7,9,0,0,5729,5730,
	7,10,0,0,5730,5731,5,95,0,0,5731,5732,7,17,0,0,5732,5733,7,12,0,0,5733,
	5734,7,10,0,0,5734,5735,7,7,0,0,5735,5736,7,16,0,0,5736,1186,1,0,0,0,5737,
	5738,7,24,0,0,5738,5739,7,23,0,0,5739,5740,5,95,0,0,5740,5741,7,14,0,0,
	5741,5742,7,6,0,0,5742,5743,7,17,0,0,5743,5744,7,10,0,0,5744,5745,7,7,0,
	0,5745,5746,7,16,0,0,5746,5747,5,95,0,0,5747,5748,7,10,0,0,5748,5749,7,
	7,0,0,5749,5750,7,14,0,0,5750,5751,7,19,0,0,5751,5752,7,12,0,0,5752,5753,
	7,17,0,0,5753,5754,7,7,0,0,5754,5755,7,23,0,0,5755,1188,1,0,0,0,5756,5757,
	7,28,0,0,5757,5758,7,22,0,0,5758,5759,7,19,0,0,5759,5760,7,16,0,0,5760,
	5761,7,10,0,0,5761,5762,5,95,0,0,5762,5763,7,17,0,0,5763,5764,7,12,0,0,
	5764,5765,7,10,0,0,5765,5766,7,7,0,0,5766,5767,7,16,0,0,5767,1190,1,0,0,
	0,5768,5769,7,28,0,0,5769,5770,7,22,0,0,5770,5771,7,19,0,0,5771,5772,7,
	16,0,0,5772,5773,7,10,0,0,5773,5774,5,95,0,0,5774,5775,7,6,0,0,5775,5776,
	7,17,0,0,5776,5777,7,16,0,0,5777,5778,7,10,0,0,5778,5779,7,13,0,0,5779,
	5780,7,5,0,0,5780,5781,7,6,0,0,5781,1192,1,0,0,0,5782,5783,7,28,0,0,5783,
	5784,7,22,0,0,5784,5785,7,19,0,0,5785,5786,7,16,0,0,5786,5787,7,10,0,0,
	5787,5788,5,95,0,0,5788,5789,7,7,0,0,5789,5790,7,22,0,0,5790,5791,7,6,0,
	0,5791,5792,7,6,0,0,5792,5793,7,5,0,0,5793,5794,7,18,0,0,5794,5795,7,6,
	0,0,5795,5796,7,10,0,0,5796,1194,1,0,0,0,5797,5798,7,13,0,0,5798,5799,7,
	10,0,0,5799,5800,7,23,0,0,5800,5801,7,10,0,0,5801,5802,7,26,0,0,5802,5803,
	7,24,0,0,5803,5804,5,95,0,0,5804,5805,7,14,0,0,5805,5806,7,19,0,0,5806,
	5807,7,22,0,0,5807,5808,7,7,0,0,5808,5809,7,16,0,0,5809,1196,1,0,0,0,5810,
	5811,7,13,0,0,5811,5812,7,10,0,0,5812,5813,7,23,0,0,5813,5814,7,10,0,0,
	5814,5815,7,26,0,0,5815,5816,7,24,0,0,5816,5817,5,95,0,0,5817,5818,7,17,
	0,0,5818,5819,7,7,0,0,5819,5820,7,9,0,0,5820,5821,7,16,0,0,5821,5822,7,
	13,0,0,5822,1198,1,0,0,0,5823,5824,7,13,0,0,5824,5825,7,10,0,0,5825,5826,
	7,23,0,0,5826,5827,7,10,0,0,5827,5828,7,26,0,0,5828,5829,7,24,0,0,5829,
	5830,5,95,0,0,5830,5831,7,6,0,0,5831,5832,7,17,0,0,5832,5833,7,21,0,0,5833,
	5834,7,10,0,0,5834,1200,1,0,0,0,5835,5836,7,13,0,0,5836,5837,7,10,0,0,5837,
	5838,7,23,0,0,5838,5839,7,10,0,0,5839,5840,7,26,0,0,5840,5841,7,24,0,0,
	5841,5842,5,95,0,0,5842,5843,7,15,0,0,5843,5844,7,5,0,0,5844,5845,7,16,
	0,0,5845,5846,7,14,0,0,5846,5847,7,20,0,0,5847,1202,1,0,0,0,5848,5849,7,
	13,0,0,5849,5850,7,10,0,0,5850,5851,7,23,0,0,5851,5852,7,10,0,0,5852,5853,
	7,26,0,0,5853,5854,7,24,0,0,5854,5855,5,95,0,0,5855,5856,7,15,0,0,5856,
	5857,7,5,0,0,5857,5858,7,16,0,0,5858,5859,7,14,0,0,5859,5860,7,20,0,0,5860,
	5861,7,10,0,0,5861,5862,7,9,0,0,5862,1204,1,0,0,0,5863,5864,7,13,0,0,5864,
	5865,7,10,0,0,5865,5866,7,23,0,0,5866,5867,7,10,0,0,5867,5868,7,26,0,0,
	5868,5869,7,24,0,0,5869,5870,5,95,0,0,5870,5871,7,13,0,0,5871,5872,7,10,
	0,0,5872,5873,7,24,0,0,5873,5874,7,6,0,0,5874,5875,7,5,0,0,5875,5876,7,
	14,0,0,5876,5877,7,10,0,0,5877,1206,1,0,0,0,5878,5879,7,13,0,0,5879,5880,
	7,10,0,0,5880,5881,7,23,0,0,5881,5882,7,10,0,0,5882,5883,7,26,0,0,5883,
	5884,7,24,0,0,5884,5885,5,95,0,0,5885,5886,7,9,0,0,5886,5887,7,24,0,0,5887,
	5888,7,6,0,0,5888,5889,7,17,0,0,5889,5890,7,16,0,0,5890,5891,5,95,0,0,5891,
	5892,7,16,0,0,5892,5893,7,19,0,0,5893,5894,5,95,0,0,5894,5895,7,5,0,0,5895,
	5896,7,13,0,0,5896,5897,7,13,0,0,5897,5898,7,5,0,0,5898,5899,7,8,0,0,5899,
	1208,1,0,0,0,5900,5901,7,13,0,0,5901,5902,7,10,0,0,5902,5903,7,23,0,0,5903,
	5904,7,10,0,0,5904,5905,7,26,0,0,5905,5906,7,24,0,0,5906,5907,5,95,0,0,
	5907,5908,7,9,0,0,5908,5909,7,24,0,0,5909,5910,7,6,0,0,5910,5911,7,17,0,
	0,5911,5912,7,16,0,0,5912,5913,5,95,0,0,5913,5914,7,16,0,0,5914,5915,7,
	19,0,0,5915,5916,5,95,0,0,5916,5917,7,16,0,0,5917,5918,7,5,0,0,5918,5919,
	7,18,0,0,5919,5920,7,6,0,0,5920,5921,7,10,0,0,5921,1210,1,0,0,0,5922,5923,
	7,13,0,0,5923,5924,7,10,0,0,5924,5925,7,23,0,0,5925,5926,7,10,0,0,5926,
	5927,7,26,0,0,5927,5928,7,24,0,0,5928,5929,5,95,0,0,5929,5930,7,9,0,0,5930,
	5931,7,22,0,0,5931,5932,7,18,0,0,5932,5933,7,9,0,0,5933,5934,7,16,0,0,5934,
	5935,7,13,0,0,5935,1212,1,0,0,0,5936,5937,7,13,0,0,5937,5938,7,10,0,0,5938,
	5939,7,24,0,0,5939,5940,7,10,0,0,5940,5941,7,5,0,0,5941,5942,7,16,0,0,5942,
	1214,1,0,0,0,5943,5944,7,13,0,0,5944,5945,7,24,0,0,5945,5946,7,5,0,0,5946,
	5947,7,12,0,0,5947,1216,1,0,0,0,5948,5949,7,13,0,0,5949,5950,7,16,0,0,5950,
	5951,7,13,0,0,5951,5952,7,17,0,0,5952,5953,7,15,0,0,5953,1218,1,0,0,0,5954,
	5955,7,9,0,0,5955,5956,7,24,0,0,5956,5957,7,6,0,0,5957,5958,7,17,0,0,5958,
	5959,7,16,0,0,5959,5960,5,95,0,0,5960,5961,7,24,0,0,5961,5962,7,5,0,0,5962,
	5963,7,13,0,0,5963,5964,7,16,0,0,5964,1220,1,0,0,0,5965,5966,7,9,0,0,5966,
	5967,7,16,0,0,5967,5968,7,5,0,0,5968,5969,7,13,0,0,5969,5970,7,16,0,0,5970,
	5971,7,9,0,0,5971,5972,5,95,0,0,5972,5973,7,29,0,0,5973,5974,7,17,0,0,5974,
	5975,7,16,0,0,5975,5976,7,20,0,0,5976,1222,1,0,0,0,5977,5978,7,9,0,0,5978,
	5979,7,16,0,0,5979,5980,7,13,0,0,5980,5981,7,17,0,0,5981,5982,7,7,0,0,5982,
	5983,7,23,0,0,5983,5984,5,95,0,0,5984,5985,7,16,0,0,5985,5986,7,19,0,0,
	5986,5987,5,95,0,0,5987,5988,7,5,0,0,5988,5989,7,13,0,0,5989,5990,7,13,
	0,0,5990,5991,7,5,0,0,5991,5992,7,8,0,0,5992,1224,1,0,0,0,5993,5994,7,9,
	0,0,5994,5995,7,16,0,0,5995,5996,7,13,0,0,5996,5997,7,17,0,0,5997,5998,
	7,7,0,0,5998,5999,7,23,0,0,5999,6000,5,95,0,0,6000,6001,7,16,0,0,6001,6002,
	7,19,0,0,6002,6003,5,95,0,0,6003,6004,7,16,0,0,6004,6005,7,5,0,0,6005,6006,
	7,18,0,0,6006,6007,7,6,0,0,6007,6008,7,10,0,0,6008,1226,1,0,0,0,6009,6010,
	7,9,0,0,6010,6011,7,16,0,0,6011,6012,7,13,0,0,6012,6013,7,24,0,0,6013,6014,
	7,19,0,0,6014,6015,7,9,0,0,6015,1228,1,0,0,0,6016,6017,7,9,0,0,6017,6018,
	7,22,0,0,6018,6019,7,18,0,0,6019,6020,7,9,0,0,6020,6021,7,16,0,0,6021,6022,
	7,13,0,0,6022,1230,1,0,0,0,6023,6024,7,16,0,0,6024,6025,7,19,0,0,6025,6026,
	5,95,0,0,6026,6027,7,5,0,0,6027,6028,7,9,0,0,6028,6029,7,14,0,0,6029,6030,
	7,17,0,0,6030,6031,7,17,0,0,6031,1232,1,0,0,0,6032,6033,7,16,0,0,6033,6034,
	7,19,0,0,6034,6035,5,95,0,0,6035,6036,7,20,0,0,6036,6037,7,10,0,0,6037,
	6038,7,26,0,0,6038,1234,1,0,0,0,6039,6040,7,16,0,0,6040,6041,7,13,0,0,6041,
	6042,7,5,0,0,6042,6043,7,7,0,0,6043,6044,7,9,0,0,6044,6045,7,6,0,0,6045,
	6046,7,5,0,0,6046,6047,7,16,0,0,6047,6048,7,10,0,0,6048,1236,1,0,0,0,6049,
	6050,7,22,0,0,6050,6051,7,7,0,0,6051,6052,7,17,0,0,6052,6053,7,9,0,0,6053,
	6054,7,16,0,0,6054,6055,7,13,0,0,6055,1238,1,0,0,0,6056,6057,7,5,0,0,6057,
	6058,7,23,0,0,6058,6059,7,10,0,0,6059,1240,1,0,0,0,6060,6061,7,14,0,0,6061,
	6062,7,6,0,0,6062,6063,7,19,0,0,6063,6064,7,14,0,0,6064,6065,7,21,0,0,6065,
	6066,5,95,0,0,6066,6067,7,16,0,0,6067,6068,7,17,0,0,6068,6069,7,15,0,0,
	6069,6070,7,10,0,0,6070,6071,7,9,0,0,6071,6072,7,16,0,0,6072,6073,7,5,0,
	0,6073,6074,7,15,0,0,6074,6075,7,24,0,0,6075,1242,1,0,0,0,6076,6077,7,12,
	0,0,6077,6078,7,5,0,0,6078,6079,7,16,0,0,6079,6080,7,10,0,0,6080,6081,5,
	95,0,0,6081,6082,7,18,0,0,6082,6083,7,17,0,0,6083,6084,7,7,0,0,6084,1244,
	1,0,0,0,6085,6086,7,12,0,0,6086,6087,7,5,0,0,6087,6088,7,16,0,0,6088,6089,
	7,10,0,0,6089,6090,5,95,0,0,6090,6091,7,24,0,0,6091,6092,7,5,0,0,6092,6093,
	7,13,0,0,6093,6094,7,16,0,0,6094,1246,1,0,0,0,6095,6096,7,12,0,0,6096,6097,
	7,5,0,0,6097,6098,7,16,0,0,6098,6099,7,10,0,0,6099,6100,5,95,0,0,6100,6101,
	7,16,0,0,6101,6102,7,13,0,0,6102,6103,7,22,0,0,6103,6104,7,7,0,0,6104,6105,
	7,14,0,0,6105,1248,1,0,0,0,6106,6107,7,17,0,0,6107,6108,7,9,0,0,6108,6109,
	7,25,0,0,6109,6110,7,17,0,0,6110,6111,7,7,0,0,6111,6112,7,17,0,0,6112,6113,
	7,16,0,0,6113,6114,7,10,0,0,6114,1250,1,0,0,0,6115,6116,7,30,0,0,6116,6117,
	7,22,0,0,6117,6118,7,9,0,0,6118,6119,7,16,0,0,6119,6120,7,17,0,0,6120,6121,
	7,25,0,0,6121,6122,7,8,0,0,6122,6123,5,95,0,0,6123,6124,7,12,0,0,6124,6125,
	7,5,0,0,6125,6126,7,8,0,0,6126,6127,7,9,0,0,6127,1252,1,0,0,0,6128,6129,
	7,30,0,0,6129,6130,7,22,0,0,6130,6131,7,9,0,0,6131,6132,7,16,0,0,6132,6133,
	7,17,0,0,6133,6134,7,25,0,0,6134,6135,7,8,0,0,6135,6136,5,95,0,0,6136,6137,
	7,20,0,0,6137,6138,7,19,0,0,6138,6139,7,22,0,0,6139,6140,7,13,0,0,6140,
	6141,7,9,0,0,6141,1254,1,0,0,0,6142,6143,7,30,0,0,6143,6144,7,22,0,0,6144,
	6145,7,9,0,0,6145,6146,7,16,0,0,6146,6147,7,17,0,0,6147,6148,7,25,0,0,6148,
	6149,7,8,0,0,6149,6150,5,95,0,0,6150,6151,7,17,0,0,6151,6152,7,7,0,0,6152,
	6153,7,16,0,0,6153,6154,7,10,0,0,6154,6155,7,13,0,0,6155,6156,7,27,0,0,
	6156,6157,7,5,0,0,6157,6158,7,6,0,0,6158,1256,1,0,0,0,6159,6160,7,15,0,
	0,6160,6161,7,5,0,0,6161,6162,7,21,0,0,6162,6163,7,10,0,0,6163,6164,5,95,
	0,0,6164,6165,7,12,0,0,6165,6166,7,5,0,0,6166,6167,7,16,0,0,6167,6168,7,
	10,0,0,6168,1258,1,0,0,0,6169,6170,7,15,0,0,6170,6171,7,5,0,0,6171,6172,
	7,21,0,0,6172,6173,7,10,0,0,6173,6174,5,95,0,0,6174,6175,7,17,0,0,6175,
	6176,7,7,0,0,6176,6177,7,16,0,0,6177,6178,7,10,0,0,6178,6179,7,13,0,0,6179,
	6180,7,27,0,0,6180,6181,7,5,0,0,6181,6182,7,6,0,0,6182,1260,1,0,0,0,6183,
	6184,7,15,0,0,6184,6185,7,5,0,0,6185,6186,7,21,0,0,6186,6187,7,10,0,0,6187,
	6188,5,95,0,0,6188,6189,7,16,0,0,6189,6190,7,17,0,0,6190,6191,7,15,0,0,
	6191,6192,7,10,0,0,6192,1262,1,0,0,0,6193,6194,7,15,0,0,6194,6195,7,5,0,
	0,6195,6196,7,21,0,0,6196,6197,7,10,0,0,6197,6198,5,95,0,0,6198,6199,7,
	16,0,0,6199,6200,7,17,0,0,6200,6201,7,15,0,0,6201,6202,7,10,0,0,6202,6203,
	7,9,0,0,6203,6204,7,16,0,0,6204,6205,7,5,0,0,6205,6206,7,15,0,0,6206,6207,
	7,24,0,0,6207,1264,1,0,0,0,6208,6209,7,15,0,0,6209,6210,7,5,0,0,6210,6211,
	7,21,0,0,6211,6212,7,10,0,0,6212,6213,5,95,0,0,6213,6214,7,16,0,0,6214,
	6215,7,17,0,0,6215,6216,7,15,0,0,6216,6217,7,10,0,0,6217,6218,7,9,0,0,6218,
	6219,7,16,0,0,6219,6220,7,5,0,0,6220,6221,7,15,0,0,6221,6222,7,24,0,0,6222,
	6223,7,16,0,0,6223,6224,7,11,0,0,6224,1266,1,0,0,0,6225,6226,7,7,0,0,6226,
	6227,7,19,0,0,6227,6228,7,29,0,0,6228,1268,1,0,0,0,6229,6230,7,9,0,0,6230,
	6231,7,16,0,0,6231,6232,7,5,0,0,6232,6233,7,16,0,0,6233,6234,7,10,0,0,6234,
	6235,7,15,0,0,6235,6236,7,10,0,0,6236,6237,7,7,0,0,6237,6238,7,16,0,0,6238,
	6239,5,95,0,0,6239,6240,7,16,0,0,6240,6241,7,17,0,0,6241,6242,7,15,0,0,
	6242,6243,7,10,0,0,6243,6244,7,9,0,0,6244,6245,7,16,0,0,6245,6246,7,5,0,
	0,6246,6247,7,15,0,0,6247,6248,7,24,0,0,6248,1270,1,0,0,0,6249,6250,7,16,
	0,0,6250,6251,7,17,0,0,6251,6252,7,15,0,0,6252,6253,7,10,0,0,6253,6254,
	7,19,0,0,6254,6255,7,25,0,0,6255,6256,7,12,0,0,6256,6257,7,5,0,0,6257,6258,
	7,8,0,0,6258,1272,1,0,0,0,6259,6260,7,16,0,0,6260,6261,7,13,0,0,6261,6262,
	7,5,0,0,6262,6263,7,7,0,0,6263,6264,7,9,0,0,6264,6265,7,5,0,0,6265,6266,
	7,14,0,0,6266,6267,7,16,0,0,6267,6268,7,17,0,0,6268,6269,7,19,0,0,6269,
	6270,7,7,0,0,6270,6271,5,95,0,0,6271,6272,7,16,0,0,6272,6273,7,17,0,0,6273,
	6274,7,15,0,0,6274,6275,7,10,0,0,6275,6276,7,9,0,0,6276,6277,7,16,0,0,6277,
	6278,7,5,0,0,6278,6279,7,15,0,0,6279,6280,7,24,0,0,6280,1274,1,0,0,0,6281,
	6282,7,16,0,0,6282,6283,7,19,0,0,6283,6284,5,95,0,0,6284,6285,7,16,0,0,
	6285,6286,7,17,0,0,6286,6287,7,15,0,0,6287,6288,7,10,0,0,6288,6289,7,9,
	0,0,6289,6290,7,16,0,0,6290,6291,7,5,0,0,6291,6292,7,15,0,0,6292,6293,7,
	24,0,0,6293,1276,1,0,0,0,6294,6295,7,16,0,0,6295,6296,7,19,0,0,6296,6297,
	5,95,0,0,6297,6298,7,14,0,0,6298,6299,7,20,0,0,6299,6300,7,5,0,0,6300,6301,
	7,13,0,0,6301,1278,1,0,0,0,6302,6303,7,16,0,0,6303,6304,7,19,0,0,6304,6305,
	5,95,0,0,6305,6306,7,12,0,0,6306,6307,7,5,0,0,6307,6308,7,16,0,0,6308,6309,
	7,10,0,0,6309,1280,1,0,0,0,6310,6311,7,16,0,0,6311,6312,7,19,0,0,6312,6313,
	5,95,0,0,6313,6314,7,7,0,0,6314,6315,7,22,0,0,6315,6316,7,15,0,0,6316,6317,
	7,18,0,0,6317,6318,7,10,0,0,6318,6319,7,13,0,0,6319,1282,1,0,0,0,6320,6324,
	3,1285,640,0,6321,6323,3,1287,641,0,6322,6321,1,0,0,0,6323,6326,1,0,0,0,
	6324,6322,1,0,0,0,6324,6325,1,0,0,0,6325,1284,1,0,0,0,6326,6324,1,0,0,0,
	6327,6334,7,31,0,0,6328,6329,7,32,0,0,6329,6334,4,640,6,0,6330,6331,7,33,
	0,0,6331,6332,7,34,0,0,6332,6334,4,640,7,0,6333,6327,1,0,0,0,6333,6328,
	1,0,0,0,6333,6330,1,0,0,0,6334,1286,1,0,0,0,6335,6338,3,1289,642,0,6336,
	6338,5,36,0,0,6337,6335,1,0,0,0,6337,6336,1,0,0,0,6338,1288,1,0,0,0,6339,
	6342,3,1285,640,0,6340,6342,7,0,0,0,6341,6339,1,0,0,0,6341,6340,1,0,0,0,
	6342,1290,1,0,0,0,6343,6344,3,1293,644,0,6344,6345,5,34,0,0,6345,1292,1,
	0,0,0,6346,6352,5,34,0,0,6347,6348,5,34,0,0,6348,6351,5,34,0,0,6349,6351,
	8,35,0,0,6350,6347,1,0,0,0,6350,6349,1,0,0,0,6351,6354,1,0,0,0,6352,6350,
	1,0,0,0,6352,6353,1,0,0,0,6353,1294,1,0,0,0,6354,6352,1,0,0,0,6355,6356,
	3,1297,646,0,6356,6357,5,34,0,0,6357,1296,1,0,0,0,6358,6364,5,34,0,0,6359,
	6360,5,34,0,0,6360,6363,5,34,0,0,6361,6363,8,36,0,0,6362,6359,1,0,0,0,6362,
	6361,1,0,0,0,6363,6366,1,0,0,0,6364,6362,1,0,0,0,6364,6365,1,0,0,0,6365,
	1298,1,0,0,0,6366,6364,1,0,0,0,6367,6368,7,22,0,0,6368,6369,5,38,0,0,6369,
	6370,3,1291,643,0,6370,1300,1,0,0,0,6371,6372,7,22,0,0,6372,6373,5,38,0,
	0,6373,6374,3,1293,644,0,6374,1302,1,0,0,0,6375,6376,7,22,0,0,6376,6377,
	5,38,0,0,6377,6378,3,1295,645,0,6378,1304,1,0,0,0,6379,6380,7,22,0,0,6380,
	6381,5,38,0,0,6381,6382,3,1297,646,0,6382,1306,1,0,0,0,6383,6384,3,1309,
	652,0,6384,6385,5,39,0,0,6385,1308,1,0,0,0,6386,6392,5,39,0,0,6387,6388,
	5,39,0,0,6388,6391,5,39,0,0,6389,6391,8,37,0,0,6390,6387,1,0,0,0,6390,6389,
	1,0,0,0,6391,6394,1,0,0,0,6392,6390,1,0,0,0,6392,6393,1,0,0,0,6393,1310,
	1,0,0,0,6394,6392,1,0,0,0,6395,6396,7,10,0,0,6396,6397,5,39,0,0,6397,6398,
	1,0,0,0,6398,6399,6,653,2,0,6399,6400,6,653,3,0,6400,1312,1,0,0,0,6401,
	6402,3,1315,655,0,6402,6403,5,39,0,0,6403,1314,1,0,0,0,6404,6405,7,22,0,
	0,6405,6406,5,38,0,0,6406,6407,3,1309,652,0,6407,1316,1,0,0,0,6408,6410,
	5,36,0,0,6409,6411,3,1319,657,0,6410,6409,1,0,0,0,6410,6411,1,0,0,0,6411,
	6412,1,0,0,0,6412,6413,5,36,0,0,6413,6414,6,656,4,0,6414,6415,1,0,0,0,6415,
	6416,6,656,5,0,6416,1318,1,0,0,0,6417,6421,3,1285,640,0,6418,6420,3,1289,
	642,0,6419,6418,1,0,0,0,6420,6423,1,0,0,0,6421,6419,1,0,0,0,6421,6422,1,
	0,0,0,6422,1320,1,0,0,0,6423,6421,1,0,0,0,6424,6425,3,1323,659,0,6425,6426,
	5,39,0,0,6426,1322,1,0,0,0,6427,6428,7,18,0,0,6428,6432,5,39,0,0,6429,6431,
	7,38,0,0,6430,6429,1,0,0,0,6431,6434,1,0,0,0,6432,6430,1,0,0,0,6432,6433,
	1,0,0,0,6433,1324,1,0,0,0,6434,6432,1,0,0,0,6435,6436,3,1327,661,0,6436,
	6437,5,39,0,0,6437,1326,1,0,0,0,6438,6439,7,18,0,0,6439,6440,3,1309,652,
	0,6440,1328,1,0,0,0,6441,6442,3,1331,663,0,6442,6443,5,39,0,0,6443,1330,
	1,0,0,0,6444,6445,7,26,0,0,6445,6449,5,39,0,0,6446,6448,7,39,0,0,6447,6446,
	1,0,0,0,6448,6451,1,0,0,0,6449,6447,1,0,0,0,6449,6450,1,0,0,0,6450,1332,
	1,0,0,0,6451,6449,1,0,0,0,6452,6453,3,1335,665,0,6453,6454,5,39,0,0,6454,
	1334,1,0,0,0,6455,6456,7,26,0,0,6456,6457,3,1309,652,0,6457,1336,1,0,0,
	0,6458,6459,3,1343,669,0,6459,1338,1,0,0,0,6460,6461,3,1343,669,0,6461,
	6462,5,46,0,0,6462,6463,5,46,0,0,6463,6464,1,0,0,0,6464,6465,6,667,6,0,
	6465,1340,1,0,0,0,6466,6467,3,1343,669,0,6467,6469,5,46,0,0,6468,6470,3,
	1343,669,0,6469,6468,1,0,0,0,6469,6470,1,0,0,0,6470,6476,1,0,0,0,6471,6473,
	7,10,0,0,6472,6474,7,1,0,0,6473,6472,1,0,0,0,6473,6474,1,0,0,0,6474,6475,
	1,0,0,0,6475,6477,3,1343,669,0,6476,6471,1,0,0,0,6476,6477,1,0,0,0,6477,
	6495,1,0,0,0,6478,6479,5,46,0,0,6479,6485,3,1343,669,0,6480,6482,7,10,0,
	0,6481,6483,7,1,0,0,6482,6481,1,0,0,0,6482,6483,1,0,0,0,6483,6484,1,0,0,
	0,6484,6486,3,1343,669,0,6485,6480,1,0,0,0,6485,6486,1,0,0,0,6486,6495,
	1,0,0,0,6487,6488,3,1343,669,0,6488,6490,7,10,0,0,6489,6491,7,1,0,0,6490,
	6489,1,0,0,0,6490,6491,1,0,0,0,6491,6492,1,0,0,0,6492,6493,3,1343,669,0,
	6493,6495,1,0,0,0,6494,6466,1,0,0,0,6494,6478,1,0,0,0,6494,6487,1,0,0,0,
	6495,1342,1,0,0,0,6496,6498,7,0,0,0,6497,6496,1,0,0,0,6498,6499,1,0,0,0,
	6499,6497,1,0,0,0,6499,6500,1,0,0,0,6500,1344,1,0,0,0,6501,6502,5,58,0,
	0,6502,6506,7,40,0,0,6503,6505,7,41,0,0,6504,6503,1,0,0,0,6505,6508,1,0,
	0,0,6506,6504,1,0,0,0,6506,6507,1,0,0,0,6507,1346,1,0,0,0,6508,6506,1,0,
	0,0,6509,6510,5,58,0,0,6510,6511,5,34,0,0,6511,6519,1,0,0,0,6512,6513,5,
	92,0,0,6513,6518,9,0,0,0,6514,6515,5,34,0,0,6515,6518,5,34,0,0,6516,6518,
	8,42,0,0,6517,6512,1,0,0,0,6517,6514,1,0,0,0,6517,6516,1,0,0,0,6518,6521,
	1,0,0,0,6519,6517,1,0,0,0,6519,6520,1,0,0,0,6520,6522,1,0,0,0,6521,6519,
	1,0,0,0,6522,6523,5,34,0,0,6523,1348,1,0,0,0,6524,6526,7,43,0,0,6525,6524,
	1,0,0,0,6526,6527,1,0,0,0,6527,6525,1,0,0,0,6527,6528,1,0,0,0,6528,6529,
	1,0,0,0,6529,6530,6,672,7,0,6530,1350,1,0,0,0,6531,6533,5,13,0,0,6532,6534,
	5,10,0,0,6533,6532,1,0,0,0,6533,6534,1,0,0,0,6534,6537,1,0,0,0,6535,6537,
	5,10,0,0,6536,6531,1,0,0,0,6536,6535,1,0,0,0,6537,6538,1,0,0,0,6538,6539,
	6,673,7,0,6539,1352,1,0,0,0,6540,6541,5,45,0,0,6541,6542,5,45,0,0,6542,
	6546,1,0,0,0,6543,6545,8,44,0,0,6544,6543,1,0,0,0,6545,6548,1,0,0,0,6546,
	6544,1,0,0,0,6546,6547,1,0,0,0,6547,6549,1,0,0,0,6548,6546,1,0,0,0,6549,
	6550,6,674,7,0,6550,1354,1,0,0,0,6551,6552,5,47,0,0,6552,6553,5,42,0,0,
	6553,6576,1,0,0,0,6554,6556,5,47,0,0,6555,6554,1,0,0,0,6556,6559,1,0,0,
	0,6557,6555,1,0,0,0,6557,6558,1,0,0,0,6558,6560,1,0,0,0,6559,6557,1,0,0,
	0,6560,6575,3,1355,675,0,6561,6575,8,45,0,0,6562,6564,5,47,0,0,6563,6562,
	1,0,0,0,6564,6565,1,0,0,0,6565,6563,1,0,0,0,6565,6566,1,0,0,0,6566,6567,
	1,0,0,0,6567,6575,8,45,0,0,6568,6570,5,42,0,0,6569,6568,1,0,0,0,6570,6571,
	1,0,0,0,6571,6569,1,0,0,0,6571,6572,1,0,0,0,6572,6573,1,0,0,0,6573,6575,
	8,45,0,0,6574,6557,1,0,0,0,6574,6561,1,0,0,0,6574,6563,1,0,0,0,6574,6569,
	1,0,0,0,6575,6578,1,0,0,0,6576,6574,1,0,0,0,6576,6577,1,0,0,0,6577,6582,
	1,0,0,0,6578,6576,1,0,0,0,6579,6581,5,42,0,0,6580,6579,1,0,0,0,6581,6584,
	1,0,0,0,6582,6580,1,0,0,0,6582,6583,1,0,0,0,6583,6585,1,0,0,0,6584,6582,
	1,0,0,0,6585,6586,5,42,0,0,6586,6587,5,47,0,0,6587,6588,1,0,0,0,6588,6589,
	6,675,7,0,6589,1356,1,0,0,0,6590,6591,5,47,0,0,6591,6592,5,42,0,0,6592,
	6617,1,0,0,0,6593,6595,5,47,0,0,6594,6593,1,0,0,0,6595,6598,1,0,0,0,6596,
	6594,1,0,0,0,6596,6597,1,0,0,0,6597,6599,1,0,0,0,6598,6596,1,0,0,0,6599,
	6616,3,1355,675,0,6600,6616,8,45,0,0,6601,6603,5,47,0,0,6602,6601,1,0,0,
	0,6603,6604,1,0,0,0,6604,6602,1,0,0,0,6604,6605,1,0,0,0,6605,6606,1,0,0,
	0,6606,6614,8,45,0,0,6607,6609,5,42,0,0,6608,6607,1,0,0,0,6609,6610,1,0,
	0,0,6610,6608,1,0,0,0,6610,6611,1,0,0,0,6611,6612,1,0,0,0,6612,6614,8,45,
	0,0,6613,6602,1,0,0,0,6613,6608,1,0,0,0,6614,6616,1,0,0,0,6615,6596,1,0,
	0,0,6615,6600,1,0,0,0,6615,6613,1,0,0,0,6616,6619,1,0,0,0,6617,6615,1,0,
	0,0,6617,6618,1,0,0,0,6618,6637,1,0,0,0,6619,6617,1,0,0,0,6620,6622,5,47,
	0,0,6621,6620,1,0,0,0,6622,6623,1,0,0,0,6623,6621,1,0,0,0,6623,6624,1,0,
	0,0,6624,6638,1,0,0,0,6625,6627,5,42,0,0,6626,6625,1,0,0,0,6627,6628,1,
	0,0,0,6628,6626,1,0,0,0,6628,6629,1,0,0,0,6629,6638,1,0,0,0,6630,6632,5,
	47,0,0,6631,6630,1,0,0,0,6632,6635,1,0,0,0,6633,6631,1,0,0,0,6633,6634,
	1,0,0,0,6634,6636,1,0,0,0,6635,6633,1,0,0,0,6636,6638,3,1357,676,0,6637,
	6621,1,0,0,0,6637,6626,1,0,0,0,6637,6633,1,0,0,0,6637,6638,1,0,0,0,6638,
	6639,1,0,0,0,6639,6640,6,676,8,0,6640,1358,1,0,0,0,6641,6653,5,92,0,0,6642,
	6652,8,46,0,0,6643,6647,5,34,0,0,6644,6646,8,47,0,0,6645,6644,1,0,0,0,6646,
	6649,1,0,0,0,6647,6645,1,0,0,0,6647,6648,1,0,0,0,6648,6650,1,0,0,0,6649,
	6647,1,0,0,0,6650,6652,5,34,0,0,6651,6642,1,0,0,0,6651,6643,1,0,0,0,6652,
	6655,1,0,0,0,6653,6651,1,0,0,0,6653,6654,1,0,0,0,6654,6663,1,0,0,0,6655,
	6653,1,0,0,0,6656,6660,5,34,0,0,6657,6659,8,47,0,0,6658,6657,1,0,0,0,6659,
	6662,1,0,0,0,6660,6658,1,0,0,0,6660,6661,1,0,0,0,6661,6664,1,0,0,0,6662,
	6660,1,0,0,0,6663,6656,1,0,0,0,6663,6664,1,0,0,0,6664,1360,1,0,0,0,6665,
	6666,5,92,0,0,6666,6667,5,92,0,0,6667,1362,1,0,0,0,6668,6669,9,0,0,0,6669,
	1364,1,0,0,0,6670,6671,3,1369,682,0,6671,6672,5,39,0,0,6672,6673,1,0,0,
	0,6673,6674,6,680,9,0,6674,1366,1,0,0,0,6675,6677,3,1369,682,0,6676,6678,
	5,92,0,0,6677,6676,1,0,0,0,6677,6678,1,0,0,0,6678,6679,1,0,0,0,6679,6680,
	5,0,0,1,6680,1368,1,0,0,0,6681,6682,5,39,0,0,6682,6705,5,39,0,0,6683,6701,
	5,92,0,0,6684,6685,5,120,0,0,6685,6702,7,39,0,0,6686,6687,5,117,0,0,6687,
	6688,7,39,0,0,6688,6689,7,39,0,0,6689,6690,7,39,0,0,6690,6702,7,39,0,0,
	6691,6692,5,85,0,0,6692,6693,7,39,0,0,6693,6694,7,39,0,0,6694,6695,7,39,
	0,0,6695,6696,7,39,0,0,6696,6697,7,39,0,0,6697,6698,7,39,0,0,6698,6699,
	7,39,0,0,6699,6702,7,39,0,0,6700,6702,8,48,0,0,6701,6684,1,0,0,0,6701,6686,
	1,0,0,0,6701,6691,1,0,0,0,6701,6700,1,0,0,0,6702,6705,1,0,0,0,6703,6705,
	8,49,0,0,6704,6681,1,0,0,0,6704,6683,1,0,0,0,6704,6703,1,0,0,0,6705,6708,
	1,0,0,0,6706,6704,1,0,0,0,6706,6707,1,0,0,0,6707,1370,1,0,0,0,6708,6706,
	1,0,0,0,6709,6710,3,1375,685,0,6710,6711,5,39,0,0,6711,6712,1,0,0,0,6712,
	6713,6,683,9,0,6713,1372,1,0,0,0,6714,6716,3,1375,685,0,6715,6717,5,92,
	0,0,6716,6715,1,0,0,0,6716,6717,1,0,0,0,6717,6718,1,0,0,0,6718,6719,5,0,
	0,1,6719,1374,1,0,0,0,6720,6721,5,39,0,0,6721,6726,5,39,0,0,6722,6723,5,
	92,0,0,6723,6726,9,0,0,0,6724,6726,8,49,0,0,6725,6720,1,0,0,0,6725,6722,
	1,0,0,0,6725,6724,1,0,0,0,6726,6729,1,0,0,0,6727,6725,1,0,0,0,6727,6728,
	1,0,0,0,6728,1376,1,0,0,0,6729,6727,1,0,0,0,6730,6731,3,1349,672,0,6731,
	6732,1,0,0,0,6732,6733,6,686,10,0,6733,6734,6,686,7,0,6734,1378,1,0,0,0,
	6735,6736,3,1351,673,0,6736,6737,1,0,0,0,6737,6738,6,687,11,0,6738,6739,
	6,687,7,0,6739,6740,6,687,12,0,6740,1380,1,0,0,0,6741,6742,6,688,13,0,6742,
	6743,1,0,0,0,6743,6744,6,688,14,0,6744,6745,6,688,15,0,6745,1382,1,0,0,
	0,6746,6747,3,1349,672,0,6747,6748,1,0,0,0,6748,6749,6,689,10,0,6749,6750,
	6,689,7,0,6750,1384,1,0,0,0,6751,6752,3,1351,673,0,6752,6753,1,0,0,0,6753,
	6754,6,690,11,0,6754,6755,6,690,7,0,6755,1386,1,0,0,0,6756,6757,5,39,0,
	0,6757,6758,1,0,0,0,6758,6759,6,691,2,0,6759,6760,6,691,16,0,6760,1388,
	1,0,0,0,6761,6762,6,692,17,0,6762,6763,1,0,0,0,6763,6764,6,692,14,0,6764,
	6765,6,692,15,0,6765,1390,1,0,0,0,6766,6768,8,50,0,0,6767,6766,1,0,0,0,
	6768,6769,1,0,0,0,6769,6767,1,0,0,0,6769,6770,1,0,0,0,6770,6779,1,0,0,0,
	6771,6775,5,36,0,0,6772,6774,8,50,0,0,6773,6772,1,0,0,0,6774,6777,1,0,0,
	0,6775,6773,1,0,0,0,6775,6776,1,0,0,0,6776,6779,1,0,0,0,6777,6775,1,0,0,
	0,6778,6767,1,0,0,0,6778,6771,1,0,0,0,6779,1392,1,0,0,0,6780,6782,5,36,
	0,0,6781,6783,3,1319,657,0,6782,6781,1,0,0,0,6782,6783,1,0,0,0,6783,6784,
	1,0,0,0,6784,6785,5,36,0,0,6785,6786,1,0,0,0,6786,6787,4,694,8,0,6787,6788,
	6,694,18,0,6788,6789,1,0,0,0,6789,6790,6,694,15,0,6790,1394,1,0,0,0,78,
	0,1,2,3,4,1462,1468,1470,1475,1479,1481,1484,1493,1495,1500,1505,1507,6324,
	6333,6337,6341,6350,6352,6362,6364,6390,6392,6410,6421,6432,6449,6469,6473,
	6476,6482,6485,6490,6494,6499,6506,6517,6519,6527,6533,6536,6546,6557,6565,
	6571,6574,6576,6582,6596,6604,6610,6613,6615,6617,6623,6628,6633,6637,6647,
	6651,6653,6660,6663,6677,6701,6704,6706,6716,6725,6727,6769,6775,6778,6782,
	19,1,28,0,7,29,0,3,0,0,5,1,0,1,656,1,5,4,0,1,667,2,0,1,0,1,676,3,2,2,0,
	7,663,0,7,664,0,2,3,0,1,688,4,6,0,0,4,0,0,2,1,0,1,692,5,1,694,6];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!PostgreSQLLexer.__ATN) {
			PostgreSQLLexer.__ATN = new ATNDeserializer().deserialize(PostgreSQLLexer._serializedATN);
		}

		return PostgreSQLLexer.__ATN;
	}


	static DecisionsToDFA = PostgreSQLLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}