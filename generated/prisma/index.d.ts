
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model Flat
 * 
 */
export type Flat = $Result.DefaultSelection<Prisma.$FlatPayload>
/**
 * Model Booking
 * 
 */
export type Booking = $Result.DefaultSelection<Prisma.$BookingPayload>
/**
 * Model Enquiry
 * 
 */
export type Enquiry = $Result.DefaultSelection<Prisma.$EnquiryPayload>
/**
 * Model Subscriber
 * 
 */
export type Subscriber = $Result.DefaultSelection<Prisma.$SubscriberPayload>
/**
 * Model Testimonial
 * 
 */
export type Testimonial = $Result.DefaultSelection<Prisma.$TestimonialPayload>
/**
 * Model BookingOrder
 * ── Advance-payment booking orders (Razorpay / demo gateway) ───────
 */
export type BookingOrder = $Result.DefaultSelection<Prisma.$BookingOrderPayload>
/**
 * Model Review
 * ── Visitor-submitted reviews (moderated before showing on site) ───
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>
/**
 * Model Album
 * ── Visitor photo albums: flat transformations, grouped project → flat ──
 */
export type Album = $Result.DefaultSelection<Prisma.$AlbumPayload>
/**
 * Model AlbumPhoto
 * 
 */
export type AlbumPhoto = $Result.DefaultSelection<Prisma.$AlbumPhotoPayload>
/**
 * Model GalleryItem
 * ── Admin-managed gallery items (replaces hardcoded list over time) ──
 */
export type GalleryItem = $Result.DefaultSelection<Prisma.$GalleryItemPayload>
/**
 * Model Setting
 * ── Key/value site settings (Razorpay keys, advance amount, admin password) ──
 */
export type Setting = $Result.DefaultSelection<Prisma.$SettingPayload>
/**
 * Model Upload
 * ── Uploaded images, stored as base64 so they work on serverless (Vercel) ──
 */
export type Upload = $Result.DefaultSelection<Prisma.$UploadPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Projects
 * const projects = await prisma.project.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Projects
   * const projects = await prisma.project.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.flat`: Exposes CRUD operations for the **Flat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Flats
    * const flats = await prisma.flat.findMany()
    * ```
    */
  get flat(): Prisma.FlatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.booking`: Exposes CRUD operations for the **Booking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.booking.findMany()
    * ```
    */
  get booking(): Prisma.BookingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.enquiry`: Exposes CRUD operations for the **Enquiry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Enquiries
    * const enquiries = await prisma.enquiry.findMany()
    * ```
    */
  get enquiry(): Prisma.EnquiryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subscriber`: Exposes CRUD operations for the **Subscriber** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subscribers
    * const subscribers = await prisma.subscriber.findMany()
    * ```
    */
  get subscriber(): Prisma.SubscriberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.testimonial`: Exposes CRUD operations for the **Testimonial** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Testimonials
    * const testimonials = await prisma.testimonial.findMany()
    * ```
    */
  get testimonial(): Prisma.TestimonialDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bookingOrder`: Exposes CRUD operations for the **BookingOrder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BookingOrders
    * const bookingOrders = await prisma.bookingOrder.findMany()
    * ```
    */
  get bookingOrder(): Prisma.BookingOrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.album`: Exposes CRUD operations for the **Album** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Albums
    * const albums = await prisma.album.findMany()
    * ```
    */
  get album(): Prisma.AlbumDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.albumPhoto`: Exposes CRUD operations for the **AlbumPhoto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AlbumPhotos
    * const albumPhotos = await prisma.albumPhoto.findMany()
    * ```
    */
  get albumPhoto(): Prisma.AlbumPhotoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.galleryItem`: Exposes CRUD operations for the **GalleryItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GalleryItems
    * const galleryItems = await prisma.galleryItem.findMany()
    * ```
    */
  get galleryItem(): Prisma.GalleryItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.setting`: Exposes CRUD operations for the **Setting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Settings
    * const settings = await prisma.setting.findMany()
    * ```
    */
  get setting(): Prisma.SettingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.upload`: Exposes CRUD operations for the **Upload** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Uploads
    * const uploads = await prisma.upload.findMany()
    * ```
    */
  get upload(): Prisma.UploadDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Project: 'Project',
    Flat: 'Flat',
    Booking: 'Booking',
    Enquiry: 'Enquiry',
    Subscriber: 'Subscriber',
    Testimonial: 'Testimonial',
    BookingOrder: 'BookingOrder',
    Review: 'Review',
    Album: 'Album',
    AlbumPhoto: 'AlbumPhoto',
    GalleryItem: 'GalleryItem',
    Setting: 'Setting',
    Upload: 'Upload'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "project" | "flat" | "booking" | "enquiry" | "subscriber" | "testimonial" | "bookingOrder" | "review" | "album" | "albumPhoto" | "galleryItem" | "setting" | "upload"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      Flat: {
        payload: Prisma.$FlatPayload<ExtArgs>
        fields: Prisma.FlatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FlatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FlatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlatPayload>
          }
          findFirst: {
            args: Prisma.FlatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FlatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlatPayload>
          }
          findMany: {
            args: Prisma.FlatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlatPayload>[]
          }
          create: {
            args: Prisma.FlatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlatPayload>
          }
          createMany: {
            args: Prisma.FlatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FlatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlatPayload>[]
          }
          delete: {
            args: Prisma.FlatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlatPayload>
          }
          update: {
            args: Prisma.FlatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlatPayload>
          }
          deleteMany: {
            args: Prisma.FlatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FlatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FlatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlatPayload>[]
          }
          upsert: {
            args: Prisma.FlatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlatPayload>
          }
          aggregate: {
            args: Prisma.FlatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFlat>
          }
          groupBy: {
            args: Prisma.FlatGroupByArgs<ExtArgs>
            result: $Utils.Optional<FlatGroupByOutputType>[]
          }
          count: {
            args: Prisma.FlatCountArgs<ExtArgs>
            result: $Utils.Optional<FlatCountAggregateOutputType> | number
          }
        }
      }
      Booking: {
        payload: Prisma.$BookingPayload<ExtArgs>
        fields: Prisma.BookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findFirst: {
            args: Prisma.BookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findMany: {
            args: Prisma.BookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          create: {
            args: Prisma.BookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          createMany: {
            args: Prisma.BookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          delete: {
            args: Prisma.BookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          update: {
            args: Prisma.BookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          deleteMany: {
            args: Prisma.BookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          upsert: {
            args: Prisma.BookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          aggregate: {
            args: Prisma.BookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooking>
          }
          groupBy: {
            args: Prisma.BookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingCountArgs<ExtArgs>
            result: $Utils.Optional<BookingCountAggregateOutputType> | number
          }
        }
      }
      Enquiry: {
        payload: Prisma.$EnquiryPayload<ExtArgs>
        fields: Prisma.EnquiryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EnquiryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnquiryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EnquiryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnquiryPayload>
          }
          findFirst: {
            args: Prisma.EnquiryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnquiryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EnquiryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnquiryPayload>
          }
          findMany: {
            args: Prisma.EnquiryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnquiryPayload>[]
          }
          create: {
            args: Prisma.EnquiryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnquiryPayload>
          }
          createMany: {
            args: Prisma.EnquiryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EnquiryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnquiryPayload>[]
          }
          delete: {
            args: Prisma.EnquiryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnquiryPayload>
          }
          update: {
            args: Prisma.EnquiryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnquiryPayload>
          }
          deleteMany: {
            args: Prisma.EnquiryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EnquiryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EnquiryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnquiryPayload>[]
          }
          upsert: {
            args: Prisma.EnquiryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnquiryPayload>
          }
          aggregate: {
            args: Prisma.EnquiryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEnquiry>
          }
          groupBy: {
            args: Prisma.EnquiryGroupByArgs<ExtArgs>
            result: $Utils.Optional<EnquiryGroupByOutputType>[]
          }
          count: {
            args: Prisma.EnquiryCountArgs<ExtArgs>
            result: $Utils.Optional<EnquiryCountAggregateOutputType> | number
          }
        }
      }
      Subscriber: {
        payload: Prisma.$SubscriberPayload<ExtArgs>
        fields: Prisma.SubscriberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriberPayload>
          }
          findFirst: {
            args: Prisma.SubscriberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriberPayload>
          }
          findMany: {
            args: Prisma.SubscriberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriberPayload>[]
          }
          create: {
            args: Prisma.SubscriberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriberPayload>
          }
          createMany: {
            args: Prisma.SubscriberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubscriberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriberPayload>[]
          }
          delete: {
            args: Prisma.SubscriberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriberPayload>
          }
          update: {
            args: Prisma.SubscriberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriberPayload>
          }
          deleteMany: {
            args: Prisma.SubscriberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubscriberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriberPayload>[]
          }
          upsert: {
            args: Prisma.SubscriberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriberPayload>
          }
          aggregate: {
            args: Prisma.SubscriberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscriber>
          }
          groupBy: {
            args: Prisma.SubscriberGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriberGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscriberCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriberCountAggregateOutputType> | number
          }
        }
      }
      Testimonial: {
        payload: Prisma.$TestimonialPayload<ExtArgs>
        fields: Prisma.TestimonialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TestimonialFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TestimonialFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialPayload>
          }
          findFirst: {
            args: Prisma.TestimonialFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TestimonialFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialPayload>
          }
          findMany: {
            args: Prisma.TestimonialFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialPayload>[]
          }
          create: {
            args: Prisma.TestimonialCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialPayload>
          }
          createMany: {
            args: Prisma.TestimonialCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TestimonialCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialPayload>[]
          }
          delete: {
            args: Prisma.TestimonialDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialPayload>
          }
          update: {
            args: Prisma.TestimonialUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialPayload>
          }
          deleteMany: {
            args: Prisma.TestimonialDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TestimonialUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TestimonialUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialPayload>[]
          }
          upsert: {
            args: Prisma.TestimonialUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialPayload>
          }
          aggregate: {
            args: Prisma.TestimonialAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTestimonial>
          }
          groupBy: {
            args: Prisma.TestimonialGroupByArgs<ExtArgs>
            result: $Utils.Optional<TestimonialGroupByOutputType>[]
          }
          count: {
            args: Prisma.TestimonialCountArgs<ExtArgs>
            result: $Utils.Optional<TestimonialCountAggregateOutputType> | number
          }
        }
      }
      BookingOrder: {
        payload: Prisma.$BookingOrderPayload<ExtArgs>
        fields: Prisma.BookingOrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingOrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingOrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingOrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingOrderPayload>
          }
          findFirst: {
            args: Prisma.BookingOrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingOrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingOrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingOrderPayload>
          }
          findMany: {
            args: Prisma.BookingOrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingOrderPayload>[]
          }
          create: {
            args: Prisma.BookingOrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingOrderPayload>
          }
          createMany: {
            args: Prisma.BookingOrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookingOrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingOrderPayload>[]
          }
          delete: {
            args: Prisma.BookingOrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingOrderPayload>
          }
          update: {
            args: Prisma.BookingOrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingOrderPayload>
          }
          deleteMany: {
            args: Prisma.BookingOrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingOrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookingOrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingOrderPayload>[]
          }
          upsert: {
            args: Prisma.BookingOrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingOrderPayload>
          }
          aggregate: {
            args: Prisma.BookingOrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookingOrder>
          }
          groupBy: {
            args: Prisma.BookingOrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingOrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingOrderCountArgs<ExtArgs>
            result: $Utils.Optional<BookingOrderCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
      Album: {
        payload: Prisma.$AlbumPayload<ExtArgs>
        fields: Prisma.AlbumFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlbumFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlbumFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          findFirst: {
            args: Prisma.AlbumFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlbumFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          findMany: {
            args: Prisma.AlbumFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>[]
          }
          create: {
            args: Prisma.AlbumCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          createMany: {
            args: Prisma.AlbumCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AlbumCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>[]
          }
          delete: {
            args: Prisma.AlbumDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          update: {
            args: Prisma.AlbumUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          deleteMany: {
            args: Prisma.AlbumDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlbumUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AlbumUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>[]
          }
          upsert: {
            args: Prisma.AlbumUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          aggregate: {
            args: Prisma.AlbumAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlbum>
          }
          groupBy: {
            args: Prisma.AlbumGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlbumGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlbumCountArgs<ExtArgs>
            result: $Utils.Optional<AlbumCountAggregateOutputType> | number
          }
        }
      }
      AlbumPhoto: {
        payload: Prisma.$AlbumPhotoPayload<ExtArgs>
        fields: Prisma.AlbumPhotoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlbumPhotoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPhotoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlbumPhotoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPhotoPayload>
          }
          findFirst: {
            args: Prisma.AlbumPhotoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPhotoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlbumPhotoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPhotoPayload>
          }
          findMany: {
            args: Prisma.AlbumPhotoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPhotoPayload>[]
          }
          create: {
            args: Prisma.AlbumPhotoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPhotoPayload>
          }
          createMany: {
            args: Prisma.AlbumPhotoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AlbumPhotoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPhotoPayload>[]
          }
          delete: {
            args: Prisma.AlbumPhotoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPhotoPayload>
          }
          update: {
            args: Prisma.AlbumPhotoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPhotoPayload>
          }
          deleteMany: {
            args: Prisma.AlbumPhotoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlbumPhotoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AlbumPhotoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPhotoPayload>[]
          }
          upsert: {
            args: Prisma.AlbumPhotoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPhotoPayload>
          }
          aggregate: {
            args: Prisma.AlbumPhotoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlbumPhoto>
          }
          groupBy: {
            args: Prisma.AlbumPhotoGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlbumPhotoGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlbumPhotoCountArgs<ExtArgs>
            result: $Utils.Optional<AlbumPhotoCountAggregateOutputType> | number
          }
        }
      }
      GalleryItem: {
        payload: Prisma.$GalleryItemPayload<ExtArgs>
        fields: Prisma.GalleryItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GalleryItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GalleryItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryItemPayload>
          }
          findFirst: {
            args: Prisma.GalleryItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GalleryItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryItemPayload>
          }
          findMany: {
            args: Prisma.GalleryItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryItemPayload>[]
          }
          create: {
            args: Prisma.GalleryItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryItemPayload>
          }
          createMany: {
            args: Prisma.GalleryItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GalleryItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryItemPayload>[]
          }
          delete: {
            args: Prisma.GalleryItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryItemPayload>
          }
          update: {
            args: Prisma.GalleryItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryItemPayload>
          }
          deleteMany: {
            args: Prisma.GalleryItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GalleryItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GalleryItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryItemPayload>[]
          }
          upsert: {
            args: Prisma.GalleryItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryItemPayload>
          }
          aggregate: {
            args: Prisma.GalleryItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGalleryItem>
          }
          groupBy: {
            args: Prisma.GalleryItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<GalleryItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.GalleryItemCountArgs<ExtArgs>
            result: $Utils.Optional<GalleryItemCountAggregateOutputType> | number
          }
        }
      }
      Setting: {
        payload: Prisma.$SettingPayload<ExtArgs>
        fields: Prisma.SettingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SettingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SettingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          findFirst: {
            args: Prisma.SettingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SettingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          findMany: {
            args: Prisma.SettingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>[]
          }
          create: {
            args: Prisma.SettingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          createMany: {
            args: Prisma.SettingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SettingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>[]
          }
          delete: {
            args: Prisma.SettingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          update: {
            args: Prisma.SettingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          deleteMany: {
            args: Prisma.SettingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SettingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SettingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>[]
          }
          upsert: {
            args: Prisma.SettingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          aggregate: {
            args: Prisma.SettingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSetting>
          }
          groupBy: {
            args: Prisma.SettingGroupByArgs<ExtArgs>
            result: $Utils.Optional<SettingGroupByOutputType>[]
          }
          count: {
            args: Prisma.SettingCountArgs<ExtArgs>
            result: $Utils.Optional<SettingCountAggregateOutputType> | number
          }
        }
      }
      Upload: {
        payload: Prisma.$UploadPayload<ExtArgs>
        fields: Prisma.UploadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UploadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UploadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadPayload>
          }
          findFirst: {
            args: Prisma.UploadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UploadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadPayload>
          }
          findMany: {
            args: Prisma.UploadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadPayload>[]
          }
          create: {
            args: Prisma.UploadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadPayload>
          }
          createMany: {
            args: Prisma.UploadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UploadCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadPayload>[]
          }
          delete: {
            args: Prisma.UploadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadPayload>
          }
          update: {
            args: Prisma.UploadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadPayload>
          }
          deleteMany: {
            args: Prisma.UploadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UploadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UploadUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadPayload>[]
          }
          upsert: {
            args: Prisma.UploadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadPayload>
          }
          aggregate: {
            args: Prisma.UploadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUpload>
          }
          groupBy: {
            args: Prisma.UploadGroupByArgs<ExtArgs>
            result: $Utils.Optional<UploadGroupByOutputType>[]
          }
          count: {
            args: Prisma.UploadCountArgs<ExtArgs>
            result: $Utils.Optional<UploadCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    project?: ProjectOmit
    flat?: FlatOmit
    booking?: BookingOmit
    enquiry?: EnquiryOmit
    subscriber?: SubscriberOmit
    testimonial?: TestimonialOmit
    bookingOrder?: BookingOrderOmit
    review?: ReviewOmit
    album?: AlbumOmit
    albumPhoto?: AlbumPhotoOmit
    galleryItem?: GalleryItemOmit
    setting?: SettingOmit
    upload?: UploadOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    flats: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flats?: boolean | ProjectCountOutputTypeCountFlatsArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountFlatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlatWhereInput
  }


  /**
   * Count Type FlatCountOutputType
   */

  export type FlatCountOutputType = {
    bookings: number
    orders: number
  }

  export type FlatCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | FlatCountOutputTypeCountBookingsArgs
    orders?: boolean | FlatCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * FlatCountOutputType without action
   */
  export type FlatCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlatCountOutputType
     */
    select?: FlatCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FlatCountOutputType without action
   */
  export type FlatCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }

  /**
   * FlatCountOutputType without action
   */
  export type FlatCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingOrderWhereInput
  }


  /**
   * Count Type AlbumCountOutputType
   */

  export type AlbumCountOutputType = {
    photos: number
    reviews: number
  }

  export type AlbumCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    photos?: boolean | AlbumCountOutputTypeCountPhotosArgs
    reviews?: boolean | AlbumCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * AlbumCountOutputType without action
   */
  export type AlbumCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumCountOutputType
     */
    select?: AlbumCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AlbumCountOutputType without action
   */
  export type AlbumCountOutputTypeCountPhotosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlbumPhotoWhereInput
  }

  /**
   * AlbumCountOutputType without action
   */
  export type AlbumCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectAvgAggregateOutputType = {
    sortOrder: number | null
  }

  export type ProjectSumAggregateOutputType = {
    sortOrder: number | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    slug: string | null
    name: string | null
    tagline: string | null
    location: string | null
    type: string | null
    status: string | null
    price: string | null
    landArea: string | null
    totalUnits: string | null
    unitSizes: string | null
    reraNumber: string | null
    possessionDate: string | null
    description: string | null
    highlights: string | null
    amenities: string | null
    image: string | null
    gallery: string | null
    featured: boolean | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    slug: string | null
    name: string | null
    tagline: string | null
    location: string | null
    type: string | null
    status: string | null
    price: string | null
    landArea: string | null
    totalUnits: string | null
    unitSizes: string | null
    reraNumber: string | null
    possessionDate: string | null
    description: string | null
    highlights: string | null
    amenities: string | null
    image: string | null
    gallery: string | null
    featured: boolean | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    slug: number
    name: number
    tagline: number
    location: number
    type: number
    status: number
    price: number
    landArea: number
    totalUnits: number
    unitSizes: number
    reraNumber: number
    possessionDate: number
    description: number
    highlights: number
    amenities: number
    image: number
    gallery: number
    featured: number
    sortOrder: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectAvgAggregateInputType = {
    sortOrder?: true
  }

  export type ProjectSumAggregateInputType = {
    sortOrder?: true
  }

  export type ProjectMinAggregateInputType = {
    id?: true
    slug?: true
    name?: true
    tagline?: true
    location?: true
    type?: true
    status?: true
    price?: true
    landArea?: true
    totalUnits?: true
    unitSizes?: true
    reraNumber?: true
    possessionDate?: true
    description?: true
    highlights?: true
    amenities?: true
    image?: true
    gallery?: true
    featured?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    slug?: true
    name?: true
    tagline?: true
    location?: true
    type?: true
    status?: true
    price?: true
    landArea?: true
    totalUnits?: true
    unitSizes?: true
    reraNumber?: true
    possessionDate?: true
    description?: true
    highlights?: true
    amenities?: true
    image?: true
    gallery?: true
    featured?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    slug?: true
    name?: true
    tagline?: true
    location?: true
    type?: true
    status?: true
    price?: true
    landArea?: true
    totalUnits?: true
    unitSizes?: true
    reraNumber?: true
    possessionDate?: true
    description?: true
    highlights?: true
    amenities?: true
    image?: true
    gallery?: true
    featured?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _avg?: ProjectAvgAggregateInputType
    _sum?: ProjectSumAggregateInputType
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    slug: string
    name: string
    tagline: string | null
    location: string
    type: string
    status: string
    price: string
    landArea: string | null
    totalUnits: string | null
    unitSizes: string | null
    reraNumber: string | null
    possessionDate: string | null
    description: string
    highlights: string
    amenities: string | null
    image: string
    gallery: string | null
    featured: boolean
    sortOrder: number
    createdAt: Date
    updatedAt: Date
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    name?: boolean
    tagline?: boolean
    location?: boolean
    type?: boolean
    status?: boolean
    price?: boolean
    landArea?: boolean
    totalUnits?: boolean
    unitSizes?: boolean
    reraNumber?: boolean
    possessionDate?: boolean
    description?: boolean
    highlights?: boolean
    amenities?: boolean
    image?: boolean
    gallery?: boolean
    featured?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    flats?: boolean | Project$flatsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    name?: boolean
    tagline?: boolean
    location?: boolean
    type?: boolean
    status?: boolean
    price?: boolean
    landArea?: boolean
    totalUnits?: boolean
    unitSizes?: boolean
    reraNumber?: boolean
    possessionDate?: boolean
    description?: boolean
    highlights?: boolean
    amenities?: boolean
    image?: boolean
    gallery?: boolean
    featured?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    name?: boolean
    tagline?: boolean
    location?: boolean
    type?: boolean
    status?: boolean
    price?: boolean
    landArea?: boolean
    totalUnits?: boolean
    unitSizes?: boolean
    reraNumber?: boolean
    possessionDate?: boolean
    description?: boolean
    highlights?: boolean
    amenities?: boolean
    image?: boolean
    gallery?: boolean
    featured?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    slug?: boolean
    name?: boolean
    tagline?: boolean
    location?: boolean
    type?: boolean
    status?: boolean
    price?: boolean
    landArea?: boolean
    totalUnits?: boolean
    unitSizes?: boolean
    reraNumber?: boolean
    possessionDate?: boolean
    description?: boolean
    highlights?: boolean
    amenities?: boolean
    image?: boolean
    gallery?: boolean
    featured?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "name" | "tagline" | "location" | "type" | "status" | "price" | "landArea" | "totalUnits" | "unitSizes" | "reraNumber" | "possessionDate" | "description" | "highlights" | "amenities" | "image" | "gallery" | "featured" | "sortOrder" | "createdAt" | "updatedAt", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flats?: boolean | Project$flatsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      flats: Prisma.$FlatPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      slug: string
      name: string
      tagline: string | null
      location: string
      type: string
      status: string
      price: string
      landArea: string | null
      totalUnits: string | null
      unitSizes: string | null
      reraNumber: string | null
      possessionDate: string | null
      description: string
      highlights: string
      amenities: string | null
      image: string
      gallery: string | null
      featured: boolean
      sortOrder: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    flats<T extends Project$flatsArgs<ExtArgs> = {}>(args?: Subset<T, Project$flatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly slug: FieldRef<"Project", 'String'>
    readonly name: FieldRef<"Project", 'String'>
    readonly tagline: FieldRef<"Project", 'String'>
    readonly location: FieldRef<"Project", 'String'>
    readonly type: FieldRef<"Project", 'String'>
    readonly status: FieldRef<"Project", 'String'>
    readonly price: FieldRef<"Project", 'String'>
    readonly landArea: FieldRef<"Project", 'String'>
    readonly totalUnits: FieldRef<"Project", 'String'>
    readonly unitSizes: FieldRef<"Project", 'String'>
    readonly reraNumber: FieldRef<"Project", 'String'>
    readonly possessionDate: FieldRef<"Project", 'String'>
    readonly description: FieldRef<"Project", 'String'>
    readonly highlights: FieldRef<"Project", 'String'>
    readonly amenities: FieldRef<"Project", 'String'>
    readonly image: FieldRef<"Project", 'String'>
    readonly gallery: FieldRef<"Project", 'String'>
    readonly featured: FieldRef<"Project", 'Boolean'>
    readonly sortOrder: FieldRef<"Project", 'Int'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly updatedAt: FieldRef<"Project", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project.flats
   */
  export type Project$flatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flat
     */
    select?: FlatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flat
     */
    omit?: FlatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlatInclude<ExtArgs> | null
    where?: FlatWhereInput
    orderBy?: FlatOrderByWithRelationInput | FlatOrderByWithRelationInput[]
    cursor?: FlatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FlatScalarFieldEnum | FlatScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model Flat
   */

  export type AggregateFlat = {
    _count: FlatCountAggregateOutputType | null
    _avg: FlatAvgAggregateOutputType | null
    _sum: FlatSumAggregateOutputType | null
    _min: FlatMinAggregateOutputType | null
    _max: FlatMaxAggregateOutputType | null
  }

  export type FlatAvgAggregateOutputType = {
    floor: number | null
    areaSqft: number | null
    priceLakhs: number | null
  }

  export type FlatSumAggregateOutputType = {
    floor: number | null
    areaSqft: number | null
    priceLakhs: number | null
  }

  export type FlatMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    tower: string | null
    floor: number | null
    floorLabel: string | null
    unitNumber: string | null
    unitType: string | null
    areaSqft: number | null
    priceLakhs: number | null
    facing: string | null
    status: string | null
    lockedUntil: Date | null
    lockSession: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FlatMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    tower: string | null
    floor: number | null
    floorLabel: string | null
    unitNumber: string | null
    unitType: string | null
    areaSqft: number | null
    priceLakhs: number | null
    facing: string | null
    status: string | null
    lockedUntil: Date | null
    lockSession: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FlatCountAggregateOutputType = {
    id: number
    projectId: number
    tower: number
    floor: number
    floorLabel: number
    unitNumber: number
    unitType: number
    areaSqft: number
    priceLakhs: number
    facing: number
    status: number
    lockedUntil: number
    lockSession: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FlatAvgAggregateInputType = {
    floor?: true
    areaSqft?: true
    priceLakhs?: true
  }

  export type FlatSumAggregateInputType = {
    floor?: true
    areaSqft?: true
    priceLakhs?: true
  }

  export type FlatMinAggregateInputType = {
    id?: true
    projectId?: true
    tower?: true
    floor?: true
    floorLabel?: true
    unitNumber?: true
    unitType?: true
    areaSqft?: true
    priceLakhs?: true
    facing?: true
    status?: true
    lockedUntil?: true
    lockSession?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FlatMaxAggregateInputType = {
    id?: true
    projectId?: true
    tower?: true
    floor?: true
    floorLabel?: true
    unitNumber?: true
    unitType?: true
    areaSqft?: true
    priceLakhs?: true
    facing?: true
    status?: true
    lockedUntil?: true
    lockSession?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FlatCountAggregateInputType = {
    id?: true
    projectId?: true
    tower?: true
    floor?: true
    floorLabel?: true
    unitNumber?: true
    unitType?: true
    areaSqft?: true
    priceLakhs?: true
    facing?: true
    status?: true
    lockedUntil?: true
    lockSession?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FlatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Flat to aggregate.
     */
    where?: FlatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flats to fetch.
     */
    orderBy?: FlatOrderByWithRelationInput | FlatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FlatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Flats
    **/
    _count?: true | FlatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FlatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FlatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FlatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FlatMaxAggregateInputType
  }

  export type GetFlatAggregateType<T extends FlatAggregateArgs> = {
        [P in keyof T & keyof AggregateFlat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFlat[P]>
      : GetScalarType<T[P], AggregateFlat[P]>
  }




  export type FlatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlatWhereInput
    orderBy?: FlatOrderByWithAggregationInput | FlatOrderByWithAggregationInput[]
    by: FlatScalarFieldEnum[] | FlatScalarFieldEnum
    having?: FlatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FlatCountAggregateInputType | true
    _avg?: FlatAvgAggregateInputType
    _sum?: FlatSumAggregateInputType
    _min?: FlatMinAggregateInputType
    _max?: FlatMaxAggregateInputType
  }

  export type FlatGroupByOutputType = {
    id: string
    projectId: string
    tower: string
    floor: number
    floorLabel: string
    unitNumber: string
    unitType: string
    areaSqft: number
    priceLakhs: number
    facing: string | null
    status: string
    lockedUntil: Date | null
    lockSession: string | null
    createdAt: Date
    updatedAt: Date
    _count: FlatCountAggregateOutputType | null
    _avg: FlatAvgAggregateOutputType | null
    _sum: FlatSumAggregateOutputType | null
    _min: FlatMinAggregateOutputType | null
    _max: FlatMaxAggregateOutputType | null
  }

  type GetFlatGroupByPayload<T extends FlatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FlatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FlatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FlatGroupByOutputType[P]>
            : GetScalarType<T[P], FlatGroupByOutputType[P]>
        }
      >
    >


  export type FlatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    tower?: boolean
    floor?: boolean
    floorLabel?: boolean
    unitNumber?: boolean
    unitType?: boolean
    areaSqft?: boolean
    priceLakhs?: boolean
    facing?: boolean
    status?: boolean
    lockedUntil?: boolean
    lockSession?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    bookings?: boolean | Flat$bookingsArgs<ExtArgs>
    orders?: boolean | Flat$ordersArgs<ExtArgs>
    _count?: boolean | FlatCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flat"]>

  export type FlatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    tower?: boolean
    floor?: boolean
    floorLabel?: boolean
    unitNumber?: boolean
    unitType?: boolean
    areaSqft?: boolean
    priceLakhs?: boolean
    facing?: boolean
    status?: boolean
    lockedUntil?: boolean
    lockSession?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flat"]>

  export type FlatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    tower?: boolean
    floor?: boolean
    floorLabel?: boolean
    unitNumber?: boolean
    unitType?: boolean
    areaSqft?: boolean
    priceLakhs?: boolean
    facing?: boolean
    status?: boolean
    lockedUntil?: boolean
    lockSession?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flat"]>

  export type FlatSelectScalar = {
    id?: boolean
    projectId?: boolean
    tower?: boolean
    floor?: boolean
    floorLabel?: boolean
    unitNumber?: boolean
    unitType?: boolean
    areaSqft?: boolean
    priceLakhs?: boolean
    facing?: boolean
    status?: boolean
    lockedUntil?: boolean
    lockSession?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FlatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "tower" | "floor" | "floorLabel" | "unitNumber" | "unitType" | "areaSqft" | "priceLakhs" | "facing" | "status" | "lockedUntil" | "lockSession" | "createdAt" | "updatedAt", ExtArgs["result"]["flat"]>
  export type FlatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    bookings?: boolean | Flat$bookingsArgs<ExtArgs>
    orders?: boolean | Flat$ordersArgs<ExtArgs>
    _count?: boolean | FlatCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FlatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type FlatIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $FlatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Flat"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      bookings: Prisma.$BookingPayload<ExtArgs>[]
      orders: Prisma.$BookingOrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      tower: string
      floor: number
      floorLabel: string
      unitNumber: string
      unitType: string
      areaSqft: number
      priceLakhs: number
      facing: string | null
      status: string
      lockedUntil: Date | null
      lockSession: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["flat"]>
    composites: {}
  }

  type FlatGetPayload<S extends boolean | null | undefined | FlatDefaultArgs> = $Result.GetResult<Prisma.$FlatPayload, S>

  type FlatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FlatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FlatCountAggregateInputType | true
    }

  export interface FlatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Flat'], meta: { name: 'Flat' } }
    /**
     * Find zero or one Flat that matches the filter.
     * @param {FlatFindUniqueArgs} args - Arguments to find a Flat
     * @example
     * // Get one Flat
     * const flat = await prisma.flat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FlatFindUniqueArgs>(args: SelectSubset<T, FlatFindUniqueArgs<ExtArgs>>): Prisma__FlatClient<$Result.GetResult<Prisma.$FlatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Flat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FlatFindUniqueOrThrowArgs} args - Arguments to find a Flat
     * @example
     * // Get one Flat
     * const flat = await prisma.flat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FlatFindUniqueOrThrowArgs>(args: SelectSubset<T, FlatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FlatClient<$Result.GetResult<Prisma.$FlatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Flat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlatFindFirstArgs} args - Arguments to find a Flat
     * @example
     * // Get one Flat
     * const flat = await prisma.flat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FlatFindFirstArgs>(args?: SelectSubset<T, FlatFindFirstArgs<ExtArgs>>): Prisma__FlatClient<$Result.GetResult<Prisma.$FlatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Flat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlatFindFirstOrThrowArgs} args - Arguments to find a Flat
     * @example
     * // Get one Flat
     * const flat = await prisma.flat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FlatFindFirstOrThrowArgs>(args?: SelectSubset<T, FlatFindFirstOrThrowArgs<ExtArgs>>): Prisma__FlatClient<$Result.GetResult<Prisma.$FlatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Flats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Flats
     * const flats = await prisma.flat.findMany()
     * 
     * // Get first 10 Flats
     * const flats = await prisma.flat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const flatWithIdOnly = await prisma.flat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FlatFindManyArgs>(args?: SelectSubset<T, FlatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Flat.
     * @param {FlatCreateArgs} args - Arguments to create a Flat.
     * @example
     * // Create one Flat
     * const Flat = await prisma.flat.create({
     *   data: {
     *     // ... data to create a Flat
     *   }
     * })
     * 
     */
    create<T extends FlatCreateArgs>(args: SelectSubset<T, FlatCreateArgs<ExtArgs>>): Prisma__FlatClient<$Result.GetResult<Prisma.$FlatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Flats.
     * @param {FlatCreateManyArgs} args - Arguments to create many Flats.
     * @example
     * // Create many Flats
     * const flat = await prisma.flat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FlatCreateManyArgs>(args?: SelectSubset<T, FlatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Flats and returns the data saved in the database.
     * @param {FlatCreateManyAndReturnArgs} args - Arguments to create many Flats.
     * @example
     * // Create many Flats
     * const flat = await prisma.flat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Flats and only return the `id`
     * const flatWithIdOnly = await prisma.flat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FlatCreateManyAndReturnArgs>(args?: SelectSubset<T, FlatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Flat.
     * @param {FlatDeleteArgs} args - Arguments to delete one Flat.
     * @example
     * // Delete one Flat
     * const Flat = await prisma.flat.delete({
     *   where: {
     *     // ... filter to delete one Flat
     *   }
     * })
     * 
     */
    delete<T extends FlatDeleteArgs>(args: SelectSubset<T, FlatDeleteArgs<ExtArgs>>): Prisma__FlatClient<$Result.GetResult<Prisma.$FlatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Flat.
     * @param {FlatUpdateArgs} args - Arguments to update one Flat.
     * @example
     * // Update one Flat
     * const flat = await prisma.flat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FlatUpdateArgs>(args: SelectSubset<T, FlatUpdateArgs<ExtArgs>>): Prisma__FlatClient<$Result.GetResult<Prisma.$FlatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Flats.
     * @param {FlatDeleteManyArgs} args - Arguments to filter Flats to delete.
     * @example
     * // Delete a few Flats
     * const { count } = await prisma.flat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FlatDeleteManyArgs>(args?: SelectSubset<T, FlatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Flats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Flats
     * const flat = await prisma.flat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FlatUpdateManyArgs>(args: SelectSubset<T, FlatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Flats and returns the data updated in the database.
     * @param {FlatUpdateManyAndReturnArgs} args - Arguments to update many Flats.
     * @example
     * // Update many Flats
     * const flat = await prisma.flat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Flats and only return the `id`
     * const flatWithIdOnly = await prisma.flat.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FlatUpdateManyAndReturnArgs>(args: SelectSubset<T, FlatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Flat.
     * @param {FlatUpsertArgs} args - Arguments to update or create a Flat.
     * @example
     * // Update or create a Flat
     * const flat = await prisma.flat.upsert({
     *   create: {
     *     // ... data to create a Flat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Flat we want to update
     *   }
     * })
     */
    upsert<T extends FlatUpsertArgs>(args: SelectSubset<T, FlatUpsertArgs<ExtArgs>>): Prisma__FlatClient<$Result.GetResult<Prisma.$FlatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Flats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlatCountArgs} args - Arguments to filter Flats to count.
     * @example
     * // Count the number of Flats
     * const count = await prisma.flat.count({
     *   where: {
     *     // ... the filter for the Flats we want to count
     *   }
     * })
    **/
    count<T extends FlatCountArgs>(
      args?: Subset<T, FlatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FlatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Flat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FlatAggregateArgs>(args: Subset<T, FlatAggregateArgs>): Prisma.PrismaPromise<GetFlatAggregateType<T>>

    /**
     * Group by Flat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlatGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FlatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FlatGroupByArgs['orderBy'] }
        : { orderBy?: FlatGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FlatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFlatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Flat model
   */
  readonly fields: FlatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Flat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FlatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    bookings<T extends Flat$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Flat$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orders<T extends Flat$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Flat$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Flat model
   */
  interface FlatFieldRefs {
    readonly id: FieldRef<"Flat", 'String'>
    readonly projectId: FieldRef<"Flat", 'String'>
    readonly tower: FieldRef<"Flat", 'String'>
    readonly floor: FieldRef<"Flat", 'Int'>
    readonly floorLabel: FieldRef<"Flat", 'String'>
    readonly unitNumber: FieldRef<"Flat", 'String'>
    readonly unitType: FieldRef<"Flat", 'String'>
    readonly areaSqft: FieldRef<"Flat", 'Int'>
    readonly priceLakhs: FieldRef<"Flat", 'Float'>
    readonly facing: FieldRef<"Flat", 'String'>
    readonly status: FieldRef<"Flat", 'String'>
    readonly lockedUntil: FieldRef<"Flat", 'DateTime'>
    readonly lockSession: FieldRef<"Flat", 'String'>
    readonly createdAt: FieldRef<"Flat", 'DateTime'>
    readonly updatedAt: FieldRef<"Flat", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Flat findUnique
   */
  export type FlatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flat
     */
    select?: FlatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flat
     */
    omit?: FlatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlatInclude<ExtArgs> | null
    /**
     * Filter, which Flat to fetch.
     */
    where: FlatWhereUniqueInput
  }

  /**
   * Flat findUniqueOrThrow
   */
  export type FlatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flat
     */
    select?: FlatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flat
     */
    omit?: FlatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlatInclude<ExtArgs> | null
    /**
     * Filter, which Flat to fetch.
     */
    where: FlatWhereUniqueInput
  }

  /**
   * Flat findFirst
   */
  export type FlatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flat
     */
    select?: FlatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flat
     */
    omit?: FlatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlatInclude<ExtArgs> | null
    /**
     * Filter, which Flat to fetch.
     */
    where?: FlatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flats to fetch.
     */
    orderBy?: FlatOrderByWithRelationInput | FlatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Flats.
     */
    cursor?: FlatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Flats.
     */
    distinct?: FlatScalarFieldEnum | FlatScalarFieldEnum[]
  }

  /**
   * Flat findFirstOrThrow
   */
  export type FlatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flat
     */
    select?: FlatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flat
     */
    omit?: FlatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlatInclude<ExtArgs> | null
    /**
     * Filter, which Flat to fetch.
     */
    where?: FlatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flats to fetch.
     */
    orderBy?: FlatOrderByWithRelationInput | FlatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Flats.
     */
    cursor?: FlatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Flats.
     */
    distinct?: FlatScalarFieldEnum | FlatScalarFieldEnum[]
  }

  /**
   * Flat findMany
   */
  export type FlatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flat
     */
    select?: FlatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flat
     */
    omit?: FlatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlatInclude<ExtArgs> | null
    /**
     * Filter, which Flats to fetch.
     */
    where?: FlatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flats to fetch.
     */
    orderBy?: FlatOrderByWithRelationInput | FlatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Flats.
     */
    cursor?: FlatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flats.
     */
    skip?: number
    distinct?: FlatScalarFieldEnum | FlatScalarFieldEnum[]
  }

  /**
   * Flat create
   */
  export type FlatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flat
     */
    select?: FlatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flat
     */
    omit?: FlatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlatInclude<ExtArgs> | null
    /**
     * The data needed to create a Flat.
     */
    data: XOR<FlatCreateInput, FlatUncheckedCreateInput>
  }

  /**
   * Flat createMany
   */
  export type FlatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Flats.
     */
    data: FlatCreateManyInput | FlatCreateManyInput[]
  }

  /**
   * Flat createManyAndReturn
   */
  export type FlatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flat
     */
    select?: FlatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Flat
     */
    omit?: FlatOmit<ExtArgs> | null
    /**
     * The data used to create many Flats.
     */
    data: FlatCreateManyInput | FlatCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlatIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Flat update
   */
  export type FlatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flat
     */
    select?: FlatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flat
     */
    omit?: FlatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlatInclude<ExtArgs> | null
    /**
     * The data needed to update a Flat.
     */
    data: XOR<FlatUpdateInput, FlatUncheckedUpdateInput>
    /**
     * Choose, which Flat to update.
     */
    where: FlatWhereUniqueInput
  }

  /**
   * Flat updateMany
   */
  export type FlatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Flats.
     */
    data: XOR<FlatUpdateManyMutationInput, FlatUncheckedUpdateManyInput>
    /**
     * Filter which Flats to update
     */
    where?: FlatWhereInput
    /**
     * Limit how many Flats to update.
     */
    limit?: number
  }

  /**
   * Flat updateManyAndReturn
   */
  export type FlatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flat
     */
    select?: FlatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Flat
     */
    omit?: FlatOmit<ExtArgs> | null
    /**
     * The data used to update Flats.
     */
    data: XOR<FlatUpdateManyMutationInput, FlatUncheckedUpdateManyInput>
    /**
     * Filter which Flats to update
     */
    where?: FlatWhereInput
    /**
     * Limit how many Flats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlatIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Flat upsert
   */
  export type FlatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flat
     */
    select?: FlatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flat
     */
    omit?: FlatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlatInclude<ExtArgs> | null
    /**
     * The filter to search for the Flat to update in case it exists.
     */
    where: FlatWhereUniqueInput
    /**
     * In case the Flat found by the `where` argument doesn't exist, create a new Flat with this data.
     */
    create: XOR<FlatCreateInput, FlatUncheckedCreateInput>
    /**
     * In case the Flat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FlatUpdateInput, FlatUncheckedUpdateInput>
  }

  /**
   * Flat delete
   */
  export type FlatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flat
     */
    select?: FlatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flat
     */
    omit?: FlatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlatInclude<ExtArgs> | null
    /**
     * Filter which Flat to delete.
     */
    where: FlatWhereUniqueInput
  }

  /**
   * Flat deleteMany
   */
  export type FlatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Flats to delete
     */
    where?: FlatWhereInput
    /**
     * Limit how many Flats to delete.
     */
    limit?: number
  }

  /**
   * Flat.bookings
   */
  export type Flat$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Flat.orders
   */
  export type Flat$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingOrder
     */
    select?: BookingOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingOrder
     */
    omit?: BookingOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingOrderInclude<ExtArgs> | null
    where?: BookingOrderWhereInput
    orderBy?: BookingOrderOrderByWithRelationInput | BookingOrderOrderByWithRelationInput[]
    cursor?: BookingOrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingOrderScalarFieldEnum | BookingOrderScalarFieldEnum[]
  }

  /**
   * Flat without action
   */
  export type FlatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flat
     */
    select?: FlatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flat
     */
    omit?: FlatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlatInclude<ExtArgs> | null
  }


  /**
   * Model Booking
   */

  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  export type BookingMinAggregateOutputType = {
    id: string | null
    flatId: string | null
    buyerName: string | null
    buyerPhone: string | null
    buyerEmail: string | null
    amountLabel: string | null
    status: string | null
    createdAt: Date | null
  }

  export type BookingMaxAggregateOutputType = {
    id: string | null
    flatId: string | null
    buyerName: string | null
    buyerPhone: string | null
    buyerEmail: string | null
    amountLabel: string | null
    status: string | null
    createdAt: Date | null
  }

  export type BookingCountAggregateOutputType = {
    id: number
    flatId: number
    buyerName: number
    buyerPhone: number
    buyerEmail: number
    amountLabel: number
    status: number
    createdAt: number
    _all: number
  }


  export type BookingMinAggregateInputType = {
    id?: true
    flatId?: true
    buyerName?: true
    buyerPhone?: true
    buyerEmail?: true
    amountLabel?: true
    status?: true
    createdAt?: true
  }

  export type BookingMaxAggregateInputType = {
    id?: true
    flatId?: true
    buyerName?: true
    buyerPhone?: true
    buyerEmail?: true
    amountLabel?: true
    status?: true
    createdAt?: true
  }

  export type BookingCountAggregateInputType = {
    id?: true
    flatId?: true
    buyerName?: true
    buyerPhone?: true
    buyerEmail?: true
    amountLabel?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type BookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Booking to aggregate.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookings
    **/
    _count?: true | BookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingMaxAggregateInputType
  }

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
        [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>
  }




  export type BookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithAggregationInput | BookingOrderByWithAggregationInput[]
    by: BookingScalarFieldEnum[] | BookingScalarFieldEnum
    having?: BookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingCountAggregateInputType | true
    _min?: BookingMinAggregateInputType
    _max?: BookingMaxAggregateInputType
  }

  export type BookingGroupByOutputType = {
    id: string
    flatId: string
    buyerName: string
    buyerPhone: string
    buyerEmail: string | null
    amountLabel: string | null
    status: string
    createdAt: Date
    _count: BookingCountAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  type GetBookingGroupByPayload<T extends BookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingGroupByOutputType[P]>
            : GetScalarType<T[P], BookingGroupByOutputType[P]>
        }
      >
    >


  export type BookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    flatId?: boolean
    buyerName?: boolean
    buyerPhone?: boolean
    buyerEmail?: boolean
    amountLabel?: boolean
    status?: boolean
    createdAt?: boolean
    flat?: boolean | FlatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    flatId?: boolean
    buyerName?: boolean
    buyerPhone?: boolean
    buyerEmail?: boolean
    amountLabel?: boolean
    status?: boolean
    createdAt?: boolean
    flat?: boolean | FlatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    flatId?: boolean
    buyerName?: boolean
    buyerPhone?: boolean
    buyerEmail?: boolean
    amountLabel?: boolean
    status?: boolean
    createdAt?: boolean
    flat?: boolean | FlatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectScalar = {
    id?: boolean
    flatId?: boolean
    buyerName?: boolean
    buyerPhone?: boolean
    buyerEmail?: boolean
    amountLabel?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type BookingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "flatId" | "buyerName" | "buyerPhone" | "buyerEmail" | "amountLabel" | "status" | "createdAt", ExtArgs["result"]["booking"]>
  export type BookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flat?: boolean | FlatDefaultArgs<ExtArgs>
  }
  export type BookingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flat?: boolean | FlatDefaultArgs<ExtArgs>
  }
  export type BookingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flat?: boolean | FlatDefaultArgs<ExtArgs>
  }

  export type $BookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Booking"
    objects: {
      flat: Prisma.$FlatPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      flatId: string
      buyerName: string
      buyerPhone: string
      buyerEmail: string | null
      amountLabel: string | null
      status: string
      createdAt: Date
    }, ExtArgs["result"]["booking"]>
    composites: {}
  }

  type BookingGetPayload<S extends boolean | null | undefined | BookingDefaultArgs> = $Result.GetResult<Prisma.$BookingPayload, S>

  type BookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingCountAggregateInputType | true
    }

  export interface BookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Booking'], meta: { name: 'Booking' } }
    /**
     * Find zero or one Booking that matches the filter.
     * @param {BookingFindUniqueArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingFindUniqueArgs>(args: SelectSubset<T, BookingFindUniqueArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Booking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingFindUniqueOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingFindFirstArgs>(args?: SelectSubset<T, BookingFindFirstArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.booking.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.booking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingWithIdOnly = await prisma.booking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingFindManyArgs>(args?: SelectSubset<T, BookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Booking.
     * @param {BookingCreateArgs} args - Arguments to create a Booking.
     * @example
     * // Create one Booking
     * const Booking = await prisma.booking.create({
     *   data: {
     *     // ... data to create a Booking
     *   }
     * })
     * 
     */
    create<T extends BookingCreateArgs>(args: SelectSubset<T, BookingCreateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookings.
     * @param {BookingCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingCreateManyArgs>(args?: SelectSubset<T, BookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bookings and returns the data saved in the database.
     * @param {BookingCreateManyAndReturnArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookingCreateManyAndReturnArgs>(args?: SelectSubset<T, BookingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Booking.
     * @param {BookingDeleteArgs} args - Arguments to delete one Booking.
     * @example
     * // Delete one Booking
     * const Booking = await prisma.booking.delete({
     *   where: {
     *     // ... filter to delete one Booking
     *   }
     * })
     * 
     */
    delete<T extends BookingDeleteArgs>(args: SelectSubset<T, BookingDeleteArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Booking.
     * @param {BookingUpdateArgs} args - Arguments to update one Booking.
     * @example
     * // Update one Booking
     * const booking = await prisma.booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingUpdateArgs>(args: SelectSubset<T, BookingUpdateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookings.
     * @param {BookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingDeleteManyArgs>(args?: SelectSubset<T, BookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingUpdateManyArgs>(args: SelectSubset<T, BookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings and returns the data updated in the database.
     * @param {BookingUpdateManyAndReturnArgs} args - Arguments to update many Bookings.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BookingUpdateManyAndReturnArgs>(args: SelectSubset<T, BookingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Booking.
     * @param {BookingUpsertArgs} args - Arguments to update or create a Booking.
     * @example
     * // Update or create a Booking
     * const booking = await prisma.booking.upsert({
     *   create: {
     *     // ... data to create a Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking we want to update
     *   }
     * })
     */
    upsert<T extends BookingUpsertArgs>(args: SelectSubset<T, BookingUpsertArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.booking.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends BookingCountArgs>(
      args?: Subset<T, BookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookingAggregateArgs>(args: Subset<T, BookingAggregateArgs>): Prisma.PrismaPromise<GetBookingAggregateType<T>>

    /**
     * Group by Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingGroupByArgs['orderBy'] }
        : { orderBy?: BookingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Booking model
   */
  readonly fields: BookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    flat<T extends FlatDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FlatDefaultArgs<ExtArgs>>): Prisma__FlatClient<$Result.GetResult<Prisma.$FlatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Booking model
   */
  interface BookingFieldRefs {
    readonly id: FieldRef<"Booking", 'String'>
    readonly flatId: FieldRef<"Booking", 'String'>
    readonly buyerName: FieldRef<"Booking", 'String'>
    readonly buyerPhone: FieldRef<"Booking", 'String'>
    readonly buyerEmail: FieldRef<"Booking", 'String'>
    readonly amountLabel: FieldRef<"Booking", 'String'>
    readonly status: FieldRef<"Booking", 'String'>
    readonly createdAt: FieldRef<"Booking", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Booking findUnique
   */
  export type BookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findUniqueOrThrow
   */
  export type BookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findFirst
   */
  export type BookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findFirstOrThrow
   */
  export type BookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findMany
   */
  export type BookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking create
   */
  export type BookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to create a Booking.
     */
    data: XOR<BookingCreateInput, BookingUncheckedCreateInput>
  }

  /**
   * Booking createMany
   */
  export type BookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
  }

  /**
   * Booking createManyAndReturn
   */
  export type BookingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking update
   */
  export type BookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to update a Booking.
     */
    data: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
    /**
     * Choose, which Booking to update.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking updateMany
   */
  export type BookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
  }

  /**
   * Booking updateManyAndReturn
   */
  export type BookingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking upsert
   */
  export type BookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The filter to search for the Booking to update in case it exists.
     */
    where: BookingWhereUniqueInput
    /**
     * In case the Booking found by the `where` argument doesn't exist, create a new Booking with this data.
     */
    create: XOR<BookingCreateInput, BookingUncheckedCreateInput>
    /**
     * In case the Booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
  }

  /**
   * Booking delete
   */
  export type BookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter which Booking to delete.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking deleteMany
   */
  export type BookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookings to delete
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to delete.
     */
    limit?: number
  }

  /**
   * Booking without action
   */
  export type BookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
  }


  /**
   * Model Enquiry
   */

  export type AggregateEnquiry = {
    _count: EnquiryCountAggregateOutputType | null
    _min: EnquiryMinAggregateOutputType | null
    _max: EnquiryMaxAggregateOutputType | null
  }

  export type EnquiryMinAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    email: string | null
    project: string | null
    budget: string | null
    message: string | null
    source: string | null
    status: string | null
    createdAt: Date | null
  }

  export type EnquiryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    email: string | null
    project: string | null
    budget: string | null
    message: string | null
    source: string | null
    status: string | null
    createdAt: Date | null
  }

  export type EnquiryCountAggregateOutputType = {
    id: number
    name: number
    phone: number
    email: number
    project: number
    budget: number
    message: number
    source: number
    status: number
    createdAt: number
    _all: number
  }


  export type EnquiryMinAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    project?: true
    budget?: true
    message?: true
    source?: true
    status?: true
    createdAt?: true
  }

  export type EnquiryMaxAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    project?: true
    budget?: true
    message?: true
    source?: true
    status?: true
    createdAt?: true
  }

  export type EnquiryCountAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    project?: true
    budget?: true
    message?: true
    source?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type EnquiryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Enquiry to aggregate.
     */
    where?: EnquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enquiries to fetch.
     */
    orderBy?: EnquiryOrderByWithRelationInput | EnquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EnquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Enquiries
    **/
    _count?: true | EnquiryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnquiryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnquiryMaxAggregateInputType
  }

  export type GetEnquiryAggregateType<T extends EnquiryAggregateArgs> = {
        [P in keyof T & keyof AggregateEnquiry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnquiry[P]>
      : GetScalarType<T[P], AggregateEnquiry[P]>
  }




  export type EnquiryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnquiryWhereInput
    orderBy?: EnquiryOrderByWithAggregationInput | EnquiryOrderByWithAggregationInput[]
    by: EnquiryScalarFieldEnum[] | EnquiryScalarFieldEnum
    having?: EnquiryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnquiryCountAggregateInputType | true
    _min?: EnquiryMinAggregateInputType
    _max?: EnquiryMaxAggregateInputType
  }

  export type EnquiryGroupByOutputType = {
    id: string
    name: string
    phone: string
    email: string | null
    project: string | null
    budget: string | null
    message: string | null
    source: string
    status: string
    createdAt: Date
    _count: EnquiryCountAggregateOutputType | null
    _min: EnquiryMinAggregateOutputType | null
    _max: EnquiryMaxAggregateOutputType | null
  }

  type GetEnquiryGroupByPayload<T extends EnquiryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnquiryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnquiryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnquiryGroupByOutputType[P]>
            : GetScalarType<T[P], EnquiryGroupByOutputType[P]>
        }
      >
    >


  export type EnquirySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    project?: boolean
    budget?: boolean
    message?: boolean
    source?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["enquiry"]>

  export type EnquirySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    project?: boolean
    budget?: boolean
    message?: boolean
    source?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["enquiry"]>

  export type EnquirySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    project?: boolean
    budget?: boolean
    message?: boolean
    source?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["enquiry"]>

  export type EnquirySelectScalar = {
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    project?: boolean
    budget?: boolean
    message?: boolean
    source?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type EnquiryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "phone" | "email" | "project" | "budget" | "message" | "source" | "status" | "createdAt", ExtArgs["result"]["enquiry"]>

  export type $EnquiryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Enquiry"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      phone: string
      email: string | null
      project: string | null
      budget: string | null
      message: string | null
      source: string
      status: string
      createdAt: Date
    }, ExtArgs["result"]["enquiry"]>
    composites: {}
  }

  type EnquiryGetPayload<S extends boolean | null | undefined | EnquiryDefaultArgs> = $Result.GetResult<Prisma.$EnquiryPayload, S>

  type EnquiryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EnquiryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EnquiryCountAggregateInputType | true
    }

  export interface EnquiryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Enquiry'], meta: { name: 'Enquiry' } }
    /**
     * Find zero or one Enquiry that matches the filter.
     * @param {EnquiryFindUniqueArgs} args - Arguments to find a Enquiry
     * @example
     * // Get one Enquiry
     * const enquiry = await prisma.enquiry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EnquiryFindUniqueArgs>(args: SelectSubset<T, EnquiryFindUniqueArgs<ExtArgs>>): Prisma__EnquiryClient<$Result.GetResult<Prisma.$EnquiryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Enquiry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EnquiryFindUniqueOrThrowArgs} args - Arguments to find a Enquiry
     * @example
     * // Get one Enquiry
     * const enquiry = await prisma.enquiry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EnquiryFindUniqueOrThrowArgs>(args: SelectSubset<T, EnquiryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EnquiryClient<$Result.GetResult<Prisma.$EnquiryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Enquiry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnquiryFindFirstArgs} args - Arguments to find a Enquiry
     * @example
     * // Get one Enquiry
     * const enquiry = await prisma.enquiry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EnquiryFindFirstArgs>(args?: SelectSubset<T, EnquiryFindFirstArgs<ExtArgs>>): Prisma__EnquiryClient<$Result.GetResult<Prisma.$EnquiryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Enquiry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnquiryFindFirstOrThrowArgs} args - Arguments to find a Enquiry
     * @example
     * // Get one Enquiry
     * const enquiry = await prisma.enquiry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EnquiryFindFirstOrThrowArgs>(args?: SelectSubset<T, EnquiryFindFirstOrThrowArgs<ExtArgs>>): Prisma__EnquiryClient<$Result.GetResult<Prisma.$EnquiryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Enquiries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnquiryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Enquiries
     * const enquiries = await prisma.enquiry.findMany()
     * 
     * // Get first 10 Enquiries
     * const enquiries = await prisma.enquiry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const enquiryWithIdOnly = await prisma.enquiry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EnquiryFindManyArgs>(args?: SelectSubset<T, EnquiryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnquiryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Enquiry.
     * @param {EnquiryCreateArgs} args - Arguments to create a Enquiry.
     * @example
     * // Create one Enquiry
     * const Enquiry = await prisma.enquiry.create({
     *   data: {
     *     // ... data to create a Enquiry
     *   }
     * })
     * 
     */
    create<T extends EnquiryCreateArgs>(args: SelectSubset<T, EnquiryCreateArgs<ExtArgs>>): Prisma__EnquiryClient<$Result.GetResult<Prisma.$EnquiryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Enquiries.
     * @param {EnquiryCreateManyArgs} args - Arguments to create many Enquiries.
     * @example
     * // Create many Enquiries
     * const enquiry = await prisma.enquiry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EnquiryCreateManyArgs>(args?: SelectSubset<T, EnquiryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Enquiries and returns the data saved in the database.
     * @param {EnquiryCreateManyAndReturnArgs} args - Arguments to create many Enquiries.
     * @example
     * // Create many Enquiries
     * const enquiry = await prisma.enquiry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Enquiries and only return the `id`
     * const enquiryWithIdOnly = await prisma.enquiry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EnquiryCreateManyAndReturnArgs>(args?: SelectSubset<T, EnquiryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnquiryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Enquiry.
     * @param {EnquiryDeleteArgs} args - Arguments to delete one Enquiry.
     * @example
     * // Delete one Enquiry
     * const Enquiry = await prisma.enquiry.delete({
     *   where: {
     *     // ... filter to delete one Enquiry
     *   }
     * })
     * 
     */
    delete<T extends EnquiryDeleteArgs>(args: SelectSubset<T, EnquiryDeleteArgs<ExtArgs>>): Prisma__EnquiryClient<$Result.GetResult<Prisma.$EnquiryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Enquiry.
     * @param {EnquiryUpdateArgs} args - Arguments to update one Enquiry.
     * @example
     * // Update one Enquiry
     * const enquiry = await prisma.enquiry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EnquiryUpdateArgs>(args: SelectSubset<T, EnquiryUpdateArgs<ExtArgs>>): Prisma__EnquiryClient<$Result.GetResult<Prisma.$EnquiryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Enquiries.
     * @param {EnquiryDeleteManyArgs} args - Arguments to filter Enquiries to delete.
     * @example
     * // Delete a few Enquiries
     * const { count } = await prisma.enquiry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EnquiryDeleteManyArgs>(args?: SelectSubset<T, EnquiryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enquiries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnquiryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Enquiries
     * const enquiry = await prisma.enquiry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EnquiryUpdateManyArgs>(args: SelectSubset<T, EnquiryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enquiries and returns the data updated in the database.
     * @param {EnquiryUpdateManyAndReturnArgs} args - Arguments to update many Enquiries.
     * @example
     * // Update many Enquiries
     * const enquiry = await prisma.enquiry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Enquiries and only return the `id`
     * const enquiryWithIdOnly = await prisma.enquiry.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EnquiryUpdateManyAndReturnArgs>(args: SelectSubset<T, EnquiryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnquiryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Enquiry.
     * @param {EnquiryUpsertArgs} args - Arguments to update or create a Enquiry.
     * @example
     * // Update or create a Enquiry
     * const enquiry = await prisma.enquiry.upsert({
     *   create: {
     *     // ... data to create a Enquiry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Enquiry we want to update
     *   }
     * })
     */
    upsert<T extends EnquiryUpsertArgs>(args: SelectSubset<T, EnquiryUpsertArgs<ExtArgs>>): Prisma__EnquiryClient<$Result.GetResult<Prisma.$EnquiryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Enquiries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnquiryCountArgs} args - Arguments to filter Enquiries to count.
     * @example
     * // Count the number of Enquiries
     * const count = await prisma.enquiry.count({
     *   where: {
     *     // ... the filter for the Enquiries we want to count
     *   }
     * })
    **/
    count<T extends EnquiryCountArgs>(
      args?: Subset<T, EnquiryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnquiryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Enquiry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnquiryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EnquiryAggregateArgs>(args: Subset<T, EnquiryAggregateArgs>): Prisma.PrismaPromise<GetEnquiryAggregateType<T>>

    /**
     * Group by Enquiry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnquiryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EnquiryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EnquiryGroupByArgs['orderBy'] }
        : { orderBy?: EnquiryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EnquiryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnquiryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Enquiry model
   */
  readonly fields: EnquiryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Enquiry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EnquiryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Enquiry model
   */
  interface EnquiryFieldRefs {
    readonly id: FieldRef<"Enquiry", 'String'>
    readonly name: FieldRef<"Enquiry", 'String'>
    readonly phone: FieldRef<"Enquiry", 'String'>
    readonly email: FieldRef<"Enquiry", 'String'>
    readonly project: FieldRef<"Enquiry", 'String'>
    readonly budget: FieldRef<"Enquiry", 'String'>
    readonly message: FieldRef<"Enquiry", 'String'>
    readonly source: FieldRef<"Enquiry", 'String'>
    readonly status: FieldRef<"Enquiry", 'String'>
    readonly createdAt: FieldRef<"Enquiry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Enquiry findUnique
   */
  export type EnquiryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enquiry
     */
    omit?: EnquiryOmit<ExtArgs> | null
    /**
     * Filter, which Enquiry to fetch.
     */
    where: EnquiryWhereUniqueInput
  }

  /**
   * Enquiry findUniqueOrThrow
   */
  export type EnquiryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enquiry
     */
    omit?: EnquiryOmit<ExtArgs> | null
    /**
     * Filter, which Enquiry to fetch.
     */
    where: EnquiryWhereUniqueInput
  }

  /**
   * Enquiry findFirst
   */
  export type EnquiryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enquiry
     */
    omit?: EnquiryOmit<ExtArgs> | null
    /**
     * Filter, which Enquiry to fetch.
     */
    where?: EnquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enquiries to fetch.
     */
    orderBy?: EnquiryOrderByWithRelationInput | EnquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Enquiries.
     */
    cursor?: EnquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enquiries.
     */
    distinct?: EnquiryScalarFieldEnum | EnquiryScalarFieldEnum[]
  }

  /**
   * Enquiry findFirstOrThrow
   */
  export type EnquiryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enquiry
     */
    omit?: EnquiryOmit<ExtArgs> | null
    /**
     * Filter, which Enquiry to fetch.
     */
    where?: EnquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enquiries to fetch.
     */
    orderBy?: EnquiryOrderByWithRelationInput | EnquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Enquiries.
     */
    cursor?: EnquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enquiries.
     */
    distinct?: EnquiryScalarFieldEnum | EnquiryScalarFieldEnum[]
  }

  /**
   * Enquiry findMany
   */
  export type EnquiryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enquiry
     */
    omit?: EnquiryOmit<ExtArgs> | null
    /**
     * Filter, which Enquiries to fetch.
     */
    where?: EnquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enquiries to fetch.
     */
    orderBy?: EnquiryOrderByWithRelationInput | EnquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Enquiries.
     */
    cursor?: EnquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enquiries.
     */
    skip?: number
    distinct?: EnquiryScalarFieldEnum | EnquiryScalarFieldEnum[]
  }

  /**
   * Enquiry create
   */
  export type EnquiryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enquiry
     */
    omit?: EnquiryOmit<ExtArgs> | null
    /**
     * The data needed to create a Enquiry.
     */
    data: XOR<EnquiryCreateInput, EnquiryUncheckedCreateInput>
  }

  /**
   * Enquiry createMany
   */
  export type EnquiryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Enquiries.
     */
    data: EnquiryCreateManyInput | EnquiryCreateManyInput[]
  }

  /**
   * Enquiry createManyAndReturn
   */
  export type EnquiryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Enquiry
     */
    omit?: EnquiryOmit<ExtArgs> | null
    /**
     * The data used to create many Enquiries.
     */
    data: EnquiryCreateManyInput | EnquiryCreateManyInput[]
  }

  /**
   * Enquiry update
   */
  export type EnquiryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enquiry
     */
    omit?: EnquiryOmit<ExtArgs> | null
    /**
     * The data needed to update a Enquiry.
     */
    data: XOR<EnquiryUpdateInput, EnquiryUncheckedUpdateInput>
    /**
     * Choose, which Enquiry to update.
     */
    where: EnquiryWhereUniqueInput
  }

  /**
   * Enquiry updateMany
   */
  export type EnquiryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Enquiries.
     */
    data: XOR<EnquiryUpdateManyMutationInput, EnquiryUncheckedUpdateManyInput>
    /**
     * Filter which Enquiries to update
     */
    where?: EnquiryWhereInput
    /**
     * Limit how many Enquiries to update.
     */
    limit?: number
  }

  /**
   * Enquiry updateManyAndReturn
   */
  export type EnquiryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Enquiry
     */
    omit?: EnquiryOmit<ExtArgs> | null
    /**
     * The data used to update Enquiries.
     */
    data: XOR<EnquiryUpdateManyMutationInput, EnquiryUncheckedUpdateManyInput>
    /**
     * Filter which Enquiries to update
     */
    where?: EnquiryWhereInput
    /**
     * Limit how many Enquiries to update.
     */
    limit?: number
  }

  /**
   * Enquiry upsert
   */
  export type EnquiryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enquiry
     */
    omit?: EnquiryOmit<ExtArgs> | null
    /**
     * The filter to search for the Enquiry to update in case it exists.
     */
    where: EnquiryWhereUniqueInput
    /**
     * In case the Enquiry found by the `where` argument doesn't exist, create a new Enquiry with this data.
     */
    create: XOR<EnquiryCreateInput, EnquiryUncheckedCreateInput>
    /**
     * In case the Enquiry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EnquiryUpdateInput, EnquiryUncheckedUpdateInput>
  }

  /**
   * Enquiry delete
   */
  export type EnquiryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enquiry
     */
    omit?: EnquiryOmit<ExtArgs> | null
    /**
     * Filter which Enquiry to delete.
     */
    where: EnquiryWhereUniqueInput
  }

  /**
   * Enquiry deleteMany
   */
  export type EnquiryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Enquiries to delete
     */
    where?: EnquiryWhereInput
    /**
     * Limit how many Enquiries to delete.
     */
    limit?: number
  }

  /**
   * Enquiry without action
   */
  export type EnquiryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enquiry
     */
    omit?: EnquiryOmit<ExtArgs> | null
  }


  /**
   * Model Subscriber
   */

  export type AggregateSubscriber = {
    _count: SubscriberCountAggregateOutputType | null
    _min: SubscriberMinAggregateOutputType | null
    _max: SubscriberMaxAggregateOutputType | null
  }

  export type SubscriberMinAggregateOutputType = {
    id: string | null
    email: string | null
    createdAt: Date | null
  }

  export type SubscriberMaxAggregateOutputType = {
    id: string | null
    email: string | null
    createdAt: Date | null
  }

  export type SubscriberCountAggregateOutputType = {
    id: number
    email: number
    createdAt: number
    _all: number
  }


  export type SubscriberMinAggregateInputType = {
    id?: true
    email?: true
    createdAt?: true
  }

  export type SubscriberMaxAggregateInputType = {
    id?: true
    email?: true
    createdAt?: true
  }

  export type SubscriberCountAggregateInputType = {
    id?: true
    email?: true
    createdAt?: true
    _all?: true
  }

  export type SubscriberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscriber to aggregate.
     */
    where?: SubscriberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscribers to fetch.
     */
    orderBy?: SubscriberOrderByWithRelationInput | SubscriberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscribers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscribers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subscribers
    **/
    _count?: true | SubscriberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriberMaxAggregateInputType
  }

  export type GetSubscriberAggregateType<T extends SubscriberAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscriber]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscriber[P]>
      : GetScalarType<T[P], AggregateSubscriber[P]>
  }




  export type SubscriberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriberWhereInput
    orderBy?: SubscriberOrderByWithAggregationInput | SubscriberOrderByWithAggregationInput[]
    by: SubscriberScalarFieldEnum[] | SubscriberScalarFieldEnum
    having?: SubscriberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriberCountAggregateInputType | true
    _min?: SubscriberMinAggregateInputType
    _max?: SubscriberMaxAggregateInputType
  }

  export type SubscriberGroupByOutputType = {
    id: string
    email: string
    createdAt: Date
    _count: SubscriberCountAggregateOutputType | null
    _min: SubscriberMinAggregateOutputType | null
    _max: SubscriberMaxAggregateOutputType | null
  }

  type GetSubscriberGroupByPayload<T extends SubscriberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriberGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriberGroupByOutputType[P]>
        }
      >
    >


  export type SubscriberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["subscriber"]>

  export type SubscriberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["subscriber"]>

  export type SubscriberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["subscriber"]>

  export type SubscriberSelectScalar = {
    id?: boolean
    email?: boolean
    createdAt?: boolean
  }

  export type SubscriberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "createdAt", ExtArgs["result"]["subscriber"]>

  export type $SubscriberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subscriber"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      createdAt: Date
    }, ExtArgs["result"]["subscriber"]>
    composites: {}
  }

  type SubscriberGetPayload<S extends boolean | null | undefined | SubscriberDefaultArgs> = $Result.GetResult<Prisma.$SubscriberPayload, S>

  type SubscriberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubscriberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubscriberCountAggregateInputType | true
    }

  export interface SubscriberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subscriber'], meta: { name: 'Subscriber' } }
    /**
     * Find zero or one Subscriber that matches the filter.
     * @param {SubscriberFindUniqueArgs} args - Arguments to find a Subscriber
     * @example
     * // Get one Subscriber
     * const subscriber = await prisma.subscriber.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriberFindUniqueArgs>(args: SelectSubset<T, SubscriberFindUniqueArgs<ExtArgs>>): Prisma__SubscriberClient<$Result.GetResult<Prisma.$SubscriberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subscriber that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubscriberFindUniqueOrThrowArgs} args - Arguments to find a Subscriber
     * @example
     * // Get one Subscriber
     * const subscriber = await prisma.subscriber.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriberFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscriberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscriberClient<$Result.GetResult<Prisma.$SubscriberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscriber that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriberFindFirstArgs} args - Arguments to find a Subscriber
     * @example
     * // Get one Subscriber
     * const subscriber = await prisma.subscriber.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriberFindFirstArgs>(args?: SelectSubset<T, SubscriberFindFirstArgs<ExtArgs>>): Prisma__SubscriberClient<$Result.GetResult<Prisma.$SubscriberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscriber that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriberFindFirstOrThrowArgs} args - Arguments to find a Subscriber
     * @example
     * // Get one Subscriber
     * const subscriber = await prisma.subscriber.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriberFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscriberFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscriberClient<$Result.GetResult<Prisma.$SubscriberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subscribers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscribers
     * const subscribers = await prisma.subscriber.findMany()
     * 
     * // Get first 10 Subscribers
     * const subscribers = await prisma.subscriber.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriberWithIdOnly = await prisma.subscriber.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubscriberFindManyArgs>(args?: SelectSubset<T, SubscriberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subscriber.
     * @param {SubscriberCreateArgs} args - Arguments to create a Subscriber.
     * @example
     * // Create one Subscriber
     * const Subscriber = await prisma.subscriber.create({
     *   data: {
     *     // ... data to create a Subscriber
     *   }
     * })
     * 
     */
    create<T extends SubscriberCreateArgs>(args: SelectSubset<T, SubscriberCreateArgs<ExtArgs>>): Prisma__SubscriberClient<$Result.GetResult<Prisma.$SubscriberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subscribers.
     * @param {SubscriberCreateManyArgs} args - Arguments to create many Subscribers.
     * @example
     * // Create many Subscribers
     * const subscriber = await prisma.subscriber.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscriberCreateManyArgs>(args?: SelectSubset<T, SubscriberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subscribers and returns the data saved in the database.
     * @param {SubscriberCreateManyAndReturnArgs} args - Arguments to create many Subscribers.
     * @example
     * // Create many Subscribers
     * const subscriber = await prisma.subscriber.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subscribers and only return the `id`
     * const subscriberWithIdOnly = await prisma.subscriber.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubscriberCreateManyAndReturnArgs>(args?: SelectSubset<T, SubscriberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subscriber.
     * @param {SubscriberDeleteArgs} args - Arguments to delete one Subscriber.
     * @example
     * // Delete one Subscriber
     * const Subscriber = await prisma.subscriber.delete({
     *   where: {
     *     // ... filter to delete one Subscriber
     *   }
     * })
     * 
     */
    delete<T extends SubscriberDeleteArgs>(args: SelectSubset<T, SubscriberDeleteArgs<ExtArgs>>): Prisma__SubscriberClient<$Result.GetResult<Prisma.$SubscriberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subscriber.
     * @param {SubscriberUpdateArgs} args - Arguments to update one Subscriber.
     * @example
     * // Update one Subscriber
     * const subscriber = await prisma.subscriber.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscriberUpdateArgs>(args: SelectSubset<T, SubscriberUpdateArgs<ExtArgs>>): Prisma__SubscriberClient<$Result.GetResult<Prisma.$SubscriberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subscribers.
     * @param {SubscriberDeleteManyArgs} args - Arguments to filter Subscribers to delete.
     * @example
     * // Delete a few Subscribers
     * const { count } = await prisma.subscriber.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscriberDeleteManyArgs>(args?: SelectSubset<T, SubscriberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscribers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscribers
     * const subscriber = await prisma.subscriber.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscriberUpdateManyArgs>(args: SelectSubset<T, SubscriberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscribers and returns the data updated in the database.
     * @param {SubscriberUpdateManyAndReturnArgs} args - Arguments to update many Subscribers.
     * @example
     * // Update many Subscribers
     * const subscriber = await prisma.subscriber.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subscribers and only return the `id`
     * const subscriberWithIdOnly = await prisma.subscriber.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubscriberUpdateManyAndReturnArgs>(args: SelectSubset<T, SubscriberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subscriber.
     * @param {SubscriberUpsertArgs} args - Arguments to update or create a Subscriber.
     * @example
     * // Update or create a Subscriber
     * const subscriber = await prisma.subscriber.upsert({
     *   create: {
     *     // ... data to create a Subscriber
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscriber we want to update
     *   }
     * })
     */
    upsert<T extends SubscriberUpsertArgs>(args: SelectSubset<T, SubscriberUpsertArgs<ExtArgs>>): Prisma__SubscriberClient<$Result.GetResult<Prisma.$SubscriberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subscribers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriberCountArgs} args - Arguments to filter Subscribers to count.
     * @example
     * // Count the number of Subscribers
     * const count = await prisma.subscriber.count({
     *   where: {
     *     // ... the filter for the Subscribers we want to count
     *   }
     * })
    **/
    count<T extends SubscriberCountArgs>(
      args?: Subset<T, SubscriberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subscriber.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubscriberAggregateArgs>(args: Subset<T, SubscriberAggregateArgs>): Prisma.PrismaPromise<GetSubscriberAggregateType<T>>

    /**
     * Group by Subscriber.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubscriberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriberGroupByArgs['orderBy'] }
        : { orderBy?: SubscriberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubscriberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subscriber model
   */
  readonly fields: SubscriberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subscriber.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Subscriber model
   */
  interface SubscriberFieldRefs {
    readonly id: FieldRef<"Subscriber", 'String'>
    readonly email: FieldRef<"Subscriber", 'String'>
    readonly createdAt: FieldRef<"Subscriber", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Subscriber findUnique
   */
  export type SubscriberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriber
     */
    select?: SubscriberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriber
     */
    omit?: SubscriberOmit<ExtArgs> | null
    /**
     * Filter, which Subscriber to fetch.
     */
    where: SubscriberWhereUniqueInput
  }

  /**
   * Subscriber findUniqueOrThrow
   */
  export type SubscriberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriber
     */
    select?: SubscriberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriber
     */
    omit?: SubscriberOmit<ExtArgs> | null
    /**
     * Filter, which Subscriber to fetch.
     */
    where: SubscriberWhereUniqueInput
  }

  /**
   * Subscriber findFirst
   */
  export type SubscriberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriber
     */
    select?: SubscriberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriber
     */
    omit?: SubscriberOmit<ExtArgs> | null
    /**
     * Filter, which Subscriber to fetch.
     */
    where?: SubscriberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscribers to fetch.
     */
    orderBy?: SubscriberOrderByWithRelationInput | SubscriberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscribers.
     */
    cursor?: SubscriberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscribers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscribers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscribers.
     */
    distinct?: SubscriberScalarFieldEnum | SubscriberScalarFieldEnum[]
  }

  /**
   * Subscriber findFirstOrThrow
   */
  export type SubscriberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriber
     */
    select?: SubscriberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriber
     */
    omit?: SubscriberOmit<ExtArgs> | null
    /**
     * Filter, which Subscriber to fetch.
     */
    where?: SubscriberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscribers to fetch.
     */
    orderBy?: SubscriberOrderByWithRelationInput | SubscriberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscribers.
     */
    cursor?: SubscriberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscribers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscribers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscribers.
     */
    distinct?: SubscriberScalarFieldEnum | SubscriberScalarFieldEnum[]
  }

  /**
   * Subscriber findMany
   */
  export type SubscriberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriber
     */
    select?: SubscriberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriber
     */
    omit?: SubscriberOmit<ExtArgs> | null
    /**
     * Filter, which Subscribers to fetch.
     */
    where?: SubscriberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscribers to fetch.
     */
    orderBy?: SubscriberOrderByWithRelationInput | SubscriberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subscribers.
     */
    cursor?: SubscriberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscribers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscribers.
     */
    skip?: number
    distinct?: SubscriberScalarFieldEnum | SubscriberScalarFieldEnum[]
  }

  /**
   * Subscriber create
   */
  export type SubscriberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriber
     */
    select?: SubscriberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriber
     */
    omit?: SubscriberOmit<ExtArgs> | null
    /**
     * The data needed to create a Subscriber.
     */
    data: XOR<SubscriberCreateInput, SubscriberUncheckedCreateInput>
  }

  /**
   * Subscriber createMany
   */
  export type SubscriberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subscribers.
     */
    data: SubscriberCreateManyInput | SubscriberCreateManyInput[]
  }

  /**
   * Subscriber createManyAndReturn
   */
  export type SubscriberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriber
     */
    select?: SubscriberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriber
     */
    omit?: SubscriberOmit<ExtArgs> | null
    /**
     * The data used to create many Subscribers.
     */
    data: SubscriberCreateManyInput | SubscriberCreateManyInput[]
  }

  /**
   * Subscriber update
   */
  export type SubscriberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriber
     */
    select?: SubscriberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriber
     */
    omit?: SubscriberOmit<ExtArgs> | null
    /**
     * The data needed to update a Subscriber.
     */
    data: XOR<SubscriberUpdateInput, SubscriberUncheckedUpdateInput>
    /**
     * Choose, which Subscriber to update.
     */
    where: SubscriberWhereUniqueInput
  }

  /**
   * Subscriber updateMany
   */
  export type SubscriberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subscribers.
     */
    data: XOR<SubscriberUpdateManyMutationInput, SubscriberUncheckedUpdateManyInput>
    /**
     * Filter which Subscribers to update
     */
    where?: SubscriberWhereInput
    /**
     * Limit how many Subscribers to update.
     */
    limit?: number
  }

  /**
   * Subscriber updateManyAndReturn
   */
  export type SubscriberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriber
     */
    select?: SubscriberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriber
     */
    omit?: SubscriberOmit<ExtArgs> | null
    /**
     * The data used to update Subscribers.
     */
    data: XOR<SubscriberUpdateManyMutationInput, SubscriberUncheckedUpdateManyInput>
    /**
     * Filter which Subscribers to update
     */
    where?: SubscriberWhereInput
    /**
     * Limit how many Subscribers to update.
     */
    limit?: number
  }

  /**
   * Subscriber upsert
   */
  export type SubscriberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriber
     */
    select?: SubscriberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriber
     */
    omit?: SubscriberOmit<ExtArgs> | null
    /**
     * The filter to search for the Subscriber to update in case it exists.
     */
    where: SubscriberWhereUniqueInput
    /**
     * In case the Subscriber found by the `where` argument doesn't exist, create a new Subscriber with this data.
     */
    create: XOR<SubscriberCreateInput, SubscriberUncheckedCreateInput>
    /**
     * In case the Subscriber was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriberUpdateInput, SubscriberUncheckedUpdateInput>
  }

  /**
   * Subscriber delete
   */
  export type SubscriberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriber
     */
    select?: SubscriberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriber
     */
    omit?: SubscriberOmit<ExtArgs> | null
    /**
     * Filter which Subscriber to delete.
     */
    where: SubscriberWhereUniqueInput
  }

  /**
   * Subscriber deleteMany
   */
  export type SubscriberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscribers to delete
     */
    where?: SubscriberWhereInput
    /**
     * Limit how many Subscribers to delete.
     */
    limit?: number
  }

  /**
   * Subscriber without action
   */
  export type SubscriberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriber
     */
    select?: SubscriberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriber
     */
    omit?: SubscriberOmit<ExtArgs> | null
  }


  /**
   * Model Testimonial
   */

  export type AggregateTestimonial = {
    _count: TestimonialCountAggregateOutputType | null
    _avg: TestimonialAvgAggregateOutputType | null
    _sum: TestimonialSumAggregateOutputType | null
    _min: TestimonialMinAggregateOutputType | null
    _max: TestimonialMaxAggregateOutputType | null
  }

  export type TestimonialAvgAggregateOutputType = {
    rating: number | null
  }

  export type TestimonialSumAggregateOutputType = {
    rating: number | null
  }

  export type TestimonialMinAggregateOutputType = {
    id: string | null
    name: string | null
    role: string | null
    rating: number | null
    comment: string | null
    active: boolean | null
    createdAt: Date | null
  }

  export type TestimonialMaxAggregateOutputType = {
    id: string | null
    name: string | null
    role: string | null
    rating: number | null
    comment: string | null
    active: boolean | null
    createdAt: Date | null
  }

  export type TestimonialCountAggregateOutputType = {
    id: number
    name: number
    role: number
    rating: number
    comment: number
    active: number
    createdAt: number
    _all: number
  }


  export type TestimonialAvgAggregateInputType = {
    rating?: true
  }

  export type TestimonialSumAggregateInputType = {
    rating?: true
  }

  export type TestimonialMinAggregateInputType = {
    id?: true
    name?: true
    role?: true
    rating?: true
    comment?: true
    active?: true
    createdAt?: true
  }

  export type TestimonialMaxAggregateInputType = {
    id?: true
    name?: true
    role?: true
    rating?: true
    comment?: true
    active?: true
    createdAt?: true
  }

  export type TestimonialCountAggregateInputType = {
    id?: true
    name?: true
    role?: true
    rating?: true
    comment?: true
    active?: true
    createdAt?: true
    _all?: true
  }

  export type TestimonialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Testimonial to aggregate.
     */
    where?: TestimonialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Testimonials to fetch.
     */
    orderBy?: TestimonialOrderByWithRelationInput | TestimonialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TestimonialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Testimonials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Testimonials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Testimonials
    **/
    _count?: true | TestimonialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TestimonialAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TestimonialSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestimonialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestimonialMaxAggregateInputType
  }

  export type GetTestimonialAggregateType<T extends TestimonialAggregateArgs> = {
        [P in keyof T & keyof AggregateTestimonial]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTestimonial[P]>
      : GetScalarType<T[P], AggregateTestimonial[P]>
  }




  export type TestimonialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestimonialWhereInput
    orderBy?: TestimonialOrderByWithAggregationInput | TestimonialOrderByWithAggregationInput[]
    by: TestimonialScalarFieldEnum[] | TestimonialScalarFieldEnum
    having?: TestimonialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestimonialCountAggregateInputType | true
    _avg?: TestimonialAvgAggregateInputType
    _sum?: TestimonialSumAggregateInputType
    _min?: TestimonialMinAggregateInputType
    _max?: TestimonialMaxAggregateInputType
  }

  export type TestimonialGroupByOutputType = {
    id: string
    name: string
    role: string
    rating: number
    comment: string
    active: boolean
    createdAt: Date
    _count: TestimonialCountAggregateOutputType | null
    _avg: TestimonialAvgAggregateOutputType | null
    _sum: TestimonialSumAggregateOutputType | null
    _min: TestimonialMinAggregateOutputType | null
    _max: TestimonialMaxAggregateOutputType | null
  }

  type GetTestimonialGroupByPayload<T extends TestimonialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestimonialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestimonialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestimonialGroupByOutputType[P]>
            : GetScalarType<T[P], TestimonialGroupByOutputType[P]>
        }
      >
    >


  export type TestimonialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    role?: boolean
    rating?: boolean
    comment?: boolean
    active?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["testimonial"]>

  export type TestimonialSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    role?: boolean
    rating?: boolean
    comment?: boolean
    active?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["testimonial"]>

  export type TestimonialSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    role?: boolean
    rating?: boolean
    comment?: boolean
    active?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["testimonial"]>

  export type TestimonialSelectScalar = {
    id?: boolean
    name?: boolean
    role?: boolean
    rating?: boolean
    comment?: boolean
    active?: boolean
    createdAt?: boolean
  }

  export type TestimonialOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "role" | "rating" | "comment" | "active" | "createdAt", ExtArgs["result"]["testimonial"]>

  export type $TestimonialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Testimonial"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      role: string
      rating: number
      comment: string
      active: boolean
      createdAt: Date
    }, ExtArgs["result"]["testimonial"]>
    composites: {}
  }

  type TestimonialGetPayload<S extends boolean | null | undefined | TestimonialDefaultArgs> = $Result.GetResult<Prisma.$TestimonialPayload, S>

  type TestimonialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TestimonialFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TestimonialCountAggregateInputType | true
    }

  export interface TestimonialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Testimonial'], meta: { name: 'Testimonial' } }
    /**
     * Find zero or one Testimonial that matches the filter.
     * @param {TestimonialFindUniqueArgs} args - Arguments to find a Testimonial
     * @example
     * // Get one Testimonial
     * const testimonial = await prisma.testimonial.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TestimonialFindUniqueArgs>(args: SelectSubset<T, TestimonialFindUniqueArgs<ExtArgs>>): Prisma__TestimonialClient<$Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Testimonial that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TestimonialFindUniqueOrThrowArgs} args - Arguments to find a Testimonial
     * @example
     * // Get one Testimonial
     * const testimonial = await prisma.testimonial.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TestimonialFindUniqueOrThrowArgs>(args: SelectSubset<T, TestimonialFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TestimonialClient<$Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Testimonial that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimonialFindFirstArgs} args - Arguments to find a Testimonial
     * @example
     * // Get one Testimonial
     * const testimonial = await prisma.testimonial.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TestimonialFindFirstArgs>(args?: SelectSubset<T, TestimonialFindFirstArgs<ExtArgs>>): Prisma__TestimonialClient<$Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Testimonial that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimonialFindFirstOrThrowArgs} args - Arguments to find a Testimonial
     * @example
     * // Get one Testimonial
     * const testimonial = await prisma.testimonial.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TestimonialFindFirstOrThrowArgs>(args?: SelectSubset<T, TestimonialFindFirstOrThrowArgs<ExtArgs>>): Prisma__TestimonialClient<$Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Testimonials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimonialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Testimonials
     * const testimonials = await prisma.testimonial.findMany()
     * 
     * // Get first 10 Testimonials
     * const testimonials = await prisma.testimonial.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testimonialWithIdOnly = await prisma.testimonial.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TestimonialFindManyArgs>(args?: SelectSubset<T, TestimonialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Testimonial.
     * @param {TestimonialCreateArgs} args - Arguments to create a Testimonial.
     * @example
     * // Create one Testimonial
     * const Testimonial = await prisma.testimonial.create({
     *   data: {
     *     // ... data to create a Testimonial
     *   }
     * })
     * 
     */
    create<T extends TestimonialCreateArgs>(args: SelectSubset<T, TestimonialCreateArgs<ExtArgs>>): Prisma__TestimonialClient<$Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Testimonials.
     * @param {TestimonialCreateManyArgs} args - Arguments to create many Testimonials.
     * @example
     * // Create many Testimonials
     * const testimonial = await prisma.testimonial.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TestimonialCreateManyArgs>(args?: SelectSubset<T, TestimonialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Testimonials and returns the data saved in the database.
     * @param {TestimonialCreateManyAndReturnArgs} args - Arguments to create many Testimonials.
     * @example
     * // Create many Testimonials
     * const testimonial = await prisma.testimonial.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Testimonials and only return the `id`
     * const testimonialWithIdOnly = await prisma.testimonial.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TestimonialCreateManyAndReturnArgs>(args?: SelectSubset<T, TestimonialCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Testimonial.
     * @param {TestimonialDeleteArgs} args - Arguments to delete one Testimonial.
     * @example
     * // Delete one Testimonial
     * const Testimonial = await prisma.testimonial.delete({
     *   where: {
     *     // ... filter to delete one Testimonial
     *   }
     * })
     * 
     */
    delete<T extends TestimonialDeleteArgs>(args: SelectSubset<T, TestimonialDeleteArgs<ExtArgs>>): Prisma__TestimonialClient<$Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Testimonial.
     * @param {TestimonialUpdateArgs} args - Arguments to update one Testimonial.
     * @example
     * // Update one Testimonial
     * const testimonial = await prisma.testimonial.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TestimonialUpdateArgs>(args: SelectSubset<T, TestimonialUpdateArgs<ExtArgs>>): Prisma__TestimonialClient<$Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Testimonials.
     * @param {TestimonialDeleteManyArgs} args - Arguments to filter Testimonials to delete.
     * @example
     * // Delete a few Testimonials
     * const { count } = await prisma.testimonial.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TestimonialDeleteManyArgs>(args?: SelectSubset<T, TestimonialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Testimonials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimonialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Testimonials
     * const testimonial = await prisma.testimonial.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TestimonialUpdateManyArgs>(args: SelectSubset<T, TestimonialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Testimonials and returns the data updated in the database.
     * @param {TestimonialUpdateManyAndReturnArgs} args - Arguments to update many Testimonials.
     * @example
     * // Update many Testimonials
     * const testimonial = await prisma.testimonial.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Testimonials and only return the `id`
     * const testimonialWithIdOnly = await prisma.testimonial.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TestimonialUpdateManyAndReturnArgs>(args: SelectSubset<T, TestimonialUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Testimonial.
     * @param {TestimonialUpsertArgs} args - Arguments to update or create a Testimonial.
     * @example
     * // Update or create a Testimonial
     * const testimonial = await prisma.testimonial.upsert({
     *   create: {
     *     // ... data to create a Testimonial
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Testimonial we want to update
     *   }
     * })
     */
    upsert<T extends TestimonialUpsertArgs>(args: SelectSubset<T, TestimonialUpsertArgs<ExtArgs>>): Prisma__TestimonialClient<$Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Testimonials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimonialCountArgs} args - Arguments to filter Testimonials to count.
     * @example
     * // Count the number of Testimonials
     * const count = await prisma.testimonial.count({
     *   where: {
     *     // ... the filter for the Testimonials we want to count
     *   }
     * })
    **/
    count<T extends TestimonialCountArgs>(
      args?: Subset<T, TestimonialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestimonialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Testimonial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimonialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TestimonialAggregateArgs>(args: Subset<T, TestimonialAggregateArgs>): Prisma.PrismaPromise<GetTestimonialAggregateType<T>>

    /**
     * Group by Testimonial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimonialGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TestimonialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestimonialGroupByArgs['orderBy'] }
        : { orderBy?: TestimonialGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TestimonialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestimonialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Testimonial model
   */
  readonly fields: TestimonialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Testimonial.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TestimonialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Testimonial model
   */
  interface TestimonialFieldRefs {
    readonly id: FieldRef<"Testimonial", 'String'>
    readonly name: FieldRef<"Testimonial", 'String'>
    readonly role: FieldRef<"Testimonial", 'String'>
    readonly rating: FieldRef<"Testimonial", 'Int'>
    readonly comment: FieldRef<"Testimonial", 'String'>
    readonly active: FieldRef<"Testimonial", 'Boolean'>
    readonly createdAt: FieldRef<"Testimonial", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Testimonial findUnique
   */
  export type TestimonialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonial
     */
    omit?: TestimonialOmit<ExtArgs> | null
    /**
     * Filter, which Testimonial to fetch.
     */
    where: TestimonialWhereUniqueInput
  }

  /**
   * Testimonial findUniqueOrThrow
   */
  export type TestimonialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonial
     */
    omit?: TestimonialOmit<ExtArgs> | null
    /**
     * Filter, which Testimonial to fetch.
     */
    where: TestimonialWhereUniqueInput
  }

  /**
   * Testimonial findFirst
   */
  export type TestimonialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonial
     */
    omit?: TestimonialOmit<ExtArgs> | null
    /**
     * Filter, which Testimonial to fetch.
     */
    where?: TestimonialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Testimonials to fetch.
     */
    orderBy?: TestimonialOrderByWithRelationInput | TestimonialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Testimonials.
     */
    cursor?: TestimonialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Testimonials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Testimonials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Testimonials.
     */
    distinct?: TestimonialScalarFieldEnum | TestimonialScalarFieldEnum[]
  }

  /**
   * Testimonial findFirstOrThrow
   */
  export type TestimonialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonial
     */
    omit?: TestimonialOmit<ExtArgs> | null
    /**
     * Filter, which Testimonial to fetch.
     */
    where?: TestimonialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Testimonials to fetch.
     */
    orderBy?: TestimonialOrderByWithRelationInput | TestimonialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Testimonials.
     */
    cursor?: TestimonialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Testimonials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Testimonials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Testimonials.
     */
    distinct?: TestimonialScalarFieldEnum | TestimonialScalarFieldEnum[]
  }

  /**
   * Testimonial findMany
   */
  export type TestimonialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonial
     */
    omit?: TestimonialOmit<ExtArgs> | null
    /**
     * Filter, which Testimonials to fetch.
     */
    where?: TestimonialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Testimonials to fetch.
     */
    orderBy?: TestimonialOrderByWithRelationInput | TestimonialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Testimonials.
     */
    cursor?: TestimonialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Testimonials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Testimonials.
     */
    skip?: number
    distinct?: TestimonialScalarFieldEnum | TestimonialScalarFieldEnum[]
  }

  /**
   * Testimonial create
   */
  export type TestimonialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonial
     */
    omit?: TestimonialOmit<ExtArgs> | null
    /**
     * The data needed to create a Testimonial.
     */
    data: XOR<TestimonialCreateInput, TestimonialUncheckedCreateInput>
  }

  /**
   * Testimonial createMany
   */
  export type TestimonialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Testimonials.
     */
    data: TestimonialCreateManyInput | TestimonialCreateManyInput[]
  }

  /**
   * Testimonial createManyAndReturn
   */
  export type TestimonialCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonial
     */
    omit?: TestimonialOmit<ExtArgs> | null
    /**
     * The data used to create many Testimonials.
     */
    data: TestimonialCreateManyInput | TestimonialCreateManyInput[]
  }

  /**
   * Testimonial update
   */
  export type TestimonialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonial
     */
    omit?: TestimonialOmit<ExtArgs> | null
    /**
     * The data needed to update a Testimonial.
     */
    data: XOR<TestimonialUpdateInput, TestimonialUncheckedUpdateInput>
    /**
     * Choose, which Testimonial to update.
     */
    where: TestimonialWhereUniqueInput
  }

  /**
   * Testimonial updateMany
   */
  export type TestimonialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Testimonials.
     */
    data: XOR<TestimonialUpdateManyMutationInput, TestimonialUncheckedUpdateManyInput>
    /**
     * Filter which Testimonials to update
     */
    where?: TestimonialWhereInput
    /**
     * Limit how many Testimonials to update.
     */
    limit?: number
  }

  /**
   * Testimonial updateManyAndReturn
   */
  export type TestimonialUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonial
     */
    omit?: TestimonialOmit<ExtArgs> | null
    /**
     * The data used to update Testimonials.
     */
    data: XOR<TestimonialUpdateManyMutationInput, TestimonialUncheckedUpdateManyInput>
    /**
     * Filter which Testimonials to update
     */
    where?: TestimonialWhereInput
    /**
     * Limit how many Testimonials to update.
     */
    limit?: number
  }

  /**
   * Testimonial upsert
   */
  export type TestimonialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonial
     */
    omit?: TestimonialOmit<ExtArgs> | null
    /**
     * The filter to search for the Testimonial to update in case it exists.
     */
    where: TestimonialWhereUniqueInput
    /**
     * In case the Testimonial found by the `where` argument doesn't exist, create a new Testimonial with this data.
     */
    create: XOR<TestimonialCreateInput, TestimonialUncheckedCreateInput>
    /**
     * In case the Testimonial was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TestimonialUpdateInput, TestimonialUncheckedUpdateInput>
  }

  /**
   * Testimonial delete
   */
  export type TestimonialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonial
     */
    omit?: TestimonialOmit<ExtArgs> | null
    /**
     * Filter which Testimonial to delete.
     */
    where: TestimonialWhereUniqueInput
  }

  /**
   * Testimonial deleteMany
   */
  export type TestimonialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Testimonials to delete
     */
    where?: TestimonialWhereInput
    /**
     * Limit how many Testimonials to delete.
     */
    limit?: number
  }

  /**
   * Testimonial without action
   */
  export type TestimonialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonial
     */
    omit?: TestimonialOmit<ExtArgs> | null
  }


  /**
   * Model BookingOrder
   */

  export type AggregateBookingOrder = {
    _count: BookingOrderCountAggregateOutputType | null
    _avg: BookingOrderAvgAggregateOutputType | null
    _sum: BookingOrderSumAggregateOutputType | null
    _min: BookingOrderMinAggregateOutputType | null
    _max: BookingOrderMaxAggregateOutputType | null
  }

  export type BookingOrderAvgAggregateOutputType = {
    amount: number | null
  }

  export type BookingOrderSumAggregateOutputType = {
    amount: number | null
  }

  export type BookingOrderMinAggregateOutputType = {
    id: string | null
    flatId: string | null
    orderNumber: string | null
    amount: number | null
    currency: string | null
    provider: string | null
    razorpayOrderId: string | null
    razorpayPaymentId: string | null
    razorpaySignature: string | null
    buyerName: string | null
    buyerPhone: string | null
    buyerEmail: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookingOrderMaxAggregateOutputType = {
    id: string | null
    flatId: string | null
    orderNumber: string | null
    amount: number | null
    currency: string | null
    provider: string | null
    razorpayOrderId: string | null
    razorpayPaymentId: string | null
    razorpaySignature: string | null
    buyerName: string | null
    buyerPhone: string | null
    buyerEmail: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookingOrderCountAggregateOutputType = {
    id: number
    flatId: number
    orderNumber: number
    amount: number
    currency: number
    provider: number
    razorpayOrderId: number
    razorpayPaymentId: number
    razorpaySignature: number
    buyerName: number
    buyerPhone: number
    buyerEmail: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BookingOrderAvgAggregateInputType = {
    amount?: true
  }

  export type BookingOrderSumAggregateInputType = {
    amount?: true
  }

  export type BookingOrderMinAggregateInputType = {
    id?: true
    flatId?: true
    orderNumber?: true
    amount?: true
    currency?: true
    provider?: true
    razorpayOrderId?: true
    razorpayPaymentId?: true
    razorpaySignature?: true
    buyerName?: true
    buyerPhone?: true
    buyerEmail?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookingOrderMaxAggregateInputType = {
    id?: true
    flatId?: true
    orderNumber?: true
    amount?: true
    currency?: true
    provider?: true
    razorpayOrderId?: true
    razorpayPaymentId?: true
    razorpaySignature?: true
    buyerName?: true
    buyerPhone?: true
    buyerEmail?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookingOrderCountAggregateInputType = {
    id?: true
    flatId?: true
    orderNumber?: true
    amount?: true
    currency?: true
    provider?: true
    razorpayOrderId?: true
    razorpayPaymentId?: true
    razorpaySignature?: true
    buyerName?: true
    buyerPhone?: true
    buyerEmail?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BookingOrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookingOrder to aggregate.
     */
    where?: BookingOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingOrders to fetch.
     */
    orderBy?: BookingOrderOrderByWithRelationInput | BookingOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BookingOrders
    **/
    _count?: true | BookingOrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingOrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingOrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingOrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingOrderMaxAggregateInputType
  }

  export type GetBookingOrderAggregateType<T extends BookingOrderAggregateArgs> = {
        [P in keyof T & keyof AggregateBookingOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookingOrder[P]>
      : GetScalarType<T[P], AggregateBookingOrder[P]>
  }




  export type BookingOrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingOrderWhereInput
    orderBy?: BookingOrderOrderByWithAggregationInput | BookingOrderOrderByWithAggregationInput[]
    by: BookingOrderScalarFieldEnum[] | BookingOrderScalarFieldEnum
    having?: BookingOrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingOrderCountAggregateInputType | true
    _avg?: BookingOrderAvgAggregateInputType
    _sum?: BookingOrderSumAggregateInputType
    _min?: BookingOrderMinAggregateInputType
    _max?: BookingOrderMaxAggregateInputType
  }

  export type BookingOrderGroupByOutputType = {
    id: string
    flatId: string
    orderNumber: string
    amount: number
    currency: string
    provider: string
    razorpayOrderId: string | null
    razorpayPaymentId: string | null
    razorpaySignature: string | null
    buyerName: string
    buyerPhone: string
    buyerEmail: string | null
    status: string
    createdAt: Date
    updatedAt: Date
    _count: BookingOrderCountAggregateOutputType | null
    _avg: BookingOrderAvgAggregateOutputType | null
    _sum: BookingOrderSumAggregateOutputType | null
    _min: BookingOrderMinAggregateOutputType | null
    _max: BookingOrderMaxAggregateOutputType | null
  }

  type GetBookingOrderGroupByPayload<T extends BookingOrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingOrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingOrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingOrderGroupByOutputType[P]>
            : GetScalarType<T[P], BookingOrderGroupByOutputType[P]>
        }
      >
    >


  export type BookingOrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    flatId?: boolean
    orderNumber?: boolean
    amount?: boolean
    currency?: boolean
    provider?: boolean
    razorpayOrderId?: boolean
    razorpayPaymentId?: boolean
    razorpaySignature?: boolean
    buyerName?: boolean
    buyerPhone?: boolean
    buyerEmail?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    flat?: boolean | FlatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookingOrder"]>

  export type BookingOrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    flatId?: boolean
    orderNumber?: boolean
    amount?: boolean
    currency?: boolean
    provider?: boolean
    razorpayOrderId?: boolean
    razorpayPaymentId?: boolean
    razorpaySignature?: boolean
    buyerName?: boolean
    buyerPhone?: boolean
    buyerEmail?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    flat?: boolean | FlatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookingOrder"]>

  export type BookingOrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    flatId?: boolean
    orderNumber?: boolean
    amount?: boolean
    currency?: boolean
    provider?: boolean
    razorpayOrderId?: boolean
    razorpayPaymentId?: boolean
    razorpaySignature?: boolean
    buyerName?: boolean
    buyerPhone?: boolean
    buyerEmail?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    flat?: boolean | FlatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookingOrder"]>

  export type BookingOrderSelectScalar = {
    id?: boolean
    flatId?: boolean
    orderNumber?: boolean
    amount?: boolean
    currency?: boolean
    provider?: boolean
    razorpayOrderId?: boolean
    razorpayPaymentId?: boolean
    razorpaySignature?: boolean
    buyerName?: boolean
    buyerPhone?: boolean
    buyerEmail?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BookingOrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "flatId" | "orderNumber" | "amount" | "currency" | "provider" | "razorpayOrderId" | "razorpayPaymentId" | "razorpaySignature" | "buyerName" | "buyerPhone" | "buyerEmail" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["bookingOrder"]>
  export type BookingOrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flat?: boolean | FlatDefaultArgs<ExtArgs>
  }
  export type BookingOrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flat?: boolean | FlatDefaultArgs<ExtArgs>
  }
  export type BookingOrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flat?: boolean | FlatDefaultArgs<ExtArgs>
  }

  export type $BookingOrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BookingOrder"
    objects: {
      flat: Prisma.$FlatPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      flatId: string
      orderNumber: string
      amount: number
      currency: string
      provider: string
      razorpayOrderId: string | null
      razorpayPaymentId: string | null
      razorpaySignature: string | null
      buyerName: string
      buyerPhone: string
      buyerEmail: string | null
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["bookingOrder"]>
    composites: {}
  }

  type BookingOrderGetPayload<S extends boolean | null | undefined | BookingOrderDefaultArgs> = $Result.GetResult<Prisma.$BookingOrderPayload, S>

  type BookingOrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingOrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingOrderCountAggregateInputType | true
    }

  export interface BookingOrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BookingOrder'], meta: { name: 'BookingOrder' } }
    /**
     * Find zero or one BookingOrder that matches the filter.
     * @param {BookingOrderFindUniqueArgs} args - Arguments to find a BookingOrder
     * @example
     * // Get one BookingOrder
     * const bookingOrder = await prisma.bookingOrder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingOrderFindUniqueArgs>(args: SelectSubset<T, BookingOrderFindUniqueArgs<ExtArgs>>): Prisma__BookingOrderClient<$Result.GetResult<Prisma.$BookingOrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BookingOrder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingOrderFindUniqueOrThrowArgs} args - Arguments to find a BookingOrder
     * @example
     * // Get one BookingOrder
     * const bookingOrder = await prisma.bookingOrder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingOrderFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingOrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingOrderClient<$Result.GetResult<Prisma.$BookingOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookingOrder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingOrderFindFirstArgs} args - Arguments to find a BookingOrder
     * @example
     * // Get one BookingOrder
     * const bookingOrder = await prisma.bookingOrder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingOrderFindFirstArgs>(args?: SelectSubset<T, BookingOrderFindFirstArgs<ExtArgs>>): Prisma__BookingOrderClient<$Result.GetResult<Prisma.$BookingOrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookingOrder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingOrderFindFirstOrThrowArgs} args - Arguments to find a BookingOrder
     * @example
     * // Get one BookingOrder
     * const bookingOrder = await prisma.bookingOrder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingOrderFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingOrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingOrderClient<$Result.GetResult<Prisma.$BookingOrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BookingOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingOrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BookingOrders
     * const bookingOrders = await prisma.bookingOrder.findMany()
     * 
     * // Get first 10 BookingOrders
     * const bookingOrders = await prisma.bookingOrder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingOrderWithIdOnly = await prisma.bookingOrder.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingOrderFindManyArgs>(args?: SelectSubset<T, BookingOrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BookingOrder.
     * @param {BookingOrderCreateArgs} args - Arguments to create a BookingOrder.
     * @example
     * // Create one BookingOrder
     * const BookingOrder = await prisma.bookingOrder.create({
     *   data: {
     *     // ... data to create a BookingOrder
     *   }
     * })
     * 
     */
    create<T extends BookingOrderCreateArgs>(args: SelectSubset<T, BookingOrderCreateArgs<ExtArgs>>): Prisma__BookingOrderClient<$Result.GetResult<Prisma.$BookingOrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BookingOrders.
     * @param {BookingOrderCreateManyArgs} args - Arguments to create many BookingOrders.
     * @example
     * // Create many BookingOrders
     * const bookingOrder = await prisma.bookingOrder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingOrderCreateManyArgs>(args?: SelectSubset<T, BookingOrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BookingOrders and returns the data saved in the database.
     * @param {BookingOrderCreateManyAndReturnArgs} args - Arguments to create many BookingOrders.
     * @example
     * // Create many BookingOrders
     * const bookingOrder = await prisma.bookingOrder.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BookingOrders and only return the `id`
     * const bookingOrderWithIdOnly = await prisma.bookingOrder.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookingOrderCreateManyAndReturnArgs>(args?: SelectSubset<T, BookingOrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingOrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BookingOrder.
     * @param {BookingOrderDeleteArgs} args - Arguments to delete one BookingOrder.
     * @example
     * // Delete one BookingOrder
     * const BookingOrder = await prisma.bookingOrder.delete({
     *   where: {
     *     // ... filter to delete one BookingOrder
     *   }
     * })
     * 
     */
    delete<T extends BookingOrderDeleteArgs>(args: SelectSubset<T, BookingOrderDeleteArgs<ExtArgs>>): Prisma__BookingOrderClient<$Result.GetResult<Prisma.$BookingOrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BookingOrder.
     * @param {BookingOrderUpdateArgs} args - Arguments to update one BookingOrder.
     * @example
     * // Update one BookingOrder
     * const bookingOrder = await prisma.bookingOrder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingOrderUpdateArgs>(args: SelectSubset<T, BookingOrderUpdateArgs<ExtArgs>>): Prisma__BookingOrderClient<$Result.GetResult<Prisma.$BookingOrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BookingOrders.
     * @param {BookingOrderDeleteManyArgs} args - Arguments to filter BookingOrders to delete.
     * @example
     * // Delete a few BookingOrders
     * const { count } = await prisma.bookingOrder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingOrderDeleteManyArgs>(args?: SelectSubset<T, BookingOrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookingOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingOrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BookingOrders
     * const bookingOrder = await prisma.bookingOrder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingOrderUpdateManyArgs>(args: SelectSubset<T, BookingOrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookingOrders and returns the data updated in the database.
     * @param {BookingOrderUpdateManyAndReturnArgs} args - Arguments to update many BookingOrders.
     * @example
     * // Update many BookingOrders
     * const bookingOrder = await prisma.bookingOrder.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BookingOrders and only return the `id`
     * const bookingOrderWithIdOnly = await prisma.bookingOrder.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BookingOrderUpdateManyAndReturnArgs>(args: SelectSubset<T, BookingOrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingOrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BookingOrder.
     * @param {BookingOrderUpsertArgs} args - Arguments to update or create a BookingOrder.
     * @example
     * // Update or create a BookingOrder
     * const bookingOrder = await prisma.bookingOrder.upsert({
     *   create: {
     *     // ... data to create a BookingOrder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BookingOrder we want to update
     *   }
     * })
     */
    upsert<T extends BookingOrderUpsertArgs>(args: SelectSubset<T, BookingOrderUpsertArgs<ExtArgs>>): Prisma__BookingOrderClient<$Result.GetResult<Prisma.$BookingOrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BookingOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingOrderCountArgs} args - Arguments to filter BookingOrders to count.
     * @example
     * // Count the number of BookingOrders
     * const count = await prisma.bookingOrder.count({
     *   where: {
     *     // ... the filter for the BookingOrders we want to count
     *   }
     * })
    **/
    count<T extends BookingOrderCountArgs>(
      args?: Subset<T, BookingOrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingOrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BookingOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingOrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookingOrderAggregateArgs>(args: Subset<T, BookingOrderAggregateArgs>): Prisma.PrismaPromise<GetBookingOrderAggregateType<T>>

    /**
     * Group by BookingOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingOrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookingOrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingOrderGroupByArgs['orderBy'] }
        : { orderBy?: BookingOrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookingOrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BookingOrder model
   */
  readonly fields: BookingOrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BookingOrder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingOrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    flat<T extends FlatDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FlatDefaultArgs<ExtArgs>>): Prisma__FlatClient<$Result.GetResult<Prisma.$FlatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BookingOrder model
   */
  interface BookingOrderFieldRefs {
    readonly id: FieldRef<"BookingOrder", 'String'>
    readonly flatId: FieldRef<"BookingOrder", 'String'>
    readonly orderNumber: FieldRef<"BookingOrder", 'String'>
    readonly amount: FieldRef<"BookingOrder", 'Int'>
    readonly currency: FieldRef<"BookingOrder", 'String'>
    readonly provider: FieldRef<"BookingOrder", 'String'>
    readonly razorpayOrderId: FieldRef<"BookingOrder", 'String'>
    readonly razorpayPaymentId: FieldRef<"BookingOrder", 'String'>
    readonly razorpaySignature: FieldRef<"BookingOrder", 'String'>
    readonly buyerName: FieldRef<"BookingOrder", 'String'>
    readonly buyerPhone: FieldRef<"BookingOrder", 'String'>
    readonly buyerEmail: FieldRef<"BookingOrder", 'String'>
    readonly status: FieldRef<"BookingOrder", 'String'>
    readonly createdAt: FieldRef<"BookingOrder", 'DateTime'>
    readonly updatedAt: FieldRef<"BookingOrder", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BookingOrder findUnique
   */
  export type BookingOrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingOrder
     */
    select?: BookingOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingOrder
     */
    omit?: BookingOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingOrderInclude<ExtArgs> | null
    /**
     * Filter, which BookingOrder to fetch.
     */
    where: BookingOrderWhereUniqueInput
  }

  /**
   * BookingOrder findUniqueOrThrow
   */
  export type BookingOrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingOrder
     */
    select?: BookingOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingOrder
     */
    omit?: BookingOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingOrderInclude<ExtArgs> | null
    /**
     * Filter, which BookingOrder to fetch.
     */
    where: BookingOrderWhereUniqueInput
  }

  /**
   * BookingOrder findFirst
   */
  export type BookingOrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingOrder
     */
    select?: BookingOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingOrder
     */
    omit?: BookingOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingOrderInclude<ExtArgs> | null
    /**
     * Filter, which BookingOrder to fetch.
     */
    where?: BookingOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingOrders to fetch.
     */
    orderBy?: BookingOrderOrderByWithRelationInput | BookingOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookingOrders.
     */
    cursor?: BookingOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookingOrders.
     */
    distinct?: BookingOrderScalarFieldEnum | BookingOrderScalarFieldEnum[]
  }

  /**
   * BookingOrder findFirstOrThrow
   */
  export type BookingOrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingOrder
     */
    select?: BookingOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingOrder
     */
    omit?: BookingOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingOrderInclude<ExtArgs> | null
    /**
     * Filter, which BookingOrder to fetch.
     */
    where?: BookingOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingOrders to fetch.
     */
    orderBy?: BookingOrderOrderByWithRelationInput | BookingOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookingOrders.
     */
    cursor?: BookingOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookingOrders.
     */
    distinct?: BookingOrderScalarFieldEnum | BookingOrderScalarFieldEnum[]
  }

  /**
   * BookingOrder findMany
   */
  export type BookingOrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingOrder
     */
    select?: BookingOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingOrder
     */
    omit?: BookingOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingOrderInclude<ExtArgs> | null
    /**
     * Filter, which BookingOrders to fetch.
     */
    where?: BookingOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingOrders to fetch.
     */
    orderBy?: BookingOrderOrderByWithRelationInput | BookingOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BookingOrders.
     */
    cursor?: BookingOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingOrders.
     */
    skip?: number
    distinct?: BookingOrderScalarFieldEnum | BookingOrderScalarFieldEnum[]
  }

  /**
   * BookingOrder create
   */
  export type BookingOrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingOrder
     */
    select?: BookingOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingOrder
     */
    omit?: BookingOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingOrderInclude<ExtArgs> | null
    /**
     * The data needed to create a BookingOrder.
     */
    data: XOR<BookingOrderCreateInput, BookingOrderUncheckedCreateInput>
  }

  /**
   * BookingOrder createMany
   */
  export type BookingOrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BookingOrders.
     */
    data: BookingOrderCreateManyInput | BookingOrderCreateManyInput[]
  }

  /**
   * BookingOrder createManyAndReturn
   */
  export type BookingOrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingOrder
     */
    select?: BookingOrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookingOrder
     */
    omit?: BookingOrderOmit<ExtArgs> | null
    /**
     * The data used to create many BookingOrders.
     */
    data: BookingOrderCreateManyInput | BookingOrderCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingOrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookingOrder update
   */
  export type BookingOrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingOrder
     */
    select?: BookingOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingOrder
     */
    omit?: BookingOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingOrderInclude<ExtArgs> | null
    /**
     * The data needed to update a BookingOrder.
     */
    data: XOR<BookingOrderUpdateInput, BookingOrderUncheckedUpdateInput>
    /**
     * Choose, which BookingOrder to update.
     */
    where: BookingOrderWhereUniqueInput
  }

  /**
   * BookingOrder updateMany
   */
  export type BookingOrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BookingOrders.
     */
    data: XOR<BookingOrderUpdateManyMutationInput, BookingOrderUncheckedUpdateManyInput>
    /**
     * Filter which BookingOrders to update
     */
    where?: BookingOrderWhereInput
    /**
     * Limit how many BookingOrders to update.
     */
    limit?: number
  }

  /**
   * BookingOrder updateManyAndReturn
   */
  export type BookingOrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingOrder
     */
    select?: BookingOrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookingOrder
     */
    omit?: BookingOrderOmit<ExtArgs> | null
    /**
     * The data used to update BookingOrders.
     */
    data: XOR<BookingOrderUpdateManyMutationInput, BookingOrderUncheckedUpdateManyInput>
    /**
     * Filter which BookingOrders to update
     */
    where?: BookingOrderWhereInput
    /**
     * Limit how many BookingOrders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingOrderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookingOrder upsert
   */
  export type BookingOrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingOrder
     */
    select?: BookingOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingOrder
     */
    omit?: BookingOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingOrderInclude<ExtArgs> | null
    /**
     * The filter to search for the BookingOrder to update in case it exists.
     */
    where: BookingOrderWhereUniqueInput
    /**
     * In case the BookingOrder found by the `where` argument doesn't exist, create a new BookingOrder with this data.
     */
    create: XOR<BookingOrderCreateInput, BookingOrderUncheckedCreateInput>
    /**
     * In case the BookingOrder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingOrderUpdateInput, BookingOrderUncheckedUpdateInput>
  }

  /**
   * BookingOrder delete
   */
  export type BookingOrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingOrder
     */
    select?: BookingOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingOrder
     */
    omit?: BookingOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingOrderInclude<ExtArgs> | null
    /**
     * Filter which BookingOrder to delete.
     */
    where: BookingOrderWhereUniqueInput
  }

  /**
   * BookingOrder deleteMany
   */
  export type BookingOrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookingOrders to delete
     */
    where?: BookingOrderWhereInput
    /**
     * Limit how many BookingOrders to delete.
     */
    limit?: number
  }

  /**
   * BookingOrder without action
   */
  export type BookingOrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingOrder
     */
    select?: BookingOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingOrder
     */
    omit?: BookingOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingOrderInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    rating: number | null
  }

  export type ReviewSumAggregateOutputType = {
    rating: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    rating: number | null
    title: string | null
    comment: string | null
    projectName: string | null
    flatNo: string | null
    albumId: string | null
    approved: boolean | null
    createdAt: Date | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    rating: number | null
    title: string | null
    comment: string | null
    projectName: string | null
    flatNo: string | null
    albumId: string | null
    approved: boolean | null
    createdAt: Date | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    rating: number
    title: number
    comment: number
    projectName: number
    flatNo: number
    albumId: number
    approved: number
    createdAt: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    rating?: true
  }

  export type ReviewSumAggregateInputType = {
    rating?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    rating?: true
    title?: true
    comment?: true
    projectName?: true
    flatNo?: true
    albumId?: true
    approved?: true
    createdAt?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    rating?: true
    title?: true
    comment?: true
    projectName?: true
    flatNo?: true
    albumId?: true
    approved?: true
    createdAt?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    rating?: true
    title?: true
    comment?: true
    projectName?: true
    flatNo?: true
    albumId?: true
    approved?: true
    createdAt?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: string
    name: string
    email: string | null
    phone: string | null
    rating: number
    title: string | null
    comment: string
    projectName: string | null
    flatNo: string | null
    albumId: string | null
    approved: boolean
    createdAt: Date
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    rating?: boolean
    title?: boolean
    comment?: boolean
    projectName?: boolean
    flatNo?: boolean
    albumId?: boolean
    approved?: boolean
    createdAt?: boolean
    album?: boolean | Review$albumArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    rating?: boolean
    title?: boolean
    comment?: boolean
    projectName?: boolean
    flatNo?: boolean
    albumId?: boolean
    approved?: boolean
    createdAt?: boolean
    album?: boolean | Review$albumArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    rating?: boolean
    title?: boolean
    comment?: boolean
    projectName?: boolean
    flatNo?: boolean
    albumId?: boolean
    approved?: boolean
    createdAt?: boolean
    album?: boolean | Review$albumArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    rating?: boolean
    title?: boolean
    comment?: boolean
    projectName?: boolean
    flatNo?: boolean
    albumId?: boolean
    approved?: boolean
    createdAt?: boolean
  }

  export type ReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "rating" | "title" | "comment" | "projectName" | "flatNo" | "albumId" | "approved" | "createdAt", ExtArgs["result"]["review"]>
  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    album?: boolean | Review$albumArgs<ExtArgs>
  }
  export type ReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    album?: boolean | Review$albumArgs<ExtArgs>
  }
  export type ReviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    album?: boolean | Review$albumArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      album: Prisma.$AlbumPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string | null
      phone: string | null
      rating: number
      title: string | null
      comment: string
      projectName: string | null
      flatNo: string | null
      albumId: string | null
      approved: boolean
      createdAt: Date
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {ReviewUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReviewUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    album<T extends Review$albumArgs<ExtArgs> = {}>(args?: Subset<T, Review$albumArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Review model
   */
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'String'>
    readonly name: FieldRef<"Review", 'String'>
    readonly email: FieldRef<"Review", 'String'>
    readonly phone: FieldRef<"Review", 'String'>
    readonly rating: FieldRef<"Review", 'Int'>
    readonly title: FieldRef<"Review", 'String'>
    readonly comment: FieldRef<"Review", 'String'>
    readonly projectName: FieldRef<"Review", 'String'>
    readonly flatNo: FieldRef<"Review", 'String'>
    readonly albumId: FieldRef<"Review", 'String'>
    readonly approved: FieldRef<"Review", 'Boolean'>
    readonly createdAt: FieldRef<"Review", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
  }

  /**
   * Review createManyAndReturn
   */
  export type ReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Review updateManyAndReturn
   */
  export type ReviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Review.album
   */
  export type Review$albumArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    where?: AlbumWhereInput
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Model Album
   */

  export type AggregateAlbum = {
    _count: AlbumCountAggregateOutputType | null
    _min: AlbumMinAggregateOutputType | null
    _max: AlbumMaxAggregateOutputType | null
  }

  export type AlbumMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    projectName: string | null
    flatNo: string | null
    ownerName: string | null
    approved: boolean | null
    coverPhoto: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AlbumMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    projectName: string | null
    flatNo: string | null
    ownerName: string | null
    approved: boolean | null
    coverPhoto: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AlbumCountAggregateOutputType = {
    id: number
    title: number
    description: number
    projectName: number
    flatNo: number
    ownerName: number
    approved: number
    coverPhoto: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AlbumMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    projectName?: true
    flatNo?: true
    ownerName?: true
    approved?: true
    coverPhoto?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AlbumMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    projectName?: true
    flatNo?: true
    ownerName?: true
    approved?: true
    coverPhoto?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AlbumCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    projectName?: true
    flatNo?: true
    ownerName?: true
    approved?: true
    coverPhoto?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AlbumAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Album to aggregate.
     */
    where?: AlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Albums to fetch.
     */
    orderBy?: AlbumOrderByWithRelationInput | AlbumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Albums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Albums
    **/
    _count?: true | AlbumCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlbumMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlbumMaxAggregateInputType
  }

  export type GetAlbumAggregateType<T extends AlbumAggregateArgs> = {
        [P in keyof T & keyof AggregateAlbum]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlbum[P]>
      : GetScalarType<T[P], AggregateAlbum[P]>
  }




  export type AlbumGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlbumWhereInput
    orderBy?: AlbumOrderByWithAggregationInput | AlbumOrderByWithAggregationInput[]
    by: AlbumScalarFieldEnum[] | AlbumScalarFieldEnum
    having?: AlbumScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlbumCountAggregateInputType | true
    _min?: AlbumMinAggregateInputType
    _max?: AlbumMaxAggregateInputType
  }

  export type AlbumGroupByOutputType = {
    id: string
    title: string
    description: string | null
    projectName: string
    flatNo: string
    ownerName: string
    approved: boolean
    coverPhoto: string | null
    createdAt: Date
    updatedAt: Date
    _count: AlbumCountAggregateOutputType | null
    _min: AlbumMinAggregateOutputType | null
    _max: AlbumMaxAggregateOutputType | null
  }

  type GetAlbumGroupByPayload<T extends AlbumGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlbumGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlbumGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlbumGroupByOutputType[P]>
            : GetScalarType<T[P], AlbumGroupByOutputType[P]>
        }
      >
    >


  export type AlbumSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    projectName?: boolean
    flatNo?: boolean
    ownerName?: boolean
    approved?: boolean
    coverPhoto?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    photos?: boolean | Album$photosArgs<ExtArgs>
    reviews?: boolean | Album$reviewsArgs<ExtArgs>
    _count?: boolean | AlbumCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["album"]>

  export type AlbumSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    projectName?: boolean
    flatNo?: boolean
    ownerName?: boolean
    approved?: boolean
    coverPhoto?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["album"]>

  export type AlbumSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    projectName?: boolean
    flatNo?: boolean
    ownerName?: boolean
    approved?: boolean
    coverPhoto?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["album"]>

  export type AlbumSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    projectName?: boolean
    flatNo?: boolean
    ownerName?: boolean
    approved?: boolean
    coverPhoto?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AlbumOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "projectName" | "flatNo" | "ownerName" | "approved" | "coverPhoto" | "createdAt" | "updatedAt", ExtArgs["result"]["album"]>
  export type AlbumInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    photos?: boolean | Album$photosArgs<ExtArgs>
    reviews?: boolean | Album$reviewsArgs<ExtArgs>
    _count?: boolean | AlbumCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AlbumIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AlbumIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AlbumPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Album"
    objects: {
      photos: Prisma.$AlbumPhotoPayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      projectName: string
      flatNo: string
      ownerName: string
      approved: boolean
      coverPhoto: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["album"]>
    composites: {}
  }

  type AlbumGetPayload<S extends boolean | null | undefined | AlbumDefaultArgs> = $Result.GetResult<Prisma.$AlbumPayload, S>

  type AlbumCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlbumFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlbumCountAggregateInputType | true
    }

  export interface AlbumDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Album'], meta: { name: 'Album' } }
    /**
     * Find zero or one Album that matches the filter.
     * @param {AlbumFindUniqueArgs} args - Arguments to find a Album
     * @example
     * // Get one Album
     * const album = await prisma.album.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlbumFindUniqueArgs>(args: SelectSubset<T, AlbumFindUniqueArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Album that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlbumFindUniqueOrThrowArgs} args - Arguments to find a Album
     * @example
     * // Get one Album
     * const album = await prisma.album.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlbumFindUniqueOrThrowArgs>(args: SelectSubset<T, AlbumFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Album that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumFindFirstArgs} args - Arguments to find a Album
     * @example
     * // Get one Album
     * const album = await prisma.album.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlbumFindFirstArgs>(args?: SelectSubset<T, AlbumFindFirstArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Album that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumFindFirstOrThrowArgs} args - Arguments to find a Album
     * @example
     * // Get one Album
     * const album = await prisma.album.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlbumFindFirstOrThrowArgs>(args?: SelectSubset<T, AlbumFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Albums that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Albums
     * const albums = await prisma.album.findMany()
     * 
     * // Get first 10 Albums
     * const albums = await prisma.album.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const albumWithIdOnly = await prisma.album.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlbumFindManyArgs>(args?: SelectSubset<T, AlbumFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Album.
     * @param {AlbumCreateArgs} args - Arguments to create a Album.
     * @example
     * // Create one Album
     * const Album = await prisma.album.create({
     *   data: {
     *     // ... data to create a Album
     *   }
     * })
     * 
     */
    create<T extends AlbumCreateArgs>(args: SelectSubset<T, AlbumCreateArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Albums.
     * @param {AlbumCreateManyArgs} args - Arguments to create many Albums.
     * @example
     * // Create many Albums
     * const album = await prisma.album.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlbumCreateManyArgs>(args?: SelectSubset<T, AlbumCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Albums and returns the data saved in the database.
     * @param {AlbumCreateManyAndReturnArgs} args - Arguments to create many Albums.
     * @example
     * // Create many Albums
     * const album = await prisma.album.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Albums and only return the `id`
     * const albumWithIdOnly = await prisma.album.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AlbumCreateManyAndReturnArgs>(args?: SelectSubset<T, AlbumCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Album.
     * @param {AlbumDeleteArgs} args - Arguments to delete one Album.
     * @example
     * // Delete one Album
     * const Album = await prisma.album.delete({
     *   where: {
     *     // ... filter to delete one Album
     *   }
     * })
     * 
     */
    delete<T extends AlbumDeleteArgs>(args: SelectSubset<T, AlbumDeleteArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Album.
     * @param {AlbumUpdateArgs} args - Arguments to update one Album.
     * @example
     * // Update one Album
     * const album = await prisma.album.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlbumUpdateArgs>(args: SelectSubset<T, AlbumUpdateArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Albums.
     * @param {AlbumDeleteManyArgs} args - Arguments to filter Albums to delete.
     * @example
     * // Delete a few Albums
     * const { count } = await prisma.album.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlbumDeleteManyArgs>(args?: SelectSubset<T, AlbumDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Albums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Albums
     * const album = await prisma.album.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlbumUpdateManyArgs>(args: SelectSubset<T, AlbumUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Albums and returns the data updated in the database.
     * @param {AlbumUpdateManyAndReturnArgs} args - Arguments to update many Albums.
     * @example
     * // Update many Albums
     * const album = await prisma.album.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Albums and only return the `id`
     * const albumWithIdOnly = await prisma.album.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AlbumUpdateManyAndReturnArgs>(args: SelectSubset<T, AlbumUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Album.
     * @param {AlbumUpsertArgs} args - Arguments to update or create a Album.
     * @example
     * // Update or create a Album
     * const album = await prisma.album.upsert({
     *   create: {
     *     // ... data to create a Album
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Album we want to update
     *   }
     * })
     */
    upsert<T extends AlbumUpsertArgs>(args: SelectSubset<T, AlbumUpsertArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Albums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumCountArgs} args - Arguments to filter Albums to count.
     * @example
     * // Count the number of Albums
     * const count = await prisma.album.count({
     *   where: {
     *     // ... the filter for the Albums we want to count
     *   }
     * })
    **/
    count<T extends AlbumCountArgs>(
      args?: Subset<T, AlbumCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlbumCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Album.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AlbumAggregateArgs>(args: Subset<T, AlbumAggregateArgs>): Prisma.PrismaPromise<GetAlbumAggregateType<T>>

    /**
     * Group by Album.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AlbumGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlbumGroupByArgs['orderBy'] }
        : { orderBy?: AlbumGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AlbumGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlbumGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Album model
   */
  readonly fields: AlbumFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Album.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlbumClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    photos<T extends Album$photosArgs<ExtArgs> = {}>(args?: Subset<T, Album$photosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumPhotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends Album$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Album$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Album model
   */
  interface AlbumFieldRefs {
    readonly id: FieldRef<"Album", 'String'>
    readonly title: FieldRef<"Album", 'String'>
    readonly description: FieldRef<"Album", 'String'>
    readonly projectName: FieldRef<"Album", 'String'>
    readonly flatNo: FieldRef<"Album", 'String'>
    readonly ownerName: FieldRef<"Album", 'String'>
    readonly approved: FieldRef<"Album", 'Boolean'>
    readonly coverPhoto: FieldRef<"Album", 'String'>
    readonly createdAt: FieldRef<"Album", 'DateTime'>
    readonly updatedAt: FieldRef<"Album", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Album findUnique
   */
  export type AlbumFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter, which Album to fetch.
     */
    where: AlbumWhereUniqueInput
  }

  /**
   * Album findUniqueOrThrow
   */
  export type AlbumFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter, which Album to fetch.
     */
    where: AlbumWhereUniqueInput
  }

  /**
   * Album findFirst
   */
  export type AlbumFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter, which Album to fetch.
     */
    where?: AlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Albums to fetch.
     */
    orderBy?: AlbumOrderByWithRelationInput | AlbumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Albums.
     */
    cursor?: AlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Albums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Albums.
     */
    distinct?: AlbumScalarFieldEnum | AlbumScalarFieldEnum[]
  }

  /**
   * Album findFirstOrThrow
   */
  export type AlbumFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter, which Album to fetch.
     */
    where?: AlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Albums to fetch.
     */
    orderBy?: AlbumOrderByWithRelationInput | AlbumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Albums.
     */
    cursor?: AlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Albums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Albums.
     */
    distinct?: AlbumScalarFieldEnum | AlbumScalarFieldEnum[]
  }

  /**
   * Album findMany
   */
  export type AlbumFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter, which Albums to fetch.
     */
    where?: AlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Albums to fetch.
     */
    orderBy?: AlbumOrderByWithRelationInput | AlbumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Albums.
     */
    cursor?: AlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Albums.
     */
    skip?: number
    distinct?: AlbumScalarFieldEnum | AlbumScalarFieldEnum[]
  }

  /**
   * Album create
   */
  export type AlbumCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * The data needed to create a Album.
     */
    data: XOR<AlbumCreateInput, AlbumUncheckedCreateInput>
  }

  /**
   * Album createMany
   */
  export type AlbumCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Albums.
     */
    data: AlbumCreateManyInput | AlbumCreateManyInput[]
  }

  /**
   * Album createManyAndReturn
   */
  export type AlbumCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * The data used to create many Albums.
     */
    data: AlbumCreateManyInput | AlbumCreateManyInput[]
  }

  /**
   * Album update
   */
  export type AlbumUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * The data needed to update a Album.
     */
    data: XOR<AlbumUpdateInput, AlbumUncheckedUpdateInput>
    /**
     * Choose, which Album to update.
     */
    where: AlbumWhereUniqueInput
  }

  /**
   * Album updateMany
   */
  export type AlbumUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Albums.
     */
    data: XOR<AlbumUpdateManyMutationInput, AlbumUncheckedUpdateManyInput>
    /**
     * Filter which Albums to update
     */
    where?: AlbumWhereInput
    /**
     * Limit how many Albums to update.
     */
    limit?: number
  }

  /**
   * Album updateManyAndReturn
   */
  export type AlbumUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * The data used to update Albums.
     */
    data: XOR<AlbumUpdateManyMutationInput, AlbumUncheckedUpdateManyInput>
    /**
     * Filter which Albums to update
     */
    where?: AlbumWhereInput
    /**
     * Limit how many Albums to update.
     */
    limit?: number
  }

  /**
   * Album upsert
   */
  export type AlbumUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * The filter to search for the Album to update in case it exists.
     */
    where: AlbumWhereUniqueInput
    /**
     * In case the Album found by the `where` argument doesn't exist, create a new Album with this data.
     */
    create: XOR<AlbumCreateInput, AlbumUncheckedCreateInput>
    /**
     * In case the Album was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlbumUpdateInput, AlbumUncheckedUpdateInput>
  }

  /**
   * Album delete
   */
  export type AlbumDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter which Album to delete.
     */
    where: AlbumWhereUniqueInput
  }

  /**
   * Album deleteMany
   */
  export type AlbumDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Albums to delete
     */
    where?: AlbumWhereInput
    /**
     * Limit how many Albums to delete.
     */
    limit?: number
  }

  /**
   * Album.photos
   */
  export type Album$photosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumPhoto
     */
    select?: AlbumPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumPhoto
     */
    omit?: AlbumPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumPhotoInclude<ExtArgs> | null
    where?: AlbumPhotoWhereInput
    orderBy?: AlbumPhotoOrderByWithRelationInput | AlbumPhotoOrderByWithRelationInput[]
    cursor?: AlbumPhotoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlbumPhotoScalarFieldEnum | AlbumPhotoScalarFieldEnum[]
  }

  /**
   * Album.reviews
   */
  export type Album$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Album without action
   */
  export type AlbumDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
  }


  /**
   * Model AlbumPhoto
   */

  export type AggregateAlbumPhoto = {
    _count: AlbumPhotoCountAggregateOutputType | null
    _min: AlbumPhotoMinAggregateOutputType | null
    _max: AlbumPhotoMaxAggregateOutputType | null
  }

  export type AlbumPhotoMinAggregateOutputType = {
    id: string | null
    albumId: string | null
    url: string | null
    caption: string | null
    createdAt: Date | null
  }

  export type AlbumPhotoMaxAggregateOutputType = {
    id: string | null
    albumId: string | null
    url: string | null
    caption: string | null
    createdAt: Date | null
  }

  export type AlbumPhotoCountAggregateOutputType = {
    id: number
    albumId: number
    url: number
    caption: number
    createdAt: number
    _all: number
  }


  export type AlbumPhotoMinAggregateInputType = {
    id?: true
    albumId?: true
    url?: true
    caption?: true
    createdAt?: true
  }

  export type AlbumPhotoMaxAggregateInputType = {
    id?: true
    albumId?: true
    url?: true
    caption?: true
    createdAt?: true
  }

  export type AlbumPhotoCountAggregateInputType = {
    id?: true
    albumId?: true
    url?: true
    caption?: true
    createdAt?: true
    _all?: true
  }

  export type AlbumPhotoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AlbumPhoto to aggregate.
     */
    where?: AlbumPhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlbumPhotos to fetch.
     */
    orderBy?: AlbumPhotoOrderByWithRelationInput | AlbumPhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlbumPhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlbumPhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlbumPhotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AlbumPhotos
    **/
    _count?: true | AlbumPhotoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlbumPhotoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlbumPhotoMaxAggregateInputType
  }

  export type GetAlbumPhotoAggregateType<T extends AlbumPhotoAggregateArgs> = {
        [P in keyof T & keyof AggregateAlbumPhoto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlbumPhoto[P]>
      : GetScalarType<T[P], AggregateAlbumPhoto[P]>
  }




  export type AlbumPhotoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlbumPhotoWhereInput
    orderBy?: AlbumPhotoOrderByWithAggregationInput | AlbumPhotoOrderByWithAggregationInput[]
    by: AlbumPhotoScalarFieldEnum[] | AlbumPhotoScalarFieldEnum
    having?: AlbumPhotoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlbumPhotoCountAggregateInputType | true
    _min?: AlbumPhotoMinAggregateInputType
    _max?: AlbumPhotoMaxAggregateInputType
  }

  export type AlbumPhotoGroupByOutputType = {
    id: string
    albumId: string
    url: string
    caption: string | null
    createdAt: Date
    _count: AlbumPhotoCountAggregateOutputType | null
    _min: AlbumPhotoMinAggregateOutputType | null
    _max: AlbumPhotoMaxAggregateOutputType | null
  }

  type GetAlbumPhotoGroupByPayload<T extends AlbumPhotoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlbumPhotoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlbumPhotoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlbumPhotoGroupByOutputType[P]>
            : GetScalarType<T[P], AlbumPhotoGroupByOutputType[P]>
        }
      >
    >


  export type AlbumPhotoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    albumId?: boolean
    url?: boolean
    caption?: boolean
    createdAt?: boolean
    album?: boolean | AlbumDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["albumPhoto"]>

  export type AlbumPhotoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    albumId?: boolean
    url?: boolean
    caption?: boolean
    createdAt?: boolean
    album?: boolean | AlbumDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["albumPhoto"]>

  export type AlbumPhotoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    albumId?: boolean
    url?: boolean
    caption?: boolean
    createdAt?: boolean
    album?: boolean | AlbumDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["albumPhoto"]>

  export type AlbumPhotoSelectScalar = {
    id?: boolean
    albumId?: boolean
    url?: boolean
    caption?: boolean
    createdAt?: boolean
  }

  export type AlbumPhotoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "albumId" | "url" | "caption" | "createdAt", ExtArgs["result"]["albumPhoto"]>
  export type AlbumPhotoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    album?: boolean | AlbumDefaultArgs<ExtArgs>
  }
  export type AlbumPhotoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    album?: boolean | AlbumDefaultArgs<ExtArgs>
  }
  export type AlbumPhotoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    album?: boolean | AlbumDefaultArgs<ExtArgs>
  }

  export type $AlbumPhotoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AlbumPhoto"
    objects: {
      album: Prisma.$AlbumPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      albumId: string
      url: string
      caption: string | null
      createdAt: Date
    }, ExtArgs["result"]["albumPhoto"]>
    composites: {}
  }

  type AlbumPhotoGetPayload<S extends boolean | null | undefined | AlbumPhotoDefaultArgs> = $Result.GetResult<Prisma.$AlbumPhotoPayload, S>

  type AlbumPhotoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlbumPhotoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlbumPhotoCountAggregateInputType | true
    }

  export interface AlbumPhotoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AlbumPhoto'], meta: { name: 'AlbumPhoto' } }
    /**
     * Find zero or one AlbumPhoto that matches the filter.
     * @param {AlbumPhotoFindUniqueArgs} args - Arguments to find a AlbumPhoto
     * @example
     * // Get one AlbumPhoto
     * const albumPhoto = await prisma.albumPhoto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlbumPhotoFindUniqueArgs>(args: SelectSubset<T, AlbumPhotoFindUniqueArgs<ExtArgs>>): Prisma__AlbumPhotoClient<$Result.GetResult<Prisma.$AlbumPhotoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AlbumPhoto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlbumPhotoFindUniqueOrThrowArgs} args - Arguments to find a AlbumPhoto
     * @example
     * // Get one AlbumPhoto
     * const albumPhoto = await prisma.albumPhoto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlbumPhotoFindUniqueOrThrowArgs>(args: SelectSubset<T, AlbumPhotoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlbumPhotoClient<$Result.GetResult<Prisma.$AlbumPhotoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AlbumPhoto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumPhotoFindFirstArgs} args - Arguments to find a AlbumPhoto
     * @example
     * // Get one AlbumPhoto
     * const albumPhoto = await prisma.albumPhoto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlbumPhotoFindFirstArgs>(args?: SelectSubset<T, AlbumPhotoFindFirstArgs<ExtArgs>>): Prisma__AlbumPhotoClient<$Result.GetResult<Prisma.$AlbumPhotoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AlbumPhoto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumPhotoFindFirstOrThrowArgs} args - Arguments to find a AlbumPhoto
     * @example
     * // Get one AlbumPhoto
     * const albumPhoto = await prisma.albumPhoto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlbumPhotoFindFirstOrThrowArgs>(args?: SelectSubset<T, AlbumPhotoFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlbumPhotoClient<$Result.GetResult<Prisma.$AlbumPhotoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AlbumPhotos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumPhotoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AlbumPhotos
     * const albumPhotos = await prisma.albumPhoto.findMany()
     * 
     * // Get first 10 AlbumPhotos
     * const albumPhotos = await prisma.albumPhoto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const albumPhotoWithIdOnly = await prisma.albumPhoto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlbumPhotoFindManyArgs>(args?: SelectSubset<T, AlbumPhotoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumPhotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AlbumPhoto.
     * @param {AlbumPhotoCreateArgs} args - Arguments to create a AlbumPhoto.
     * @example
     * // Create one AlbumPhoto
     * const AlbumPhoto = await prisma.albumPhoto.create({
     *   data: {
     *     // ... data to create a AlbumPhoto
     *   }
     * })
     * 
     */
    create<T extends AlbumPhotoCreateArgs>(args: SelectSubset<T, AlbumPhotoCreateArgs<ExtArgs>>): Prisma__AlbumPhotoClient<$Result.GetResult<Prisma.$AlbumPhotoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AlbumPhotos.
     * @param {AlbumPhotoCreateManyArgs} args - Arguments to create many AlbumPhotos.
     * @example
     * // Create many AlbumPhotos
     * const albumPhoto = await prisma.albumPhoto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlbumPhotoCreateManyArgs>(args?: SelectSubset<T, AlbumPhotoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AlbumPhotos and returns the data saved in the database.
     * @param {AlbumPhotoCreateManyAndReturnArgs} args - Arguments to create many AlbumPhotos.
     * @example
     * // Create many AlbumPhotos
     * const albumPhoto = await prisma.albumPhoto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AlbumPhotos and only return the `id`
     * const albumPhotoWithIdOnly = await prisma.albumPhoto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AlbumPhotoCreateManyAndReturnArgs>(args?: SelectSubset<T, AlbumPhotoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumPhotoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AlbumPhoto.
     * @param {AlbumPhotoDeleteArgs} args - Arguments to delete one AlbumPhoto.
     * @example
     * // Delete one AlbumPhoto
     * const AlbumPhoto = await prisma.albumPhoto.delete({
     *   where: {
     *     // ... filter to delete one AlbumPhoto
     *   }
     * })
     * 
     */
    delete<T extends AlbumPhotoDeleteArgs>(args: SelectSubset<T, AlbumPhotoDeleteArgs<ExtArgs>>): Prisma__AlbumPhotoClient<$Result.GetResult<Prisma.$AlbumPhotoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AlbumPhoto.
     * @param {AlbumPhotoUpdateArgs} args - Arguments to update one AlbumPhoto.
     * @example
     * // Update one AlbumPhoto
     * const albumPhoto = await prisma.albumPhoto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlbumPhotoUpdateArgs>(args: SelectSubset<T, AlbumPhotoUpdateArgs<ExtArgs>>): Prisma__AlbumPhotoClient<$Result.GetResult<Prisma.$AlbumPhotoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AlbumPhotos.
     * @param {AlbumPhotoDeleteManyArgs} args - Arguments to filter AlbumPhotos to delete.
     * @example
     * // Delete a few AlbumPhotos
     * const { count } = await prisma.albumPhoto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlbumPhotoDeleteManyArgs>(args?: SelectSubset<T, AlbumPhotoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AlbumPhotos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumPhotoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AlbumPhotos
     * const albumPhoto = await prisma.albumPhoto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlbumPhotoUpdateManyArgs>(args: SelectSubset<T, AlbumPhotoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AlbumPhotos and returns the data updated in the database.
     * @param {AlbumPhotoUpdateManyAndReturnArgs} args - Arguments to update many AlbumPhotos.
     * @example
     * // Update many AlbumPhotos
     * const albumPhoto = await prisma.albumPhoto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AlbumPhotos and only return the `id`
     * const albumPhotoWithIdOnly = await prisma.albumPhoto.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AlbumPhotoUpdateManyAndReturnArgs>(args: SelectSubset<T, AlbumPhotoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumPhotoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AlbumPhoto.
     * @param {AlbumPhotoUpsertArgs} args - Arguments to update or create a AlbumPhoto.
     * @example
     * // Update or create a AlbumPhoto
     * const albumPhoto = await prisma.albumPhoto.upsert({
     *   create: {
     *     // ... data to create a AlbumPhoto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AlbumPhoto we want to update
     *   }
     * })
     */
    upsert<T extends AlbumPhotoUpsertArgs>(args: SelectSubset<T, AlbumPhotoUpsertArgs<ExtArgs>>): Prisma__AlbumPhotoClient<$Result.GetResult<Prisma.$AlbumPhotoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AlbumPhotos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumPhotoCountArgs} args - Arguments to filter AlbumPhotos to count.
     * @example
     * // Count the number of AlbumPhotos
     * const count = await prisma.albumPhoto.count({
     *   where: {
     *     // ... the filter for the AlbumPhotos we want to count
     *   }
     * })
    **/
    count<T extends AlbumPhotoCountArgs>(
      args?: Subset<T, AlbumPhotoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlbumPhotoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AlbumPhoto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumPhotoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AlbumPhotoAggregateArgs>(args: Subset<T, AlbumPhotoAggregateArgs>): Prisma.PrismaPromise<GetAlbumPhotoAggregateType<T>>

    /**
     * Group by AlbumPhoto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumPhotoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AlbumPhotoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlbumPhotoGroupByArgs['orderBy'] }
        : { orderBy?: AlbumPhotoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AlbumPhotoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlbumPhotoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AlbumPhoto model
   */
  readonly fields: AlbumPhotoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AlbumPhoto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlbumPhotoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    album<T extends AlbumDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AlbumDefaultArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AlbumPhoto model
   */
  interface AlbumPhotoFieldRefs {
    readonly id: FieldRef<"AlbumPhoto", 'String'>
    readonly albumId: FieldRef<"AlbumPhoto", 'String'>
    readonly url: FieldRef<"AlbumPhoto", 'String'>
    readonly caption: FieldRef<"AlbumPhoto", 'String'>
    readonly createdAt: FieldRef<"AlbumPhoto", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AlbumPhoto findUnique
   */
  export type AlbumPhotoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumPhoto
     */
    select?: AlbumPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumPhoto
     */
    omit?: AlbumPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumPhotoInclude<ExtArgs> | null
    /**
     * Filter, which AlbumPhoto to fetch.
     */
    where: AlbumPhotoWhereUniqueInput
  }

  /**
   * AlbumPhoto findUniqueOrThrow
   */
  export type AlbumPhotoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumPhoto
     */
    select?: AlbumPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumPhoto
     */
    omit?: AlbumPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumPhotoInclude<ExtArgs> | null
    /**
     * Filter, which AlbumPhoto to fetch.
     */
    where: AlbumPhotoWhereUniqueInput
  }

  /**
   * AlbumPhoto findFirst
   */
  export type AlbumPhotoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumPhoto
     */
    select?: AlbumPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumPhoto
     */
    omit?: AlbumPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumPhotoInclude<ExtArgs> | null
    /**
     * Filter, which AlbumPhoto to fetch.
     */
    where?: AlbumPhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlbumPhotos to fetch.
     */
    orderBy?: AlbumPhotoOrderByWithRelationInput | AlbumPhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AlbumPhotos.
     */
    cursor?: AlbumPhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlbumPhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlbumPhotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AlbumPhotos.
     */
    distinct?: AlbumPhotoScalarFieldEnum | AlbumPhotoScalarFieldEnum[]
  }

  /**
   * AlbumPhoto findFirstOrThrow
   */
  export type AlbumPhotoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumPhoto
     */
    select?: AlbumPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumPhoto
     */
    omit?: AlbumPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumPhotoInclude<ExtArgs> | null
    /**
     * Filter, which AlbumPhoto to fetch.
     */
    where?: AlbumPhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlbumPhotos to fetch.
     */
    orderBy?: AlbumPhotoOrderByWithRelationInput | AlbumPhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AlbumPhotos.
     */
    cursor?: AlbumPhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlbumPhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlbumPhotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AlbumPhotos.
     */
    distinct?: AlbumPhotoScalarFieldEnum | AlbumPhotoScalarFieldEnum[]
  }

  /**
   * AlbumPhoto findMany
   */
  export type AlbumPhotoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumPhoto
     */
    select?: AlbumPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumPhoto
     */
    omit?: AlbumPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumPhotoInclude<ExtArgs> | null
    /**
     * Filter, which AlbumPhotos to fetch.
     */
    where?: AlbumPhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlbumPhotos to fetch.
     */
    orderBy?: AlbumPhotoOrderByWithRelationInput | AlbumPhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AlbumPhotos.
     */
    cursor?: AlbumPhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlbumPhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlbumPhotos.
     */
    skip?: number
    distinct?: AlbumPhotoScalarFieldEnum | AlbumPhotoScalarFieldEnum[]
  }

  /**
   * AlbumPhoto create
   */
  export type AlbumPhotoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumPhoto
     */
    select?: AlbumPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumPhoto
     */
    omit?: AlbumPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumPhotoInclude<ExtArgs> | null
    /**
     * The data needed to create a AlbumPhoto.
     */
    data: XOR<AlbumPhotoCreateInput, AlbumPhotoUncheckedCreateInput>
  }

  /**
   * AlbumPhoto createMany
   */
  export type AlbumPhotoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AlbumPhotos.
     */
    data: AlbumPhotoCreateManyInput | AlbumPhotoCreateManyInput[]
  }

  /**
   * AlbumPhoto createManyAndReturn
   */
  export type AlbumPhotoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumPhoto
     */
    select?: AlbumPhotoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumPhoto
     */
    omit?: AlbumPhotoOmit<ExtArgs> | null
    /**
     * The data used to create many AlbumPhotos.
     */
    data: AlbumPhotoCreateManyInput | AlbumPhotoCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumPhotoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AlbumPhoto update
   */
  export type AlbumPhotoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumPhoto
     */
    select?: AlbumPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumPhoto
     */
    omit?: AlbumPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumPhotoInclude<ExtArgs> | null
    /**
     * The data needed to update a AlbumPhoto.
     */
    data: XOR<AlbumPhotoUpdateInput, AlbumPhotoUncheckedUpdateInput>
    /**
     * Choose, which AlbumPhoto to update.
     */
    where: AlbumPhotoWhereUniqueInput
  }

  /**
   * AlbumPhoto updateMany
   */
  export type AlbumPhotoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AlbumPhotos.
     */
    data: XOR<AlbumPhotoUpdateManyMutationInput, AlbumPhotoUncheckedUpdateManyInput>
    /**
     * Filter which AlbumPhotos to update
     */
    where?: AlbumPhotoWhereInput
    /**
     * Limit how many AlbumPhotos to update.
     */
    limit?: number
  }

  /**
   * AlbumPhoto updateManyAndReturn
   */
  export type AlbumPhotoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumPhoto
     */
    select?: AlbumPhotoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumPhoto
     */
    omit?: AlbumPhotoOmit<ExtArgs> | null
    /**
     * The data used to update AlbumPhotos.
     */
    data: XOR<AlbumPhotoUpdateManyMutationInput, AlbumPhotoUncheckedUpdateManyInput>
    /**
     * Filter which AlbumPhotos to update
     */
    where?: AlbumPhotoWhereInput
    /**
     * Limit how many AlbumPhotos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumPhotoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AlbumPhoto upsert
   */
  export type AlbumPhotoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumPhoto
     */
    select?: AlbumPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumPhoto
     */
    omit?: AlbumPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumPhotoInclude<ExtArgs> | null
    /**
     * The filter to search for the AlbumPhoto to update in case it exists.
     */
    where: AlbumPhotoWhereUniqueInput
    /**
     * In case the AlbumPhoto found by the `where` argument doesn't exist, create a new AlbumPhoto with this data.
     */
    create: XOR<AlbumPhotoCreateInput, AlbumPhotoUncheckedCreateInput>
    /**
     * In case the AlbumPhoto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlbumPhotoUpdateInput, AlbumPhotoUncheckedUpdateInput>
  }

  /**
   * AlbumPhoto delete
   */
  export type AlbumPhotoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumPhoto
     */
    select?: AlbumPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumPhoto
     */
    omit?: AlbumPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumPhotoInclude<ExtArgs> | null
    /**
     * Filter which AlbumPhoto to delete.
     */
    where: AlbumPhotoWhereUniqueInput
  }

  /**
   * AlbumPhoto deleteMany
   */
  export type AlbumPhotoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AlbumPhotos to delete
     */
    where?: AlbumPhotoWhereInput
    /**
     * Limit how many AlbumPhotos to delete.
     */
    limit?: number
  }

  /**
   * AlbumPhoto without action
   */
  export type AlbumPhotoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumPhoto
     */
    select?: AlbumPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumPhoto
     */
    omit?: AlbumPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumPhotoInclude<ExtArgs> | null
  }


  /**
   * Model GalleryItem
   */

  export type AggregateGalleryItem = {
    _count: GalleryItemCountAggregateOutputType | null
    _avg: GalleryItemAvgAggregateOutputType | null
    _sum: GalleryItemSumAggregateOutputType | null
    _min: GalleryItemMinAggregateOutputType | null
    _max: GalleryItemMaxAggregateOutputType | null
  }

  export type GalleryItemAvgAggregateOutputType = {
    sortOrder: number | null
  }

  export type GalleryItemSumAggregateOutputType = {
    sortOrder: number | null
  }

  export type GalleryItemMinAggregateOutputType = {
    id: string | null
    title: string | null
    category: string | null
    caption: string | null
    image: string | null
    sortOrder: number | null
    createdAt: Date | null
  }

  export type GalleryItemMaxAggregateOutputType = {
    id: string | null
    title: string | null
    category: string | null
    caption: string | null
    image: string | null
    sortOrder: number | null
    createdAt: Date | null
  }

  export type GalleryItemCountAggregateOutputType = {
    id: number
    title: number
    category: number
    caption: number
    image: number
    sortOrder: number
    createdAt: number
    _all: number
  }


  export type GalleryItemAvgAggregateInputType = {
    sortOrder?: true
  }

  export type GalleryItemSumAggregateInputType = {
    sortOrder?: true
  }

  export type GalleryItemMinAggregateInputType = {
    id?: true
    title?: true
    category?: true
    caption?: true
    image?: true
    sortOrder?: true
    createdAt?: true
  }

  export type GalleryItemMaxAggregateInputType = {
    id?: true
    title?: true
    category?: true
    caption?: true
    image?: true
    sortOrder?: true
    createdAt?: true
  }

  export type GalleryItemCountAggregateInputType = {
    id?: true
    title?: true
    category?: true
    caption?: true
    image?: true
    sortOrder?: true
    createdAt?: true
    _all?: true
  }

  export type GalleryItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GalleryItem to aggregate.
     */
    where?: GalleryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GalleryItems to fetch.
     */
    orderBy?: GalleryItemOrderByWithRelationInput | GalleryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GalleryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GalleryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GalleryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GalleryItems
    **/
    _count?: true | GalleryItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GalleryItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GalleryItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GalleryItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GalleryItemMaxAggregateInputType
  }

  export type GetGalleryItemAggregateType<T extends GalleryItemAggregateArgs> = {
        [P in keyof T & keyof AggregateGalleryItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGalleryItem[P]>
      : GetScalarType<T[P], AggregateGalleryItem[P]>
  }




  export type GalleryItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GalleryItemWhereInput
    orderBy?: GalleryItemOrderByWithAggregationInput | GalleryItemOrderByWithAggregationInput[]
    by: GalleryItemScalarFieldEnum[] | GalleryItemScalarFieldEnum
    having?: GalleryItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GalleryItemCountAggregateInputType | true
    _avg?: GalleryItemAvgAggregateInputType
    _sum?: GalleryItemSumAggregateInputType
    _min?: GalleryItemMinAggregateInputType
    _max?: GalleryItemMaxAggregateInputType
  }

  export type GalleryItemGroupByOutputType = {
    id: string
    title: string
    category: string
    caption: string | null
    image: string
    sortOrder: number
    createdAt: Date
    _count: GalleryItemCountAggregateOutputType | null
    _avg: GalleryItemAvgAggregateOutputType | null
    _sum: GalleryItemSumAggregateOutputType | null
    _min: GalleryItemMinAggregateOutputType | null
    _max: GalleryItemMaxAggregateOutputType | null
  }

  type GetGalleryItemGroupByPayload<T extends GalleryItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GalleryItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GalleryItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GalleryItemGroupByOutputType[P]>
            : GetScalarType<T[P], GalleryItemGroupByOutputType[P]>
        }
      >
    >


  export type GalleryItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    category?: boolean
    caption?: boolean
    image?: boolean
    sortOrder?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["galleryItem"]>

  export type GalleryItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    category?: boolean
    caption?: boolean
    image?: boolean
    sortOrder?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["galleryItem"]>

  export type GalleryItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    category?: boolean
    caption?: boolean
    image?: boolean
    sortOrder?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["galleryItem"]>

  export type GalleryItemSelectScalar = {
    id?: boolean
    title?: boolean
    category?: boolean
    caption?: boolean
    image?: boolean
    sortOrder?: boolean
    createdAt?: boolean
  }

  export type GalleryItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "category" | "caption" | "image" | "sortOrder" | "createdAt", ExtArgs["result"]["galleryItem"]>

  export type $GalleryItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GalleryItem"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      category: string
      caption: string | null
      image: string
      sortOrder: number
      createdAt: Date
    }, ExtArgs["result"]["galleryItem"]>
    composites: {}
  }

  type GalleryItemGetPayload<S extends boolean | null | undefined | GalleryItemDefaultArgs> = $Result.GetResult<Prisma.$GalleryItemPayload, S>

  type GalleryItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GalleryItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GalleryItemCountAggregateInputType | true
    }

  export interface GalleryItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GalleryItem'], meta: { name: 'GalleryItem' } }
    /**
     * Find zero or one GalleryItem that matches the filter.
     * @param {GalleryItemFindUniqueArgs} args - Arguments to find a GalleryItem
     * @example
     * // Get one GalleryItem
     * const galleryItem = await prisma.galleryItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GalleryItemFindUniqueArgs>(args: SelectSubset<T, GalleryItemFindUniqueArgs<ExtArgs>>): Prisma__GalleryItemClient<$Result.GetResult<Prisma.$GalleryItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GalleryItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GalleryItemFindUniqueOrThrowArgs} args - Arguments to find a GalleryItem
     * @example
     * // Get one GalleryItem
     * const galleryItem = await prisma.galleryItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GalleryItemFindUniqueOrThrowArgs>(args: SelectSubset<T, GalleryItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GalleryItemClient<$Result.GetResult<Prisma.$GalleryItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GalleryItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryItemFindFirstArgs} args - Arguments to find a GalleryItem
     * @example
     * // Get one GalleryItem
     * const galleryItem = await prisma.galleryItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GalleryItemFindFirstArgs>(args?: SelectSubset<T, GalleryItemFindFirstArgs<ExtArgs>>): Prisma__GalleryItemClient<$Result.GetResult<Prisma.$GalleryItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GalleryItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryItemFindFirstOrThrowArgs} args - Arguments to find a GalleryItem
     * @example
     * // Get one GalleryItem
     * const galleryItem = await prisma.galleryItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GalleryItemFindFirstOrThrowArgs>(args?: SelectSubset<T, GalleryItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__GalleryItemClient<$Result.GetResult<Prisma.$GalleryItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GalleryItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GalleryItems
     * const galleryItems = await prisma.galleryItem.findMany()
     * 
     * // Get first 10 GalleryItems
     * const galleryItems = await prisma.galleryItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const galleryItemWithIdOnly = await prisma.galleryItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GalleryItemFindManyArgs>(args?: SelectSubset<T, GalleryItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GalleryItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GalleryItem.
     * @param {GalleryItemCreateArgs} args - Arguments to create a GalleryItem.
     * @example
     * // Create one GalleryItem
     * const GalleryItem = await prisma.galleryItem.create({
     *   data: {
     *     // ... data to create a GalleryItem
     *   }
     * })
     * 
     */
    create<T extends GalleryItemCreateArgs>(args: SelectSubset<T, GalleryItemCreateArgs<ExtArgs>>): Prisma__GalleryItemClient<$Result.GetResult<Prisma.$GalleryItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GalleryItems.
     * @param {GalleryItemCreateManyArgs} args - Arguments to create many GalleryItems.
     * @example
     * // Create many GalleryItems
     * const galleryItem = await prisma.galleryItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GalleryItemCreateManyArgs>(args?: SelectSubset<T, GalleryItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GalleryItems and returns the data saved in the database.
     * @param {GalleryItemCreateManyAndReturnArgs} args - Arguments to create many GalleryItems.
     * @example
     * // Create many GalleryItems
     * const galleryItem = await prisma.galleryItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GalleryItems and only return the `id`
     * const galleryItemWithIdOnly = await prisma.galleryItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GalleryItemCreateManyAndReturnArgs>(args?: SelectSubset<T, GalleryItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GalleryItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GalleryItem.
     * @param {GalleryItemDeleteArgs} args - Arguments to delete one GalleryItem.
     * @example
     * // Delete one GalleryItem
     * const GalleryItem = await prisma.galleryItem.delete({
     *   where: {
     *     // ... filter to delete one GalleryItem
     *   }
     * })
     * 
     */
    delete<T extends GalleryItemDeleteArgs>(args: SelectSubset<T, GalleryItemDeleteArgs<ExtArgs>>): Prisma__GalleryItemClient<$Result.GetResult<Prisma.$GalleryItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GalleryItem.
     * @param {GalleryItemUpdateArgs} args - Arguments to update one GalleryItem.
     * @example
     * // Update one GalleryItem
     * const galleryItem = await prisma.galleryItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GalleryItemUpdateArgs>(args: SelectSubset<T, GalleryItemUpdateArgs<ExtArgs>>): Prisma__GalleryItemClient<$Result.GetResult<Prisma.$GalleryItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GalleryItems.
     * @param {GalleryItemDeleteManyArgs} args - Arguments to filter GalleryItems to delete.
     * @example
     * // Delete a few GalleryItems
     * const { count } = await prisma.galleryItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GalleryItemDeleteManyArgs>(args?: SelectSubset<T, GalleryItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GalleryItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GalleryItems
     * const galleryItem = await prisma.galleryItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GalleryItemUpdateManyArgs>(args: SelectSubset<T, GalleryItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GalleryItems and returns the data updated in the database.
     * @param {GalleryItemUpdateManyAndReturnArgs} args - Arguments to update many GalleryItems.
     * @example
     * // Update many GalleryItems
     * const galleryItem = await prisma.galleryItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GalleryItems and only return the `id`
     * const galleryItemWithIdOnly = await prisma.galleryItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GalleryItemUpdateManyAndReturnArgs>(args: SelectSubset<T, GalleryItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GalleryItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GalleryItem.
     * @param {GalleryItemUpsertArgs} args - Arguments to update or create a GalleryItem.
     * @example
     * // Update or create a GalleryItem
     * const galleryItem = await prisma.galleryItem.upsert({
     *   create: {
     *     // ... data to create a GalleryItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GalleryItem we want to update
     *   }
     * })
     */
    upsert<T extends GalleryItemUpsertArgs>(args: SelectSubset<T, GalleryItemUpsertArgs<ExtArgs>>): Prisma__GalleryItemClient<$Result.GetResult<Prisma.$GalleryItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GalleryItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryItemCountArgs} args - Arguments to filter GalleryItems to count.
     * @example
     * // Count the number of GalleryItems
     * const count = await prisma.galleryItem.count({
     *   where: {
     *     // ... the filter for the GalleryItems we want to count
     *   }
     * })
    **/
    count<T extends GalleryItemCountArgs>(
      args?: Subset<T, GalleryItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GalleryItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GalleryItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GalleryItemAggregateArgs>(args: Subset<T, GalleryItemAggregateArgs>): Prisma.PrismaPromise<GetGalleryItemAggregateType<T>>

    /**
     * Group by GalleryItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GalleryItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GalleryItemGroupByArgs['orderBy'] }
        : { orderBy?: GalleryItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GalleryItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGalleryItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GalleryItem model
   */
  readonly fields: GalleryItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GalleryItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GalleryItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GalleryItem model
   */
  interface GalleryItemFieldRefs {
    readonly id: FieldRef<"GalleryItem", 'String'>
    readonly title: FieldRef<"GalleryItem", 'String'>
    readonly category: FieldRef<"GalleryItem", 'String'>
    readonly caption: FieldRef<"GalleryItem", 'String'>
    readonly image: FieldRef<"GalleryItem", 'String'>
    readonly sortOrder: FieldRef<"GalleryItem", 'Int'>
    readonly createdAt: FieldRef<"GalleryItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GalleryItem findUnique
   */
  export type GalleryItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryItem
     */
    select?: GalleryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryItem
     */
    omit?: GalleryItemOmit<ExtArgs> | null
    /**
     * Filter, which GalleryItem to fetch.
     */
    where: GalleryItemWhereUniqueInput
  }

  /**
   * GalleryItem findUniqueOrThrow
   */
  export type GalleryItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryItem
     */
    select?: GalleryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryItem
     */
    omit?: GalleryItemOmit<ExtArgs> | null
    /**
     * Filter, which GalleryItem to fetch.
     */
    where: GalleryItemWhereUniqueInput
  }

  /**
   * GalleryItem findFirst
   */
  export type GalleryItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryItem
     */
    select?: GalleryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryItem
     */
    omit?: GalleryItemOmit<ExtArgs> | null
    /**
     * Filter, which GalleryItem to fetch.
     */
    where?: GalleryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GalleryItems to fetch.
     */
    orderBy?: GalleryItemOrderByWithRelationInput | GalleryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GalleryItems.
     */
    cursor?: GalleryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GalleryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GalleryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GalleryItems.
     */
    distinct?: GalleryItemScalarFieldEnum | GalleryItemScalarFieldEnum[]
  }

  /**
   * GalleryItem findFirstOrThrow
   */
  export type GalleryItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryItem
     */
    select?: GalleryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryItem
     */
    omit?: GalleryItemOmit<ExtArgs> | null
    /**
     * Filter, which GalleryItem to fetch.
     */
    where?: GalleryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GalleryItems to fetch.
     */
    orderBy?: GalleryItemOrderByWithRelationInput | GalleryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GalleryItems.
     */
    cursor?: GalleryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GalleryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GalleryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GalleryItems.
     */
    distinct?: GalleryItemScalarFieldEnum | GalleryItemScalarFieldEnum[]
  }

  /**
   * GalleryItem findMany
   */
  export type GalleryItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryItem
     */
    select?: GalleryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryItem
     */
    omit?: GalleryItemOmit<ExtArgs> | null
    /**
     * Filter, which GalleryItems to fetch.
     */
    where?: GalleryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GalleryItems to fetch.
     */
    orderBy?: GalleryItemOrderByWithRelationInput | GalleryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GalleryItems.
     */
    cursor?: GalleryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GalleryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GalleryItems.
     */
    skip?: number
    distinct?: GalleryItemScalarFieldEnum | GalleryItemScalarFieldEnum[]
  }

  /**
   * GalleryItem create
   */
  export type GalleryItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryItem
     */
    select?: GalleryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryItem
     */
    omit?: GalleryItemOmit<ExtArgs> | null
    /**
     * The data needed to create a GalleryItem.
     */
    data: XOR<GalleryItemCreateInput, GalleryItemUncheckedCreateInput>
  }

  /**
   * GalleryItem createMany
   */
  export type GalleryItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GalleryItems.
     */
    data: GalleryItemCreateManyInput | GalleryItemCreateManyInput[]
  }

  /**
   * GalleryItem createManyAndReturn
   */
  export type GalleryItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryItem
     */
    select?: GalleryItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryItem
     */
    omit?: GalleryItemOmit<ExtArgs> | null
    /**
     * The data used to create many GalleryItems.
     */
    data: GalleryItemCreateManyInput | GalleryItemCreateManyInput[]
  }

  /**
   * GalleryItem update
   */
  export type GalleryItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryItem
     */
    select?: GalleryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryItem
     */
    omit?: GalleryItemOmit<ExtArgs> | null
    /**
     * The data needed to update a GalleryItem.
     */
    data: XOR<GalleryItemUpdateInput, GalleryItemUncheckedUpdateInput>
    /**
     * Choose, which GalleryItem to update.
     */
    where: GalleryItemWhereUniqueInput
  }

  /**
   * GalleryItem updateMany
   */
  export type GalleryItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GalleryItems.
     */
    data: XOR<GalleryItemUpdateManyMutationInput, GalleryItemUncheckedUpdateManyInput>
    /**
     * Filter which GalleryItems to update
     */
    where?: GalleryItemWhereInput
    /**
     * Limit how many GalleryItems to update.
     */
    limit?: number
  }

  /**
   * GalleryItem updateManyAndReturn
   */
  export type GalleryItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryItem
     */
    select?: GalleryItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryItem
     */
    omit?: GalleryItemOmit<ExtArgs> | null
    /**
     * The data used to update GalleryItems.
     */
    data: XOR<GalleryItemUpdateManyMutationInput, GalleryItemUncheckedUpdateManyInput>
    /**
     * Filter which GalleryItems to update
     */
    where?: GalleryItemWhereInput
    /**
     * Limit how many GalleryItems to update.
     */
    limit?: number
  }

  /**
   * GalleryItem upsert
   */
  export type GalleryItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryItem
     */
    select?: GalleryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryItem
     */
    omit?: GalleryItemOmit<ExtArgs> | null
    /**
     * The filter to search for the GalleryItem to update in case it exists.
     */
    where: GalleryItemWhereUniqueInput
    /**
     * In case the GalleryItem found by the `where` argument doesn't exist, create a new GalleryItem with this data.
     */
    create: XOR<GalleryItemCreateInput, GalleryItemUncheckedCreateInput>
    /**
     * In case the GalleryItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GalleryItemUpdateInput, GalleryItemUncheckedUpdateInput>
  }

  /**
   * GalleryItem delete
   */
  export type GalleryItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryItem
     */
    select?: GalleryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryItem
     */
    omit?: GalleryItemOmit<ExtArgs> | null
    /**
     * Filter which GalleryItem to delete.
     */
    where: GalleryItemWhereUniqueInput
  }

  /**
   * GalleryItem deleteMany
   */
  export type GalleryItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GalleryItems to delete
     */
    where?: GalleryItemWhereInput
    /**
     * Limit how many GalleryItems to delete.
     */
    limit?: number
  }

  /**
   * GalleryItem without action
   */
  export type GalleryItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryItem
     */
    select?: GalleryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryItem
     */
    omit?: GalleryItemOmit<ExtArgs> | null
  }


  /**
   * Model Setting
   */

  export type AggregateSetting = {
    _count: SettingCountAggregateOutputType | null
    _min: SettingMinAggregateOutputType | null
    _max: SettingMaxAggregateOutputType | null
  }

  export type SettingMinAggregateOutputType = {
    key: string | null
    value: string | null
    updatedAt: Date | null
  }

  export type SettingMaxAggregateOutputType = {
    key: string | null
    value: string | null
    updatedAt: Date | null
  }

  export type SettingCountAggregateOutputType = {
    key: number
    value: number
    updatedAt: number
    _all: number
  }


  export type SettingMinAggregateInputType = {
    key?: true
    value?: true
    updatedAt?: true
  }

  export type SettingMaxAggregateInputType = {
    key?: true
    value?: true
    updatedAt?: true
  }

  export type SettingCountAggregateInputType = {
    key?: true
    value?: true
    updatedAt?: true
    _all?: true
  }

  export type SettingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Setting to aggregate.
     */
    where?: SettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Settings
    **/
    _count?: true | SettingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SettingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SettingMaxAggregateInputType
  }

  export type GetSettingAggregateType<T extends SettingAggregateArgs> = {
        [P in keyof T & keyof AggregateSetting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSetting[P]>
      : GetScalarType<T[P], AggregateSetting[P]>
  }




  export type SettingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SettingWhereInput
    orderBy?: SettingOrderByWithAggregationInput | SettingOrderByWithAggregationInput[]
    by: SettingScalarFieldEnum[] | SettingScalarFieldEnum
    having?: SettingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SettingCountAggregateInputType | true
    _min?: SettingMinAggregateInputType
    _max?: SettingMaxAggregateInputType
  }

  export type SettingGroupByOutputType = {
    key: string
    value: string
    updatedAt: Date
    _count: SettingCountAggregateOutputType | null
    _min: SettingMinAggregateOutputType | null
    _max: SettingMaxAggregateOutputType | null
  }

  type GetSettingGroupByPayload<T extends SettingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SettingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SettingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SettingGroupByOutputType[P]>
            : GetScalarType<T[P], SettingGroupByOutputType[P]>
        }
      >
    >


  export type SettingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    key?: boolean
    value?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["setting"]>

  export type SettingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    key?: boolean
    value?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["setting"]>

  export type SettingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    key?: boolean
    value?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["setting"]>

  export type SettingSelectScalar = {
    key?: boolean
    value?: boolean
    updatedAt?: boolean
  }

  export type SettingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"key" | "value" | "updatedAt", ExtArgs["result"]["setting"]>

  export type $SettingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Setting"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      key: string
      value: string
      updatedAt: Date
    }, ExtArgs["result"]["setting"]>
    composites: {}
  }

  type SettingGetPayload<S extends boolean | null | undefined | SettingDefaultArgs> = $Result.GetResult<Prisma.$SettingPayload, S>

  type SettingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SettingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SettingCountAggregateInputType | true
    }

  export interface SettingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Setting'], meta: { name: 'Setting' } }
    /**
     * Find zero or one Setting that matches the filter.
     * @param {SettingFindUniqueArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SettingFindUniqueArgs>(args: SelectSubset<T, SettingFindUniqueArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Setting that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SettingFindUniqueOrThrowArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SettingFindUniqueOrThrowArgs>(args: SelectSubset<T, SettingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Setting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingFindFirstArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SettingFindFirstArgs>(args?: SelectSubset<T, SettingFindFirstArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Setting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingFindFirstOrThrowArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SettingFindFirstOrThrowArgs>(args?: SelectSubset<T, SettingFindFirstOrThrowArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Settings
     * const settings = await prisma.setting.findMany()
     * 
     * // Get first 10 Settings
     * const settings = await prisma.setting.findMany({ take: 10 })
     * 
     * // Only select the `key`
     * const settingWithKeyOnly = await prisma.setting.findMany({ select: { key: true } })
     * 
     */
    findMany<T extends SettingFindManyArgs>(args?: SelectSubset<T, SettingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Setting.
     * @param {SettingCreateArgs} args - Arguments to create a Setting.
     * @example
     * // Create one Setting
     * const Setting = await prisma.setting.create({
     *   data: {
     *     // ... data to create a Setting
     *   }
     * })
     * 
     */
    create<T extends SettingCreateArgs>(args: SelectSubset<T, SettingCreateArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Settings.
     * @param {SettingCreateManyArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const setting = await prisma.setting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SettingCreateManyArgs>(args?: SelectSubset<T, SettingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Settings and returns the data saved in the database.
     * @param {SettingCreateManyAndReturnArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const setting = await prisma.setting.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Settings and only return the `key`
     * const settingWithKeyOnly = await prisma.setting.createManyAndReturn({
     *   select: { key: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SettingCreateManyAndReturnArgs>(args?: SelectSubset<T, SettingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Setting.
     * @param {SettingDeleteArgs} args - Arguments to delete one Setting.
     * @example
     * // Delete one Setting
     * const Setting = await prisma.setting.delete({
     *   where: {
     *     // ... filter to delete one Setting
     *   }
     * })
     * 
     */
    delete<T extends SettingDeleteArgs>(args: SelectSubset<T, SettingDeleteArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Setting.
     * @param {SettingUpdateArgs} args - Arguments to update one Setting.
     * @example
     * // Update one Setting
     * const setting = await prisma.setting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SettingUpdateArgs>(args: SelectSubset<T, SettingUpdateArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Settings.
     * @param {SettingDeleteManyArgs} args - Arguments to filter Settings to delete.
     * @example
     * // Delete a few Settings
     * const { count } = await prisma.setting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SettingDeleteManyArgs>(args?: SelectSubset<T, SettingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Settings
     * const setting = await prisma.setting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SettingUpdateManyArgs>(args: SelectSubset<T, SettingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settings and returns the data updated in the database.
     * @param {SettingUpdateManyAndReturnArgs} args - Arguments to update many Settings.
     * @example
     * // Update many Settings
     * const setting = await prisma.setting.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Settings and only return the `key`
     * const settingWithKeyOnly = await prisma.setting.updateManyAndReturn({
     *   select: { key: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SettingUpdateManyAndReturnArgs>(args: SelectSubset<T, SettingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Setting.
     * @param {SettingUpsertArgs} args - Arguments to update or create a Setting.
     * @example
     * // Update or create a Setting
     * const setting = await prisma.setting.upsert({
     *   create: {
     *     // ... data to create a Setting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Setting we want to update
     *   }
     * })
     */
    upsert<T extends SettingUpsertArgs>(args: SelectSubset<T, SettingUpsertArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingCountArgs} args - Arguments to filter Settings to count.
     * @example
     * // Count the number of Settings
     * const count = await prisma.setting.count({
     *   where: {
     *     // ... the filter for the Settings we want to count
     *   }
     * })
    **/
    count<T extends SettingCountArgs>(
      args?: Subset<T, SettingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SettingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Setting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SettingAggregateArgs>(args: Subset<T, SettingAggregateArgs>): Prisma.PrismaPromise<GetSettingAggregateType<T>>

    /**
     * Group by Setting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SettingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SettingGroupByArgs['orderBy'] }
        : { orderBy?: SettingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SettingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSettingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Setting model
   */
  readonly fields: SettingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Setting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SettingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Setting model
   */
  interface SettingFieldRefs {
    readonly key: FieldRef<"Setting", 'String'>
    readonly value: FieldRef<"Setting", 'String'>
    readonly updatedAt: FieldRef<"Setting", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Setting findUnique
   */
  export type SettingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Filter, which Setting to fetch.
     */
    where: SettingWhereUniqueInput
  }

  /**
   * Setting findUniqueOrThrow
   */
  export type SettingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Filter, which Setting to fetch.
     */
    where: SettingWhereUniqueInput
  }

  /**
   * Setting findFirst
   */
  export type SettingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Filter, which Setting to fetch.
     */
    where?: SettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settings.
     */
    cursor?: SettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingScalarFieldEnum | SettingScalarFieldEnum[]
  }

  /**
   * Setting findFirstOrThrow
   */
  export type SettingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Filter, which Setting to fetch.
     */
    where?: SettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settings.
     */
    cursor?: SettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingScalarFieldEnum | SettingScalarFieldEnum[]
  }

  /**
   * Setting findMany
   */
  export type SettingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where?: SettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Settings.
     */
    cursor?: SettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    distinct?: SettingScalarFieldEnum | SettingScalarFieldEnum[]
  }

  /**
   * Setting create
   */
  export type SettingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * The data needed to create a Setting.
     */
    data: XOR<SettingCreateInput, SettingUncheckedCreateInput>
  }

  /**
   * Setting createMany
   */
  export type SettingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Settings.
     */
    data: SettingCreateManyInput | SettingCreateManyInput[]
  }

  /**
   * Setting createManyAndReturn
   */
  export type SettingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * The data used to create many Settings.
     */
    data: SettingCreateManyInput | SettingCreateManyInput[]
  }

  /**
   * Setting update
   */
  export type SettingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * The data needed to update a Setting.
     */
    data: XOR<SettingUpdateInput, SettingUncheckedUpdateInput>
    /**
     * Choose, which Setting to update.
     */
    where: SettingWhereUniqueInput
  }

  /**
   * Setting updateMany
   */
  export type SettingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Settings.
     */
    data: XOR<SettingUpdateManyMutationInput, SettingUncheckedUpdateManyInput>
    /**
     * Filter which Settings to update
     */
    where?: SettingWhereInput
    /**
     * Limit how many Settings to update.
     */
    limit?: number
  }

  /**
   * Setting updateManyAndReturn
   */
  export type SettingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * The data used to update Settings.
     */
    data: XOR<SettingUpdateManyMutationInput, SettingUncheckedUpdateManyInput>
    /**
     * Filter which Settings to update
     */
    where?: SettingWhereInput
    /**
     * Limit how many Settings to update.
     */
    limit?: number
  }

  /**
   * Setting upsert
   */
  export type SettingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * The filter to search for the Setting to update in case it exists.
     */
    where: SettingWhereUniqueInput
    /**
     * In case the Setting found by the `where` argument doesn't exist, create a new Setting with this data.
     */
    create: XOR<SettingCreateInput, SettingUncheckedCreateInput>
    /**
     * In case the Setting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SettingUpdateInput, SettingUncheckedUpdateInput>
  }

  /**
   * Setting delete
   */
  export type SettingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Filter which Setting to delete.
     */
    where: SettingWhereUniqueInput
  }

  /**
   * Setting deleteMany
   */
  export type SettingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Settings to delete
     */
    where?: SettingWhereInput
    /**
     * Limit how many Settings to delete.
     */
    limit?: number
  }

  /**
   * Setting without action
   */
  export type SettingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
  }


  /**
   * Model Upload
   */

  export type AggregateUpload = {
    _count: UploadCountAggregateOutputType | null
    _avg: UploadAvgAggregateOutputType | null
    _sum: UploadSumAggregateOutputType | null
    _min: UploadMinAggregateOutputType | null
    _max: UploadMaxAggregateOutputType | null
  }

  export type UploadAvgAggregateOutputType = {
    size: number | null
  }

  export type UploadSumAggregateOutputType = {
    size: number | null
  }

  export type UploadMinAggregateOutputType = {
    id: string | null
    mime: string | null
    size: number | null
    data: string | null
    createdAt: Date | null
  }

  export type UploadMaxAggregateOutputType = {
    id: string | null
    mime: string | null
    size: number | null
    data: string | null
    createdAt: Date | null
  }

  export type UploadCountAggregateOutputType = {
    id: number
    mime: number
    size: number
    data: number
    createdAt: number
    _all: number
  }


  export type UploadAvgAggregateInputType = {
    size?: true
  }

  export type UploadSumAggregateInputType = {
    size?: true
  }

  export type UploadMinAggregateInputType = {
    id?: true
    mime?: true
    size?: true
    data?: true
    createdAt?: true
  }

  export type UploadMaxAggregateInputType = {
    id?: true
    mime?: true
    size?: true
    data?: true
    createdAt?: true
  }

  export type UploadCountAggregateInputType = {
    id?: true
    mime?: true
    size?: true
    data?: true
    createdAt?: true
    _all?: true
  }

  export type UploadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Upload to aggregate.
     */
    where?: UploadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Uploads to fetch.
     */
    orderBy?: UploadOrderByWithRelationInput | UploadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UploadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Uploads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Uploads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Uploads
    **/
    _count?: true | UploadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UploadAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UploadSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UploadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UploadMaxAggregateInputType
  }

  export type GetUploadAggregateType<T extends UploadAggregateArgs> = {
        [P in keyof T & keyof AggregateUpload]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUpload[P]>
      : GetScalarType<T[P], AggregateUpload[P]>
  }




  export type UploadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UploadWhereInput
    orderBy?: UploadOrderByWithAggregationInput | UploadOrderByWithAggregationInput[]
    by: UploadScalarFieldEnum[] | UploadScalarFieldEnum
    having?: UploadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UploadCountAggregateInputType | true
    _avg?: UploadAvgAggregateInputType
    _sum?: UploadSumAggregateInputType
    _min?: UploadMinAggregateInputType
    _max?: UploadMaxAggregateInputType
  }

  export type UploadGroupByOutputType = {
    id: string
    mime: string
    size: number
    data: string
    createdAt: Date
    _count: UploadCountAggregateOutputType | null
    _avg: UploadAvgAggregateOutputType | null
    _sum: UploadSumAggregateOutputType | null
    _min: UploadMinAggregateOutputType | null
    _max: UploadMaxAggregateOutputType | null
  }

  type GetUploadGroupByPayload<T extends UploadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UploadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UploadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UploadGroupByOutputType[P]>
            : GetScalarType<T[P], UploadGroupByOutputType[P]>
        }
      >
    >


  export type UploadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mime?: boolean
    size?: boolean
    data?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["upload"]>

  export type UploadSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mime?: boolean
    size?: boolean
    data?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["upload"]>

  export type UploadSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mime?: boolean
    size?: boolean
    data?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["upload"]>

  export type UploadSelectScalar = {
    id?: boolean
    mime?: boolean
    size?: boolean
    data?: boolean
    createdAt?: boolean
  }

  export type UploadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "mime" | "size" | "data" | "createdAt", ExtArgs["result"]["upload"]>

  export type $UploadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Upload"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      mime: string
      size: number
      data: string
      createdAt: Date
    }, ExtArgs["result"]["upload"]>
    composites: {}
  }

  type UploadGetPayload<S extends boolean | null | undefined | UploadDefaultArgs> = $Result.GetResult<Prisma.$UploadPayload, S>

  type UploadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UploadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UploadCountAggregateInputType | true
    }

  export interface UploadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Upload'], meta: { name: 'Upload' } }
    /**
     * Find zero or one Upload that matches the filter.
     * @param {UploadFindUniqueArgs} args - Arguments to find a Upload
     * @example
     * // Get one Upload
     * const upload = await prisma.upload.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UploadFindUniqueArgs>(args: SelectSubset<T, UploadFindUniqueArgs<ExtArgs>>): Prisma__UploadClient<$Result.GetResult<Prisma.$UploadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Upload that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UploadFindUniqueOrThrowArgs} args - Arguments to find a Upload
     * @example
     * // Get one Upload
     * const upload = await prisma.upload.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UploadFindUniqueOrThrowArgs>(args: SelectSubset<T, UploadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UploadClient<$Result.GetResult<Prisma.$UploadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Upload that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadFindFirstArgs} args - Arguments to find a Upload
     * @example
     * // Get one Upload
     * const upload = await prisma.upload.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UploadFindFirstArgs>(args?: SelectSubset<T, UploadFindFirstArgs<ExtArgs>>): Prisma__UploadClient<$Result.GetResult<Prisma.$UploadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Upload that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadFindFirstOrThrowArgs} args - Arguments to find a Upload
     * @example
     * // Get one Upload
     * const upload = await prisma.upload.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UploadFindFirstOrThrowArgs>(args?: SelectSubset<T, UploadFindFirstOrThrowArgs<ExtArgs>>): Prisma__UploadClient<$Result.GetResult<Prisma.$UploadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Uploads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Uploads
     * const uploads = await prisma.upload.findMany()
     * 
     * // Get first 10 Uploads
     * const uploads = await prisma.upload.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const uploadWithIdOnly = await prisma.upload.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UploadFindManyArgs>(args?: SelectSubset<T, UploadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UploadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Upload.
     * @param {UploadCreateArgs} args - Arguments to create a Upload.
     * @example
     * // Create one Upload
     * const Upload = await prisma.upload.create({
     *   data: {
     *     // ... data to create a Upload
     *   }
     * })
     * 
     */
    create<T extends UploadCreateArgs>(args: SelectSubset<T, UploadCreateArgs<ExtArgs>>): Prisma__UploadClient<$Result.GetResult<Prisma.$UploadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Uploads.
     * @param {UploadCreateManyArgs} args - Arguments to create many Uploads.
     * @example
     * // Create many Uploads
     * const upload = await prisma.upload.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UploadCreateManyArgs>(args?: SelectSubset<T, UploadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Uploads and returns the data saved in the database.
     * @param {UploadCreateManyAndReturnArgs} args - Arguments to create many Uploads.
     * @example
     * // Create many Uploads
     * const upload = await prisma.upload.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Uploads and only return the `id`
     * const uploadWithIdOnly = await prisma.upload.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UploadCreateManyAndReturnArgs>(args?: SelectSubset<T, UploadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UploadPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Upload.
     * @param {UploadDeleteArgs} args - Arguments to delete one Upload.
     * @example
     * // Delete one Upload
     * const Upload = await prisma.upload.delete({
     *   where: {
     *     // ... filter to delete one Upload
     *   }
     * })
     * 
     */
    delete<T extends UploadDeleteArgs>(args: SelectSubset<T, UploadDeleteArgs<ExtArgs>>): Prisma__UploadClient<$Result.GetResult<Prisma.$UploadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Upload.
     * @param {UploadUpdateArgs} args - Arguments to update one Upload.
     * @example
     * // Update one Upload
     * const upload = await prisma.upload.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UploadUpdateArgs>(args: SelectSubset<T, UploadUpdateArgs<ExtArgs>>): Prisma__UploadClient<$Result.GetResult<Prisma.$UploadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Uploads.
     * @param {UploadDeleteManyArgs} args - Arguments to filter Uploads to delete.
     * @example
     * // Delete a few Uploads
     * const { count } = await prisma.upload.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UploadDeleteManyArgs>(args?: SelectSubset<T, UploadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Uploads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Uploads
     * const upload = await prisma.upload.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UploadUpdateManyArgs>(args: SelectSubset<T, UploadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Uploads and returns the data updated in the database.
     * @param {UploadUpdateManyAndReturnArgs} args - Arguments to update many Uploads.
     * @example
     * // Update many Uploads
     * const upload = await prisma.upload.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Uploads and only return the `id`
     * const uploadWithIdOnly = await prisma.upload.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UploadUpdateManyAndReturnArgs>(args: SelectSubset<T, UploadUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UploadPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Upload.
     * @param {UploadUpsertArgs} args - Arguments to update or create a Upload.
     * @example
     * // Update or create a Upload
     * const upload = await prisma.upload.upsert({
     *   create: {
     *     // ... data to create a Upload
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Upload we want to update
     *   }
     * })
     */
    upsert<T extends UploadUpsertArgs>(args: SelectSubset<T, UploadUpsertArgs<ExtArgs>>): Prisma__UploadClient<$Result.GetResult<Prisma.$UploadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Uploads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadCountArgs} args - Arguments to filter Uploads to count.
     * @example
     * // Count the number of Uploads
     * const count = await prisma.upload.count({
     *   where: {
     *     // ... the filter for the Uploads we want to count
     *   }
     * })
    **/
    count<T extends UploadCountArgs>(
      args?: Subset<T, UploadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UploadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Upload.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UploadAggregateArgs>(args: Subset<T, UploadAggregateArgs>): Prisma.PrismaPromise<GetUploadAggregateType<T>>

    /**
     * Group by Upload.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UploadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UploadGroupByArgs['orderBy'] }
        : { orderBy?: UploadGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UploadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUploadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Upload model
   */
  readonly fields: UploadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Upload.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UploadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Upload model
   */
  interface UploadFieldRefs {
    readonly id: FieldRef<"Upload", 'String'>
    readonly mime: FieldRef<"Upload", 'String'>
    readonly size: FieldRef<"Upload", 'Int'>
    readonly data: FieldRef<"Upload", 'String'>
    readonly createdAt: FieldRef<"Upload", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Upload findUnique
   */
  export type UploadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upload
     */
    select?: UploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Upload
     */
    omit?: UploadOmit<ExtArgs> | null
    /**
     * Filter, which Upload to fetch.
     */
    where: UploadWhereUniqueInput
  }

  /**
   * Upload findUniqueOrThrow
   */
  export type UploadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upload
     */
    select?: UploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Upload
     */
    omit?: UploadOmit<ExtArgs> | null
    /**
     * Filter, which Upload to fetch.
     */
    where: UploadWhereUniqueInput
  }

  /**
   * Upload findFirst
   */
  export type UploadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upload
     */
    select?: UploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Upload
     */
    omit?: UploadOmit<ExtArgs> | null
    /**
     * Filter, which Upload to fetch.
     */
    where?: UploadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Uploads to fetch.
     */
    orderBy?: UploadOrderByWithRelationInput | UploadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Uploads.
     */
    cursor?: UploadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Uploads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Uploads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Uploads.
     */
    distinct?: UploadScalarFieldEnum | UploadScalarFieldEnum[]
  }

  /**
   * Upload findFirstOrThrow
   */
  export type UploadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upload
     */
    select?: UploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Upload
     */
    omit?: UploadOmit<ExtArgs> | null
    /**
     * Filter, which Upload to fetch.
     */
    where?: UploadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Uploads to fetch.
     */
    orderBy?: UploadOrderByWithRelationInput | UploadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Uploads.
     */
    cursor?: UploadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Uploads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Uploads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Uploads.
     */
    distinct?: UploadScalarFieldEnum | UploadScalarFieldEnum[]
  }

  /**
   * Upload findMany
   */
  export type UploadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upload
     */
    select?: UploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Upload
     */
    omit?: UploadOmit<ExtArgs> | null
    /**
     * Filter, which Uploads to fetch.
     */
    where?: UploadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Uploads to fetch.
     */
    orderBy?: UploadOrderByWithRelationInput | UploadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Uploads.
     */
    cursor?: UploadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Uploads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Uploads.
     */
    skip?: number
    distinct?: UploadScalarFieldEnum | UploadScalarFieldEnum[]
  }

  /**
   * Upload create
   */
  export type UploadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upload
     */
    select?: UploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Upload
     */
    omit?: UploadOmit<ExtArgs> | null
    /**
     * The data needed to create a Upload.
     */
    data: XOR<UploadCreateInput, UploadUncheckedCreateInput>
  }

  /**
   * Upload createMany
   */
  export type UploadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Uploads.
     */
    data: UploadCreateManyInput | UploadCreateManyInput[]
  }

  /**
   * Upload createManyAndReturn
   */
  export type UploadCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upload
     */
    select?: UploadSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Upload
     */
    omit?: UploadOmit<ExtArgs> | null
    /**
     * The data used to create many Uploads.
     */
    data: UploadCreateManyInput | UploadCreateManyInput[]
  }

  /**
   * Upload update
   */
  export type UploadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upload
     */
    select?: UploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Upload
     */
    omit?: UploadOmit<ExtArgs> | null
    /**
     * The data needed to update a Upload.
     */
    data: XOR<UploadUpdateInput, UploadUncheckedUpdateInput>
    /**
     * Choose, which Upload to update.
     */
    where: UploadWhereUniqueInput
  }

  /**
   * Upload updateMany
   */
  export type UploadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Uploads.
     */
    data: XOR<UploadUpdateManyMutationInput, UploadUncheckedUpdateManyInput>
    /**
     * Filter which Uploads to update
     */
    where?: UploadWhereInput
    /**
     * Limit how many Uploads to update.
     */
    limit?: number
  }

  /**
   * Upload updateManyAndReturn
   */
  export type UploadUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upload
     */
    select?: UploadSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Upload
     */
    omit?: UploadOmit<ExtArgs> | null
    /**
     * The data used to update Uploads.
     */
    data: XOR<UploadUpdateManyMutationInput, UploadUncheckedUpdateManyInput>
    /**
     * Filter which Uploads to update
     */
    where?: UploadWhereInput
    /**
     * Limit how many Uploads to update.
     */
    limit?: number
  }

  /**
   * Upload upsert
   */
  export type UploadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upload
     */
    select?: UploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Upload
     */
    omit?: UploadOmit<ExtArgs> | null
    /**
     * The filter to search for the Upload to update in case it exists.
     */
    where: UploadWhereUniqueInput
    /**
     * In case the Upload found by the `where` argument doesn't exist, create a new Upload with this data.
     */
    create: XOR<UploadCreateInput, UploadUncheckedCreateInput>
    /**
     * In case the Upload was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UploadUpdateInput, UploadUncheckedUpdateInput>
  }

  /**
   * Upload delete
   */
  export type UploadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upload
     */
    select?: UploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Upload
     */
    omit?: UploadOmit<ExtArgs> | null
    /**
     * Filter which Upload to delete.
     */
    where: UploadWhereUniqueInput
  }

  /**
   * Upload deleteMany
   */
  export type UploadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Uploads to delete
     */
    where?: UploadWhereInput
    /**
     * Limit how many Uploads to delete.
     */
    limit?: number
  }

  /**
   * Upload without action
   */
  export type UploadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upload
     */
    select?: UploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Upload
     */
    omit?: UploadOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    name: 'name',
    tagline: 'tagline',
    location: 'location',
    type: 'type',
    status: 'status',
    price: 'price',
    landArea: 'landArea',
    totalUnits: 'totalUnits',
    unitSizes: 'unitSizes',
    reraNumber: 'reraNumber',
    possessionDate: 'possessionDate',
    description: 'description',
    highlights: 'highlights',
    amenities: 'amenities',
    image: 'image',
    gallery: 'gallery',
    featured: 'featured',
    sortOrder: 'sortOrder',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const FlatScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    tower: 'tower',
    floor: 'floor',
    floorLabel: 'floorLabel',
    unitNumber: 'unitNumber',
    unitType: 'unitType',
    areaSqft: 'areaSqft',
    priceLakhs: 'priceLakhs',
    facing: 'facing',
    status: 'status',
    lockedUntil: 'lockedUntil',
    lockSession: 'lockSession',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FlatScalarFieldEnum = (typeof FlatScalarFieldEnum)[keyof typeof FlatScalarFieldEnum]


  export const BookingScalarFieldEnum: {
    id: 'id',
    flatId: 'flatId',
    buyerName: 'buyerName',
    buyerPhone: 'buyerPhone',
    buyerEmail: 'buyerEmail',
    amountLabel: 'amountLabel',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum]


  export const EnquiryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phone: 'phone',
    email: 'email',
    project: 'project',
    budget: 'budget',
    message: 'message',
    source: 'source',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type EnquiryScalarFieldEnum = (typeof EnquiryScalarFieldEnum)[keyof typeof EnquiryScalarFieldEnum]


  export const SubscriberScalarFieldEnum: {
    id: 'id',
    email: 'email',
    createdAt: 'createdAt'
  };

  export type SubscriberScalarFieldEnum = (typeof SubscriberScalarFieldEnum)[keyof typeof SubscriberScalarFieldEnum]


  export const TestimonialScalarFieldEnum: {
    id: 'id',
    name: 'name',
    role: 'role',
    rating: 'rating',
    comment: 'comment',
    active: 'active',
    createdAt: 'createdAt'
  };

  export type TestimonialScalarFieldEnum = (typeof TestimonialScalarFieldEnum)[keyof typeof TestimonialScalarFieldEnum]


  export const BookingOrderScalarFieldEnum: {
    id: 'id',
    flatId: 'flatId',
    orderNumber: 'orderNumber',
    amount: 'amount',
    currency: 'currency',
    provider: 'provider',
    razorpayOrderId: 'razorpayOrderId',
    razorpayPaymentId: 'razorpayPaymentId',
    razorpaySignature: 'razorpaySignature',
    buyerName: 'buyerName',
    buyerPhone: 'buyerPhone',
    buyerEmail: 'buyerEmail',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BookingOrderScalarFieldEnum = (typeof BookingOrderScalarFieldEnum)[keyof typeof BookingOrderScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    rating: 'rating',
    title: 'title',
    comment: 'comment',
    projectName: 'projectName',
    flatNo: 'flatNo',
    albumId: 'albumId',
    approved: 'approved',
    createdAt: 'createdAt'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const AlbumScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    projectName: 'projectName',
    flatNo: 'flatNo',
    ownerName: 'ownerName',
    approved: 'approved',
    coverPhoto: 'coverPhoto',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AlbumScalarFieldEnum = (typeof AlbumScalarFieldEnum)[keyof typeof AlbumScalarFieldEnum]


  export const AlbumPhotoScalarFieldEnum: {
    id: 'id',
    albumId: 'albumId',
    url: 'url',
    caption: 'caption',
    createdAt: 'createdAt'
  };

  export type AlbumPhotoScalarFieldEnum = (typeof AlbumPhotoScalarFieldEnum)[keyof typeof AlbumPhotoScalarFieldEnum]


  export const GalleryItemScalarFieldEnum: {
    id: 'id',
    title: 'title',
    category: 'category',
    caption: 'caption',
    image: 'image',
    sortOrder: 'sortOrder',
    createdAt: 'createdAt'
  };

  export type GalleryItemScalarFieldEnum = (typeof GalleryItemScalarFieldEnum)[keyof typeof GalleryItemScalarFieldEnum]


  export const SettingScalarFieldEnum: {
    key: 'key',
    value: 'value',
    updatedAt: 'updatedAt'
  };

  export type SettingScalarFieldEnum = (typeof SettingScalarFieldEnum)[keyof typeof SettingScalarFieldEnum]


  export const UploadScalarFieldEnum: {
    id: 'id',
    mime: 'mime',
    size: 'size',
    data: 'data',
    createdAt: 'createdAt'
  };

  export type UploadScalarFieldEnum = (typeof UploadScalarFieldEnum)[keyof typeof UploadScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    slug?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    tagline?: StringNullableFilter<"Project"> | string | null
    location?: StringFilter<"Project"> | string
    type?: StringFilter<"Project"> | string
    status?: StringFilter<"Project"> | string
    price?: StringFilter<"Project"> | string
    landArea?: StringNullableFilter<"Project"> | string | null
    totalUnits?: StringNullableFilter<"Project"> | string | null
    unitSizes?: StringNullableFilter<"Project"> | string | null
    reraNumber?: StringNullableFilter<"Project"> | string | null
    possessionDate?: StringNullableFilter<"Project"> | string | null
    description?: StringFilter<"Project"> | string
    highlights?: StringFilter<"Project"> | string
    amenities?: StringNullableFilter<"Project"> | string | null
    image?: StringFilter<"Project"> | string
    gallery?: StringNullableFilter<"Project"> | string | null
    featured?: BoolFilter<"Project"> | boolean
    sortOrder?: IntFilter<"Project"> | number
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    flats?: FlatListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    tagline?: SortOrderInput | SortOrder
    location?: SortOrder
    type?: SortOrder
    status?: SortOrder
    price?: SortOrder
    landArea?: SortOrderInput | SortOrder
    totalUnits?: SortOrderInput | SortOrder
    unitSizes?: SortOrderInput | SortOrder
    reraNumber?: SortOrderInput | SortOrder
    possessionDate?: SortOrderInput | SortOrder
    description?: SortOrder
    highlights?: SortOrder
    amenities?: SortOrderInput | SortOrder
    image?: SortOrder
    gallery?: SortOrderInput | SortOrder
    featured?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    flats?: FlatOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    name?: StringFilter<"Project"> | string
    tagline?: StringNullableFilter<"Project"> | string | null
    location?: StringFilter<"Project"> | string
    type?: StringFilter<"Project"> | string
    status?: StringFilter<"Project"> | string
    price?: StringFilter<"Project"> | string
    landArea?: StringNullableFilter<"Project"> | string | null
    totalUnits?: StringNullableFilter<"Project"> | string | null
    unitSizes?: StringNullableFilter<"Project"> | string | null
    reraNumber?: StringNullableFilter<"Project"> | string | null
    possessionDate?: StringNullableFilter<"Project"> | string | null
    description?: StringFilter<"Project"> | string
    highlights?: StringFilter<"Project"> | string
    amenities?: StringNullableFilter<"Project"> | string | null
    image?: StringFilter<"Project"> | string
    gallery?: StringNullableFilter<"Project"> | string | null
    featured?: BoolFilter<"Project"> | boolean
    sortOrder?: IntFilter<"Project"> | number
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    flats?: FlatListRelationFilter
  }, "id" | "slug">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    tagline?: SortOrderInput | SortOrder
    location?: SortOrder
    type?: SortOrder
    status?: SortOrder
    price?: SortOrder
    landArea?: SortOrderInput | SortOrder
    totalUnits?: SortOrderInput | SortOrder
    unitSizes?: SortOrderInput | SortOrder
    reraNumber?: SortOrderInput | SortOrder
    possessionDate?: SortOrderInput | SortOrder
    description?: SortOrder
    highlights?: SortOrder
    amenities?: SortOrderInput | SortOrder
    image?: SortOrder
    gallery?: SortOrderInput | SortOrder
    featured?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _avg?: ProjectAvgOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
    _sum?: ProjectSumOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    slug?: StringWithAggregatesFilter<"Project"> | string
    name?: StringWithAggregatesFilter<"Project"> | string
    tagline?: StringNullableWithAggregatesFilter<"Project"> | string | null
    location?: StringWithAggregatesFilter<"Project"> | string
    type?: StringWithAggregatesFilter<"Project"> | string
    status?: StringWithAggregatesFilter<"Project"> | string
    price?: StringWithAggregatesFilter<"Project"> | string
    landArea?: StringNullableWithAggregatesFilter<"Project"> | string | null
    totalUnits?: StringNullableWithAggregatesFilter<"Project"> | string | null
    unitSizes?: StringNullableWithAggregatesFilter<"Project"> | string | null
    reraNumber?: StringNullableWithAggregatesFilter<"Project"> | string | null
    possessionDate?: StringNullableWithAggregatesFilter<"Project"> | string | null
    description?: StringWithAggregatesFilter<"Project"> | string
    highlights?: StringWithAggregatesFilter<"Project"> | string
    amenities?: StringNullableWithAggregatesFilter<"Project"> | string | null
    image?: StringWithAggregatesFilter<"Project"> | string
    gallery?: StringNullableWithAggregatesFilter<"Project"> | string | null
    featured?: BoolWithAggregatesFilter<"Project"> | boolean
    sortOrder?: IntWithAggregatesFilter<"Project"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
  }

  export type FlatWhereInput = {
    AND?: FlatWhereInput | FlatWhereInput[]
    OR?: FlatWhereInput[]
    NOT?: FlatWhereInput | FlatWhereInput[]
    id?: StringFilter<"Flat"> | string
    projectId?: StringFilter<"Flat"> | string
    tower?: StringFilter<"Flat"> | string
    floor?: IntFilter<"Flat"> | number
    floorLabel?: StringFilter<"Flat"> | string
    unitNumber?: StringFilter<"Flat"> | string
    unitType?: StringFilter<"Flat"> | string
    areaSqft?: IntFilter<"Flat"> | number
    priceLakhs?: FloatFilter<"Flat"> | number
    facing?: StringNullableFilter<"Flat"> | string | null
    status?: StringFilter<"Flat"> | string
    lockedUntil?: DateTimeNullableFilter<"Flat"> | Date | string | null
    lockSession?: StringNullableFilter<"Flat"> | string | null
    createdAt?: DateTimeFilter<"Flat"> | Date | string
    updatedAt?: DateTimeFilter<"Flat"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    bookings?: BookingListRelationFilter
    orders?: BookingOrderListRelationFilter
  }

  export type FlatOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    tower?: SortOrder
    floor?: SortOrder
    floorLabel?: SortOrder
    unitNumber?: SortOrder
    unitType?: SortOrder
    areaSqft?: SortOrder
    priceLakhs?: SortOrder
    facing?: SortOrderInput | SortOrder
    status?: SortOrder
    lockedUntil?: SortOrderInput | SortOrder
    lockSession?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
    bookings?: BookingOrderByRelationAggregateInput
    orders?: BookingOrderOrderByRelationAggregateInput
  }

  export type FlatWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    projectId_unitNumber?: FlatProjectIdUnitNumberCompoundUniqueInput
    AND?: FlatWhereInput | FlatWhereInput[]
    OR?: FlatWhereInput[]
    NOT?: FlatWhereInput | FlatWhereInput[]
    projectId?: StringFilter<"Flat"> | string
    tower?: StringFilter<"Flat"> | string
    floor?: IntFilter<"Flat"> | number
    floorLabel?: StringFilter<"Flat"> | string
    unitNumber?: StringFilter<"Flat"> | string
    unitType?: StringFilter<"Flat"> | string
    areaSqft?: IntFilter<"Flat"> | number
    priceLakhs?: FloatFilter<"Flat"> | number
    facing?: StringNullableFilter<"Flat"> | string | null
    status?: StringFilter<"Flat"> | string
    lockedUntil?: DateTimeNullableFilter<"Flat"> | Date | string | null
    lockSession?: StringNullableFilter<"Flat"> | string | null
    createdAt?: DateTimeFilter<"Flat"> | Date | string
    updatedAt?: DateTimeFilter<"Flat"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    bookings?: BookingListRelationFilter
    orders?: BookingOrderListRelationFilter
  }, "id" | "projectId_unitNumber">

  export type FlatOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    tower?: SortOrder
    floor?: SortOrder
    floorLabel?: SortOrder
    unitNumber?: SortOrder
    unitType?: SortOrder
    areaSqft?: SortOrder
    priceLakhs?: SortOrder
    facing?: SortOrderInput | SortOrder
    status?: SortOrder
    lockedUntil?: SortOrderInput | SortOrder
    lockSession?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FlatCountOrderByAggregateInput
    _avg?: FlatAvgOrderByAggregateInput
    _max?: FlatMaxOrderByAggregateInput
    _min?: FlatMinOrderByAggregateInput
    _sum?: FlatSumOrderByAggregateInput
  }

  export type FlatScalarWhereWithAggregatesInput = {
    AND?: FlatScalarWhereWithAggregatesInput | FlatScalarWhereWithAggregatesInput[]
    OR?: FlatScalarWhereWithAggregatesInput[]
    NOT?: FlatScalarWhereWithAggregatesInput | FlatScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Flat"> | string
    projectId?: StringWithAggregatesFilter<"Flat"> | string
    tower?: StringWithAggregatesFilter<"Flat"> | string
    floor?: IntWithAggregatesFilter<"Flat"> | number
    floorLabel?: StringWithAggregatesFilter<"Flat"> | string
    unitNumber?: StringWithAggregatesFilter<"Flat"> | string
    unitType?: StringWithAggregatesFilter<"Flat"> | string
    areaSqft?: IntWithAggregatesFilter<"Flat"> | number
    priceLakhs?: FloatWithAggregatesFilter<"Flat"> | number
    facing?: StringNullableWithAggregatesFilter<"Flat"> | string | null
    status?: StringWithAggregatesFilter<"Flat"> | string
    lockedUntil?: DateTimeNullableWithAggregatesFilter<"Flat"> | Date | string | null
    lockSession?: StringNullableWithAggregatesFilter<"Flat"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Flat"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Flat"> | Date | string
  }

  export type BookingWhereInput = {
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    id?: StringFilter<"Booking"> | string
    flatId?: StringFilter<"Booking"> | string
    buyerName?: StringFilter<"Booking"> | string
    buyerPhone?: StringFilter<"Booking"> | string
    buyerEmail?: StringNullableFilter<"Booking"> | string | null
    amountLabel?: StringNullableFilter<"Booking"> | string | null
    status?: StringFilter<"Booking"> | string
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    flat?: XOR<FlatScalarRelationFilter, FlatWhereInput>
  }

  export type BookingOrderByWithRelationInput = {
    id?: SortOrder
    flatId?: SortOrder
    buyerName?: SortOrder
    buyerPhone?: SortOrder
    buyerEmail?: SortOrderInput | SortOrder
    amountLabel?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    flat?: FlatOrderByWithRelationInput
  }

  export type BookingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    flatId?: StringFilter<"Booking"> | string
    buyerName?: StringFilter<"Booking"> | string
    buyerPhone?: StringFilter<"Booking"> | string
    buyerEmail?: StringNullableFilter<"Booking"> | string | null
    amountLabel?: StringNullableFilter<"Booking"> | string | null
    status?: StringFilter<"Booking"> | string
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    flat?: XOR<FlatScalarRelationFilter, FlatWhereInput>
  }, "id">

  export type BookingOrderByWithAggregationInput = {
    id?: SortOrder
    flatId?: SortOrder
    buyerName?: SortOrder
    buyerPhone?: SortOrder
    buyerEmail?: SortOrderInput | SortOrder
    amountLabel?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: BookingCountOrderByAggregateInput
    _max?: BookingMaxOrderByAggregateInput
    _min?: BookingMinOrderByAggregateInput
  }

  export type BookingScalarWhereWithAggregatesInput = {
    AND?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    OR?: BookingScalarWhereWithAggregatesInput[]
    NOT?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Booking"> | string
    flatId?: StringWithAggregatesFilter<"Booking"> | string
    buyerName?: StringWithAggregatesFilter<"Booking"> | string
    buyerPhone?: StringWithAggregatesFilter<"Booking"> | string
    buyerEmail?: StringNullableWithAggregatesFilter<"Booking"> | string | null
    amountLabel?: StringNullableWithAggregatesFilter<"Booking"> | string | null
    status?: StringWithAggregatesFilter<"Booking"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
  }

  export type EnquiryWhereInput = {
    AND?: EnquiryWhereInput | EnquiryWhereInput[]
    OR?: EnquiryWhereInput[]
    NOT?: EnquiryWhereInput | EnquiryWhereInput[]
    id?: StringFilter<"Enquiry"> | string
    name?: StringFilter<"Enquiry"> | string
    phone?: StringFilter<"Enquiry"> | string
    email?: StringNullableFilter<"Enquiry"> | string | null
    project?: StringNullableFilter<"Enquiry"> | string | null
    budget?: StringNullableFilter<"Enquiry"> | string | null
    message?: StringNullableFilter<"Enquiry"> | string | null
    source?: StringFilter<"Enquiry"> | string
    status?: StringFilter<"Enquiry"> | string
    createdAt?: DateTimeFilter<"Enquiry"> | Date | string
  }

  export type EnquiryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrderInput | SortOrder
    project?: SortOrderInput | SortOrder
    budget?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    source?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type EnquiryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EnquiryWhereInput | EnquiryWhereInput[]
    OR?: EnquiryWhereInput[]
    NOT?: EnquiryWhereInput | EnquiryWhereInput[]
    name?: StringFilter<"Enquiry"> | string
    phone?: StringFilter<"Enquiry"> | string
    email?: StringNullableFilter<"Enquiry"> | string | null
    project?: StringNullableFilter<"Enquiry"> | string | null
    budget?: StringNullableFilter<"Enquiry"> | string | null
    message?: StringNullableFilter<"Enquiry"> | string | null
    source?: StringFilter<"Enquiry"> | string
    status?: StringFilter<"Enquiry"> | string
    createdAt?: DateTimeFilter<"Enquiry"> | Date | string
  }, "id">

  export type EnquiryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrderInput | SortOrder
    project?: SortOrderInput | SortOrder
    budget?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    source?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: EnquiryCountOrderByAggregateInput
    _max?: EnquiryMaxOrderByAggregateInput
    _min?: EnquiryMinOrderByAggregateInput
  }

  export type EnquiryScalarWhereWithAggregatesInput = {
    AND?: EnquiryScalarWhereWithAggregatesInput | EnquiryScalarWhereWithAggregatesInput[]
    OR?: EnquiryScalarWhereWithAggregatesInput[]
    NOT?: EnquiryScalarWhereWithAggregatesInput | EnquiryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Enquiry"> | string
    name?: StringWithAggregatesFilter<"Enquiry"> | string
    phone?: StringWithAggregatesFilter<"Enquiry"> | string
    email?: StringNullableWithAggregatesFilter<"Enquiry"> | string | null
    project?: StringNullableWithAggregatesFilter<"Enquiry"> | string | null
    budget?: StringNullableWithAggregatesFilter<"Enquiry"> | string | null
    message?: StringNullableWithAggregatesFilter<"Enquiry"> | string | null
    source?: StringWithAggregatesFilter<"Enquiry"> | string
    status?: StringWithAggregatesFilter<"Enquiry"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Enquiry"> | Date | string
  }

  export type SubscriberWhereInput = {
    AND?: SubscriberWhereInput | SubscriberWhereInput[]
    OR?: SubscriberWhereInput[]
    NOT?: SubscriberWhereInput | SubscriberWhereInput[]
    id?: StringFilter<"Subscriber"> | string
    email?: StringFilter<"Subscriber"> | string
    createdAt?: DateTimeFilter<"Subscriber"> | Date | string
  }

  export type SubscriberOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
  }

  export type SubscriberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: SubscriberWhereInput | SubscriberWhereInput[]
    OR?: SubscriberWhereInput[]
    NOT?: SubscriberWhereInput | SubscriberWhereInput[]
    createdAt?: DateTimeFilter<"Subscriber"> | Date | string
  }, "id" | "email">

  export type SubscriberOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    _count?: SubscriberCountOrderByAggregateInput
    _max?: SubscriberMaxOrderByAggregateInput
    _min?: SubscriberMinOrderByAggregateInput
  }

  export type SubscriberScalarWhereWithAggregatesInput = {
    AND?: SubscriberScalarWhereWithAggregatesInput | SubscriberScalarWhereWithAggregatesInput[]
    OR?: SubscriberScalarWhereWithAggregatesInput[]
    NOT?: SubscriberScalarWhereWithAggregatesInput | SubscriberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Subscriber"> | string
    email?: StringWithAggregatesFilter<"Subscriber"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Subscriber"> | Date | string
  }

  export type TestimonialWhereInput = {
    AND?: TestimonialWhereInput | TestimonialWhereInput[]
    OR?: TestimonialWhereInput[]
    NOT?: TestimonialWhereInput | TestimonialWhereInput[]
    id?: StringFilter<"Testimonial"> | string
    name?: StringFilter<"Testimonial"> | string
    role?: StringFilter<"Testimonial"> | string
    rating?: IntFilter<"Testimonial"> | number
    comment?: StringFilter<"Testimonial"> | string
    active?: BoolFilter<"Testimonial"> | boolean
    createdAt?: DateTimeFilter<"Testimonial"> | Date | string
  }

  export type TestimonialOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
  }

  export type TestimonialWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TestimonialWhereInput | TestimonialWhereInput[]
    OR?: TestimonialWhereInput[]
    NOT?: TestimonialWhereInput | TestimonialWhereInput[]
    name?: StringFilter<"Testimonial"> | string
    role?: StringFilter<"Testimonial"> | string
    rating?: IntFilter<"Testimonial"> | number
    comment?: StringFilter<"Testimonial"> | string
    active?: BoolFilter<"Testimonial"> | boolean
    createdAt?: DateTimeFilter<"Testimonial"> | Date | string
  }, "id">

  export type TestimonialOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    _count?: TestimonialCountOrderByAggregateInput
    _avg?: TestimonialAvgOrderByAggregateInput
    _max?: TestimonialMaxOrderByAggregateInput
    _min?: TestimonialMinOrderByAggregateInput
    _sum?: TestimonialSumOrderByAggregateInput
  }

  export type TestimonialScalarWhereWithAggregatesInput = {
    AND?: TestimonialScalarWhereWithAggregatesInput | TestimonialScalarWhereWithAggregatesInput[]
    OR?: TestimonialScalarWhereWithAggregatesInput[]
    NOT?: TestimonialScalarWhereWithAggregatesInput | TestimonialScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Testimonial"> | string
    name?: StringWithAggregatesFilter<"Testimonial"> | string
    role?: StringWithAggregatesFilter<"Testimonial"> | string
    rating?: IntWithAggregatesFilter<"Testimonial"> | number
    comment?: StringWithAggregatesFilter<"Testimonial"> | string
    active?: BoolWithAggregatesFilter<"Testimonial"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Testimonial"> | Date | string
  }

  export type BookingOrderWhereInput = {
    AND?: BookingOrderWhereInput | BookingOrderWhereInput[]
    OR?: BookingOrderWhereInput[]
    NOT?: BookingOrderWhereInput | BookingOrderWhereInput[]
    id?: StringFilter<"BookingOrder"> | string
    flatId?: StringFilter<"BookingOrder"> | string
    orderNumber?: StringFilter<"BookingOrder"> | string
    amount?: IntFilter<"BookingOrder"> | number
    currency?: StringFilter<"BookingOrder"> | string
    provider?: StringFilter<"BookingOrder"> | string
    razorpayOrderId?: StringNullableFilter<"BookingOrder"> | string | null
    razorpayPaymentId?: StringNullableFilter<"BookingOrder"> | string | null
    razorpaySignature?: StringNullableFilter<"BookingOrder"> | string | null
    buyerName?: StringFilter<"BookingOrder"> | string
    buyerPhone?: StringFilter<"BookingOrder"> | string
    buyerEmail?: StringNullableFilter<"BookingOrder"> | string | null
    status?: StringFilter<"BookingOrder"> | string
    createdAt?: DateTimeFilter<"BookingOrder"> | Date | string
    updatedAt?: DateTimeFilter<"BookingOrder"> | Date | string
    flat?: XOR<FlatScalarRelationFilter, FlatWhereInput>
  }

  export type BookingOrderOrderByWithRelationInput = {
    id?: SortOrder
    flatId?: SortOrder
    orderNumber?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    provider?: SortOrder
    razorpayOrderId?: SortOrderInput | SortOrder
    razorpayPaymentId?: SortOrderInput | SortOrder
    razorpaySignature?: SortOrderInput | SortOrder
    buyerName?: SortOrder
    buyerPhone?: SortOrder
    buyerEmail?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    flat?: FlatOrderByWithRelationInput
  }

  export type BookingOrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    orderNumber?: string
    AND?: BookingOrderWhereInput | BookingOrderWhereInput[]
    OR?: BookingOrderWhereInput[]
    NOT?: BookingOrderWhereInput | BookingOrderWhereInput[]
    flatId?: StringFilter<"BookingOrder"> | string
    amount?: IntFilter<"BookingOrder"> | number
    currency?: StringFilter<"BookingOrder"> | string
    provider?: StringFilter<"BookingOrder"> | string
    razorpayOrderId?: StringNullableFilter<"BookingOrder"> | string | null
    razorpayPaymentId?: StringNullableFilter<"BookingOrder"> | string | null
    razorpaySignature?: StringNullableFilter<"BookingOrder"> | string | null
    buyerName?: StringFilter<"BookingOrder"> | string
    buyerPhone?: StringFilter<"BookingOrder"> | string
    buyerEmail?: StringNullableFilter<"BookingOrder"> | string | null
    status?: StringFilter<"BookingOrder"> | string
    createdAt?: DateTimeFilter<"BookingOrder"> | Date | string
    updatedAt?: DateTimeFilter<"BookingOrder"> | Date | string
    flat?: XOR<FlatScalarRelationFilter, FlatWhereInput>
  }, "id" | "orderNumber">

  export type BookingOrderOrderByWithAggregationInput = {
    id?: SortOrder
    flatId?: SortOrder
    orderNumber?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    provider?: SortOrder
    razorpayOrderId?: SortOrderInput | SortOrder
    razorpayPaymentId?: SortOrderInput | SortOrder
    razorpaySignature?: SortOrderInput | SortOrder
    buyerName?: SortOrder
    buyerPhone?: SortOrder
    buyerEmail?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BookingOrderCountOrderByAggregateInput
    _avg?: BookingOrderAvgOrderByAggregateInput
    _max?: BookingOrderMaxOrderByAggregateInput
    _min?: BookingOrderMinOrderByAggregateInput
    _sum?: BookingOrderSumOrderByAggregateInput
  }

  export type BookingOrderScalarWhereWithAggregatesInput = {
    AND?: BookingOrderScalarWhereWithAggregatesInput | BookingOrderScalarWhereWithAggregatesInput[]
    OR?: BookingOrderScalarWhereWithAggregatesInput[]
    NOT?: BookingOrderScalarWhereWithAggregatesInput | BookingOrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BookingOrder"> | string
    flatId?: StringWithAggregatesFilter<"BookingOrder"> | string
    orderNumber?: StringWithAggregatesFilter<"BookingOrder"> | string
    amount?: IntWithAggregatesFilter<"BookingOrder"> | number
    currency?: StringWithAggregatesFilter<"BookingOrder"> | string
    provider?: StringWithAggregatesFilter<"BookingOrder"> | string
    razorpayOrderId?: StringNullableWithAggregatesFilter<"BookingOrder"> | string | null
    razorpayPaymentId?: StringNullableWithAggregatesFilter<"BookingOrder"> | string | null
    razorpaySignature?: StringNullableWithAggregatesFilter<"BookingOrder"> | string | null
    buyerName?: StringWithAggregatesFilter<"BookingOrder"> | string
    buyerPhone?: StringWithAggregatesFilter<"BookingOrder"> | string
    buyerEmail?: StringNullableWithAggregatesFilter<"BookingOrder"> | string | null
    status?: StringWithAggregatesFilter<"BookingOrder"> | string
    createdAt?: DateTimeWithAggregatesFilter<"BookingOrder"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BookingOrder"> | Date | string
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: StringFilter<"Review"> | string
    name?: StringFilter<"Review"> | string
    email?: StringNullableFilter<"Review"> | string | null
    phone?: StringNullableFilter<"Review"> | string | null
    rating?: IntFilter<"Review"> | number
    title?: StringNullableFilter<"Review"> | string | null
    comment?: StringFilter<"Review"> | string
    projectName?: StringNullableFilter<"Review"> | string | null
    flatNo?: StringNullableFilter<"Review"> | string | null
    albumId?: StringNullableFilter<"Review"> | string | null
    approved?: BoolFilter<"Review"> | boolean
    createdAt?: DateTimeFilter<"Review"> | Date | string
    album?: XOR<AlbumNullableScalarRelationFilter, AlbumWhereInput> | null
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    rating?: SortOrder
    title?: SortOrderInput | SortOrder
    comment?: SortOrder
    projectName?: SortOrderInput | SortOrder
    flatNo?: SortOrderInput | SortOrder
    albumId?: SortOrderInput | SortOrder
    approved?: SortOrder
    createdAt?: SortOrder
    album?: AlbumOrderByWithRelationInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    name?: StringFilter<"Review"> | string
    email?: StringNullableFilter<"Review"> | string | null
    phone?: StringNullableFilter<"Review"> | string | null
    rating?: IntFilter<"Review"> | number
    title?: StringNullableFilter<"Review"> | string | null
    comment?: StringFilter<"Review"> | string
    projectName?: StringNullableFilter<"Review"> | string | null
    flatNo?: StringNullableFilter<"Review"> | string | null
    albumId?: StringNullableFilter<"Review"> | string | null
    approved?: BoolFilter<"Review"> | boolean
    createdAt?: DateTimeFilter<"Review"> | Date | string
    album?: XOR<AlbumNullableScalarRelationFilter, AlbumWhereInput> | null
  }, "id">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    rating?: SortOrder
    title?: SortOrderInput | SortOrder
    comment?: SortOrder
    projectName?: SortOrderInput | SortOrder
    flatNo?: SortOrderInput | SortOrder
    albumId?: SortOrderInput | SortOrder
    approved?: SortOrder
    createdAt?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Review"> | string
    name?: StringWithAggregatesFilter<"Review"> | string
    email?: StringNullableWithAggregatesFilter<"Review"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Review"> | string | null
    rating?: IntWithAggregatesFilter<"Review"> | number
    title?: StringNullableWithAggregatesFilter<"Review"> | string | null
    comment?: StringWithAggregatesFilter<"Review"> | string
    projectName?: StringNullableWithAggregatesFilter<"Review"> | string | null
    flatNo?: StringNullableWithAggregatesFilter<"Review"> | string | null
    albumId?: StringNullableWithAggregatesFilter<"Review"> | string | null
    approved?: BoolWithAggregatesFilter<"Review"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
  }

  export type AlbumWhereInput = {
    AND?: AlbumWhereInput | AlbumWhereInput[]
    OR?: AlbumWhereInput[]
    NOT?: AlbumWhereInput | AlbumWhereInput[]
    id?: StringFilter<"Album"> | string
    title?: StringFilter<"Album"> | string
    description?: StringNullableFilter<"Album"> | string | null
    projectName?: StringFilter<"Album"> | string
    flatNo?: StringFilter<"Album"> | string
    ownerName?: StringFilter<"Album"> | string
    approved?: BoolFilter<"Album"> | boolean
    coverPhoto?: StringNullableFilter<"Album"> | string | null
    createdAt?: DateTimeFilter<"Album"> | Date | string
    updatedAt?: DateTimeFilter<"Album"> | Date | string
    photos?: AlbumPhotoListRelationFilter
    reviews?: ReviewListRelationFilter
  }

  export type AlbumOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    projectName?: SortOrder
    flatNo?: SortOrder
    ownerName?: SortOrder
    approved?: SortOrder
    coverPhoto?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    photos?: AlbumPhotoOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
  }

  export type AlbumWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AlbumWhereInput | AlbumWhereInput[]
    OR?: AlbumWhereInput[]
    NOT?: AlbumWhereInput | AlbumWhereInput[]
    title?: StringFilter<"Album"> | string
    description?: StringNullableFilter<"Album"> | string | null
    projectName?: StringFilter<"Album"> | string
    flatNo?: StringFilter<"Album"> | string
    ownerName?: StringFilter<"Album"> | string
    approved?: BoolFilter<"Album"> | boolean
    coverPhoto?: StringNullableFilter<"Album"> | string | null
    createdAt?: DateTimeFilter<"Album"> | Date | string
    updatedAt?: DateTimeFilter<"Album"> | Date | string
    photos?: AlbumPhotoListRelationFilter
    reviews?: ReviewListRelationFilter
  }, "id">

  export type AlbumOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    projectName?: SortOrder
    flatNo?: SortOrder
    ownerName?: SortOrder
    approved?: SortOrder
    coverPhoto?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AlbumCountOrderByAggregateInput
    _max?: AlbumMaxOrderByAggregateInput
    _min?: AlbumMinOrderByAggregateInput
  }

  export type AlbumScalarWhereWithAggregatesInput = {
    AND?: AlbumScalarWhereWithAggregatesInput | AlbumScalarWhereWithAggregatesInput[]
    OR?: AlbumScalarWhereWithAggregatesInput[]
    NOT?: AlbumScalarWhereWithAggregatesInput | AlbumScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Album"> | string
    title?: StringWithAggregatesFilter<"Album"> | string
    description?: StringNullableWithAggregatesFilter<"Album"> | string | null
    projectName?: StringWithAggregatesFilter<"Album"> | string
    flatNo?: StringWithAggregatesFilter<"Album"> | string
    ownerName?: StringWithAggregatesFilter<"Album"> | string
    approved?: BoolWithAggregatesFilter<"Album"> | boolean
    coverPhoto?: StringNullableWithAggregatesFilter<"Album"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Album"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Album"> | Date | string
  }

  export type AlbumPhotoWhereInput = {
    AND?: AlbumPhotoWhereInput | AlbumPhotoWhereInput[]
    OR?: AlbumPhotoWhereInput[]
    NOT?: AlbumPhotoWhereInput | AlbumPhotoWhereInput[]
    id?: StringFilter<"AlbumPhoto"> | string
    albumId?: StringFilter<"AlbumPhoto"> | string
    url?: StringFilter<"AlbumPhoto"> | string
    caption?: StringNullableFilter<"AlbumPhoto"> | string | null
    createdAt?: DateTimeFilter<"AlbumPhoto"> | Date | string
    album?: XOR<AlbumScalarRelationFilter, AlbumWhereInput>
  }

  export type AlbumPhotoOrderByWithRelationInput = {
    id?: SortOrder
    albumId?: SortOrder
    url?: SortOrder
    caption?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    album?: AlbumOrderByWithRelationInput
  }

  export type AlbumPhotoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AlbumPhotoWhereInput | AlbumPhotoWhereInput[]
    OR?: AlbumPhotoWhereInput[]
    NOT?: AlbumPhotoWhereInput | AlbumPhotoWhereInput[]
    albumId?: StringFilter<"AlbumPhoto"> | string
    url?: StringFilter<"AlbumPhoto"> | string
    caption?: StringNullableFilter<"AlbumPhoto"> | string | null
    createdAt?: DateTimeFilter<"AlbumPhoto"> | Date | string
    album?: XOR<AlbumScalarRelationFilter, AlbumWhereInput>
  }, "id">

  export type AlbumPhotoOrderByWithAggregationInput = {
    id?: SortOrder
    albumId?: SortOrder
    url?: SortOrder
    caption?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AlbumPhotoCountOrderByAggregateInput
    _max?: AlbumPhotoMaxOrderByAggregateInput
    _min?: AlbumPhotoMinOrderByAggregateInput
  }

  export type AlbumPhotoScalarWhereWithAggregatesInput = {
    AND?: AlbumPhotoScalarWhereWithAggregatesInput | AlbumPhotoScalarWhereWithAggregatesInput[]
    OR?: AlbumPhotoScalarWhereWithAggregatesInput[]
    NOT?: AlbumPhotoScalarWhereWithAggregatesInput | AlbumPhotoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AlbumPhoto"> | string
    albumId?: StringWithAggregatesFilter<"AlbumPhoto"> | string
    url?: StringWithAggregatesFilter<"AlbumPhoto"> | string
    caption?: StringNullableWithAggregatesFilter<"AlbumPhoto"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AlbumPhoto"> | Date | string
  }

  export type GalleryItemWhereInput = {
    AND?: GalleryItemWhereInput | GalleryItemWhereInput[]
    OR?: GalleryItemWhereInput[]
    NOT?: GalleryItemWhereInput | GalleryItemWhereInput[]
    id?: StringFilter<"GalleryItem"> | string
    title?: StringFilter<"GalleryItem"> | string
    category?: StringFilter<"GalleryItem"> | string
    caption?: StringNullableFilter<"GalleryItem"> | string | null
    image?: StringFilter<"GalleryItem"> | string
    sortOrder?: IntFilter<"GalleryItem"> | number
    createdAt?: DateTimeFilter<"GalleryItem"> | Date | string
  }

  export type GalleryItemOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    caption?: SortOrderInput | SortOrder
    image?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
  }

  export type GalleryItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GalleryItemWhereInput | GalleryItemWhereInput[]
    OR?: GalleryItemWhereInput[]
    NOT?: GalleryItemWhereInput | GalleryItemWhereInput[]
    title?: StringFilter<"GalleryItem"> | string
    category?: StringFilter<"GalleryItem"> | string
    caption?: StringNullableFilter<"GalleryItem"> | string | null
    image?: StringFilter<"GalleryItem"> | string
    sortOrder?: IntFilter<"GalleryItem"> | number
    createdAt?: DateTimeFilter<"GalleryItem"> | Date | string
  }, "id">

  export type GalleryItemOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    caption?: SortOrderInput | SortOrder
    image?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    _count?: GalleryItemCountOrderByAggregateInput
    _avg?: GalleryItemAvgOrderByAggregateInput
    _max?: GalleryItemMaxOrderByAggregateInput
    _min?: GalleryItemMinOrderByAggregateInput
    _sum?: GalleryItemSumOrderByAggregateInput
  }

  export type GalleryItemScalarWhereWithAggregatesInput = {
    AND?: GalleryItemScalarWhereWithAggregatesInput | GalleryItemScalarWhereWithAggregatesInput[]
    OR?: GalleryItemScalarWhereWithAggregatesInput[]
    NOT?: GalleryItemScalarWhereWithAggregatesInput | GalleryItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GalleryItem"> | string
    title?: StringWithAggregatesFilter<"GalleryItem"> | string
    category?: StringWithAggregatesFilter<"GalleryItem"> | string
    caption?: StringNullableWithAggregatesFilter<"GalleryItem"> | string | null
    image?: StringWithAggregatesFilter<"GalleryItem"> | string
    sortOrder?: IntWithAggregatesFilter<"GalleryItem"> | number
    createdAt?: DateTimeWithAggregatesFilter<"GalleryItem"> | Date | string
  }

  export type SettingWhereInput = {
    AND?: SettingWhereInput | SettingWhereInput[]
    OR?: SettingWhereInput[]
    NOT?: SettingWhereInput | SettingWhereInput[]
    key?: StringFilter<"Setting"> | string
    value?: StringFilter<"Setting"> | string
    updatedAt?: DateTimeFilter<"Setting"> | Date | string
  }

  export type SettingOrderByWithRelationInput = {
    key?: SortOrder
    value?: SortOrder
    updatedAt?: SortOrder
  }

  export type SettingWhereUniqueInput = Prisma.AtLeast<{
    key?: string
    AND?: SettingWhereInput | SettingWhereInput[]
    OR?: SettingWhereInput[]
    NOT?: SettingWhereInput | SettingWhereInput[]
    value?: StringFilter<"Setting"> | string
    updatedAt?: DateTimeFilter<"Setting"> | Date | string
  }, "key">

  export type SettingOrderByWithAggregationInput = {
    key?: SortOrder
    value?: SortOrder
    updatedAt?: SortOrder
    _count?: SettingCountOrderByAggregateInput
    _max?: SettingMaxOrderByAggregateInput
    _min?: SettingMinOrderByAggregateInput
  }

  export type SettingScalarWhereWithAggregatesInput = {
    AND?: SettingScalarWhereWithAggregatesInput | SettingScalarWhereWithAggregatesInput[]
    OR?: SettingScalarWhereWithAggregatesInput[]
    NOT?: SettingScalarWhereWithAggregatesInput | SettingScalarWhereWithAggregatesInput[]
    key?: StringWithAggregatesFilter<"Setting"> | string
    value?: StringWithAggregatesFilter<"Setting"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"Setting"> | Date | string
  }

  export type UploadWhereInput = {
    AND?: UploadWhereInput | UploadWhereInput[]
    OR?: UploadWhereInput[]
    NOT?: UploadWhereInput | UploadWhereInput[]
    id?: StringFilter<"Upload"> | string
    mime?: StringFilter<"Upload"> | string
    size?: IntFilter<"Upload"> | number
    data?: StringFilter<"Upload"> | string
    createdAt?: DateTimeFilter<"Upload"> | Date | string
  }

  export type UploadOrderByWithRelationInput = {
    id?: SortOrder
    mime?: SortOrder
    size?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
  }

  export type UploadWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UploadWhereInput | UploadWhereInput[]
    OR?: UploadWhereInput[]
    NOT?: UploadWhereInput | UploadWhereInput[]
    mime?: StringFilter<"Upload"> | string
    size?: IntFilter<"Upload"> | number
    data?: StringFilter<"Upload"> | string
    createdAt?: DateTimeFilter<"Upload"> | Date | string
  }, "id">

  export type UploadOrderByWithAggregationInput = {
    id?: SortOrder
    mime?: SortOrder
    size?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
    _count?: UploadCountOrderByAggregateInput
    _avg?: UploadAvgOrderByAggregateInput
    _max?: UploadMaxOrderByAggregateInput
    _min?: UploadMinOrderByAggregateInput
    _sum?: UploadSumOrderByAggregateInput
  }

  export type UploadScalarWhereWithAggregatesInput = {
    AND?: UploadScalarWhereWithAggregatesInput | UploadScalarWhereWithAggregatesInput[]
    OR?: UploadScalarWhereWithAggregatesInput[]
    NOT?: UploadScalarWhereWithAggregatesInput | UploadScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Upload"> | string
    mime?: StringWithAggregatesFilter<"Upload"> | string
    size?: IntWithAggregatesFilter<"Upload"> | number
    data?: StringWithAggregatesFilter<"Upload"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Upload"> | Date | string
  }

  export type ProjectCreateInput = {
    id?: string
    slug: string
    name: string
    tagline?: string | null
    location: string
    type: string
    status: string
    price: string
    landArea?: string | null
    totalUnits?: string | null
    unitSizes?: string | null
    reraNumber?: string | null
    possessionDate?: string | null
    description: string
    highlights: string
    amenities?: string | null
    image: string
    gallery?: string | null
    featured?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    flats?: FlatCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    slug: string
    name: string
    tagline?: string | null
    location: string
    type: string
    status: string
    price: string
    landArea?: string | null
    totalUnits?: string | null
    unitSizes?: string | null
    reraNumber?: string | null
    possessionDate?: string | null
    description: string
    highlights: string
    amenities?: string | null
    image: string
    gallery?: string | null
    featured?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    flats?: FlatUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tagline?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    landArea?: NullableStringFieldUpdateOperationsInput | string | null
    totalUnits?: NullableStringFieldUpdateOperationsInput | string | null
    unitSizes?: NullableStringFieldUpdateOperationsInput | string | null
    reraNumber?: NullableStringFieldUpdateOperationsInput | string | null
    possessionDate?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    highlights?: StringFieldUpdateOperationsInput | string
    amenities?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    gallery?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flats?: FlatUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tagline?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    landArea?: NullableStringFieldUpdateOperationsInput | string | null
    totalUnits?: NullableStringFieldUpdateOperationsInput | string | null
    unitSizes?: NullableStringFieldUpdateOperationsInput | string | null
    reraNumber?: NullableStringFieldUpdateOperationsInput | string | null
    possessionDate?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    highlights?: StringFieldUpdateOperationsInput | string
    amenities?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    gallery?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flats?: FlatUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: string
    slug: string
    name: string
    tagline?: string | null
    location: string
    type: string
    status: string
    price: string
    landArea?: string | null
    totalUnits?: string | null
    unitSizes?: string | null
    reraNumber?: string | null
    possessionDate?: string | null
    description: string
    highlights: string
    amenities?: string | null
    image: string
    gallery?: string | null
    featured?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tagline?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    landArea?: NullableStringFieldUpdateOperationsInput | string | null
    totalUnits?: NullableStringFieldUpdateOperationsInput | string | null
    unitSizes?: NullableStringFieldUpdateOperationsInput | string | null
    reraNumber?: NullableStringFieldUpdateOperationsInput | string | null
    possessionDate?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    highlights?: StringFieldUpdateOperationsInput | string
    amenities?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    gallery?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tagline?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    landArea?: NullableStringFieldUpdateOperationsInput | string | null
    totalUnits?: NullableStringFieldUpdateOperationsInput | string | null
    unitSizes?: NullableStringFieldUpdateOperationsInput | string | null
    reraNumber?: NullableStringFieldUpdateOperationsInput | string | null
    possessionDate?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    highlights?: StringFieldUpdateOperationsInput | string
    amenities?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    gallery?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlatCreateInput = {
    id?: string
    tower: string
    floor: number
    floorLabel: string
    unitNumber: string
    unitType: string
    areaSqft: number
    priceLakhs: number
    facing?: string | null
    status?: string
    lockedUntil?: Date | string | null
    lockSession?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutFlatsInput
    bookings?: BookingCreateNestedManyWithoutFlatInput
    orders?: BookingOrderCreateNestedManyWithoutFlatInput
  }

  export type FlatUncheckedCreateInput = {
    id?: string
    projectId: string
    tower: string
    floor: number
    floorLabel: string
    unitNumber: string
    unitType: string
    areaSqft: number
    priceLakhs: number
    facing?: string | null
    status?: string
    lockedUntil?: Date | string | null
    lockSession?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutFlatInput
    orders?: BookingOrderUncheckedCreateNestedManyWithoutFlatInput
  }

  export type FlatUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tower?: StringFieldUpdateOperationsInput | string
    floor?: IntFieldUpdateOperationsInput | number
    floorLabel?: StringFieldUpdateOperationsInput | string
    unitNumber?: StringFieldUpdateOperationsInput | string
    unitType?: StringFieldUpdateOperationsInput | string
    areaSqft?: IntFieldUpdateOperationsInput | number
    priceLakhs?: FloatFieldUpdateOperationsInput | number
    facing?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lockSession?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutFlatsNestedInput
    bookings?: BookingUpdateManyWithoutFlatNestedInput
    orders?: BookingOrderUpdateManyWithoutFlatNestedInput
  }

  export type FlatUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    tower?: StringFieldUpdateOperationsInput | string
    floor?: IntFieldUpdateOperationsInput | number
    floorLabel?: StringFieldUpdateOperationsInput | string
    unitNumber?: StringFieldUpdateOperationsInput | string
    unitType?: StringFieldUpdateOperationsInput | string
    areaSqft?: IntFieldUpdateOperationsInput | number
    priceLakhs?: FloatFieldUpdateOperationsInput | number
    facing?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lockSession?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutFlatNestedInput
    orders?: BookingOrderUncheckedUpdateManyWithoutFlatNestedInput
  }

  export type FlatCreateManyInput = {
    id?: string
    projectId: string
    tower: string
    floor: number
    floorLabel: string
    unitNumber: string
    unitType: string
    areaSqft: number
    priceLakhs: number
    facing?: string | null
    status?: string
    lockedUntil?: Date | string | null
    lockSession?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FlatUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tower?: StringFieldUpdateOperationsInput | string
    floor?: IntFieldUpdateOperationsInput | number
    floorLabel?: StringFieldUpdateOperationsInput | string
    unitNumber?: StringFieldUpdateOperationsInput | string
    unitType?: StringFieldUpdateOperationsInput | string
    areaSqft?: IntFieldUpdateOperationsInput | number
    priceLakhs?: FloatFieldUpdateOperationsInput | number
    facing?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lockSession?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlatUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    tower?: StringFieldUpdateOperationsInput | string
    floor?: IntFieldUpdateOperationsInput | number
    floorLabel?: StringFieldUpdateOperationsInput | string
    unitNumber?: StringFieldUpdateOperationsInput | string
    unitType?: StringFieldUpdateOperationsInput | string
    areaSqft?: IntFieldUpdateOperationsInput | number
    priceLakhs?: FloatFieldUpdateOperationsInput | number
    facing?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lockSession?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateInput = {
    id?: string
    buyerName: string
    buyerPhone: string
    buyerEmail?: string | null
    amountLabel?: string | null
    status?: string
    createdAt?: Date | string
    flat: FlatCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateInput = {
    id?: string
    flatId: string
    buyerName: string
    buyerPhone: string
    buyerEmail?: string | null
    amountLabel?: string | null
    status?: string
    createdAt?: Date | string
  }

  export type BookingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    buyerName?: StringFieldUpdateOperationsInput | string
    buyerPhone?: StringFieldUpdateOperationsInput | string
    buyerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    amountLabel?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flat?: FlatUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    flatId?: StringFieldUpdateOperationsInput | string
    buyerName?: StringFieldUpdateOperationsInput | string
    buyerPhone?: StringFieldUpdateOperationsInput | string
    buyerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    amountLabel?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateManyInput = {
    id?: string
    flatId: string
    buyerName: string
    buyerPhone: string
    buyerEmail?: string | null
    amountLabel?: string | null
    status?: string
    createdAt?: Date | string
  }

  export type BookingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    buyerName?: StringFieldUpdateOperationsInput | string
    buyerPhone?: StringFieldUpdateOperationsInput | string
    buyerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    amountLabel?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    flatId?: StringFieldUpdateOperationsInput | string
    buyerName?: StringFieldUpdateOperationsInput | string
    buyerPhone?: StringFieldUpdateOperationsInput | string
    buyerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    amountLabel?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnquiryCreateInput = {
    id?: string
    name: string
    phone: string
    email?: string | null
    project?: string | null
    budget?: string | null
    message?: string | null
    source?: string
    status?: string
    createdAt?: Date | string
  }

  export type EnquiryUncheckedCreateInput = {
    id?: string
    name: string
    phone: string
    email?: string | null
    project?: string | null
    budget?: string | null
    message?: string | null
    source?: string
    status?: string
    createdAt?: Date | string
  }

  export type EnquiryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    project?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    source?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnquiryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    project?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    source?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnquiryCreateManyInput = {
    id?: string
    name: string
    phone: string
    email?: string | null
    project?: string | null
    budget?: string | null
    message?: string | null
    source?: string
    status?: string
    createdAt?: Date | string
  }

  export type EnquiryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    project?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    source?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnquiryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    project?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    source?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriberCreateInput = {
    id?: string
    email: string
    createdAt?: Date | string
  }

  export type SubscriberUncheckedCreateInput = {
    id?: string
    email: string
    createdAt?: Date | string
  }

  export type SubscriberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriberCreateManyInput = {
    id?: string
    email: string
    createdAt?: Date | string
  }

  export type SubscriberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestimonialCreateInput = {
    id?: string
    name: string
    role: string
    rating?: number
    comment: string
    active?: boolean
    createdAt?: Date | string
  }

  export type TestimonialUncheckedCreateInput = {
    id?: string
    name: string
    role: string
    rating?: number
    comment: string
    active?: boolean
    createdAt?: Date | string
  }

  export type TestimonialUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestimonialUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestimonialCreateManyInput = {
    id?: string
    name: string
    role: string
    rating?: number
    comment: string
    active?: boolean
    createdAt?: Date | string
  }

  export type TestimonialUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestimonialUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingOrderCreateInput = {
    id?: string
    orderNumber: string
    amount: number
    currency?: string
    provider?: string
    razorpayOrderId?: string | null
    razorpayPaymentId?: string | null
    razorpaySignature?: string | null
    buyerName: string
    buyerPhone: string
    buyerEmail?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    flat: FlatCreateNestedOneWithoutOrdersInput
  }

  export type BookingOrderUncheckedCreateInput = {
    id?: string
    flatId: string
    orderNumber: string
    amount: number
    currency?: string
    provider?: string
    razorpayOrderId?: string | null
    razorpayPaymentId?: string | null
    razorpaySignature?: string | null
    buyerName: string
    buyerPhone: string
    buyerEmail?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingOrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    buyerName?: StringFieldUpdateOperationsInput | string
    buyerPhone?: StringFieldUpdateOperationsInput | string
    buyerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flat?: FlatUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type BookingOrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    flatId?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    buyerName?: StringFieldUpdateOperationsInput | string
    buyerPhone?: StringFieldUpdateOperationsInput | string
    buyerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingOrderCreateManyInput = {
    id?: string
    flatId: string
    orderNumber: string
    amount: number
    currency?: string
    provider?: string
    razorpayOrderId?: string | null
    razorpayPaymentId?: string | null
    razorpaySignature?: string | null
    buyerName: string
    buyerPhone: string
    buyerEmail?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingOrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    buyerName?: StringFieldUpdateOperationsInput | string
    buyerPhone?: StringFieldUpdateOperationsInput | string
    buyerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingOrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    flatId?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    buyerName?: StringFieldUpdateOperationsInput | string
    buyerPhone?: StringFieldUpdateOperationsInput | string
    buyerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    rating?: number
    title?: string | null
    comment: string
    projectName?: string | null
    flatNo?: string | null
    approved?: boolean
    createdAt?: Date | string
    album?: AlbumCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    rating?: number
    title?: string | null
    comment: string
    projectName?: string | null
    flatNo?: string | null
    albumId?: string | null
    approved?: boolean
    createdAt?: Date | string
  }

  export type ReviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: StringFieldUpdateOperationsInput | string
    projectName?: NullableStringFieldUpdateOperationsInput | string | null
    flatNo?: NullableStringFieldUpdateOperationsInput | string | null
    approved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    album?: AlbumUpdateOneWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: StringFieldUpdateOperationsInput | string
    projectName?: NullableStringFieldUpdateOperationsInput | string | null
    flatNo?: NullableStringFieldUpdateOperationsInput | string | null
    albumId?: NullableStringFieldUpdateOperationsInput | string | null
    approved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateManyInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    rating?: number
    title?: string | null
    comment: string
    projectName?: string | null
    flatNo?: string | null
    albumId?: string | null
    approved?: boolean
    createdAt?: Date | string
  }

  export type ReviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: StringFieldUpdateOperationsInput | string
    projectName?: NullableStringFieldUpdateOperationsInput | string | null
    flatNo?: NullableStringFieldUpdateOperationsInput | string | null
    approved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: StringFieldUpdateOperationsInput | string
    projectName?: NullableStringFieldUpdateOperationsInput | string | null
    flatNo?: NullableStringFieldUpdateOperationsInput | string | null
    albumId?: NullableStringFieldUpdateOperationsInput | string | null
    approved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlbumCreateInput = {
    id?: string
    title: string
    description?: string | null
    projectName: string
    flatNo: string
    ownerName: string
    approved?: boolean
    coverPhoto?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    photos?: AlbumPhotoCreateNestedManyWithoutAlbumInput
    reviews?: ReviewCreateNestedManyWithoutAlbumInput
  }

  export type AlbumUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    projectName: string
    flatNo: string
    ownerName: string
    approved?: boolean
    coverPhoto?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    photos?: AlbumPhotoUncheckedCreateNestedManyWithoutAlbumInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutAlbumInput
  }

  export type AlbumUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    projectName?: StringFieldUpdateOperationsInput | string
    flatNo?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    coverPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: AlbumPhotoUpdateManyWithoutAlbumNestedInput
    reviews?: ReviewUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    projectName?: StringFieldUpdateOperationsInput | string
    flatNo?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    coverPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: AlbumPhotoUncheckedUpdateManyWithoutAlbumNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    projectName: string
    flatNo: string
    ownerName: string
    approved?: boolean
    coverPhoto?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlbumUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    projectName?: StringFieldUpdateOperationsInput | string
    flatNo?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    coverPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlbumUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    projectName?: StringFieldUpdateOperationsInput | string
    flatNo?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    coverPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlbumPhotoCreateInput = {
    id?: string
    url: string
    caption?: string | null
    createdAt?: Date | string
    album: AlbumCreateNestedOneWithoutPhotosInput
  }

  export type AlbumPhotoUncheckedCreateInput = {
    id?: string
    albumId: string
    url: string
    caption?: string | null
    createdAt?: Date | string
  }

  export type AlbumPhotoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    album?: AlbumUpdateOneRequiredWithoutPhotosNestedInput
  }

  export type AlbumPhotoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    albumId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlbumPhotoCreateManyInput = {
    id?: string
    albumId: string
    url: string
    caption?: string | null
    createdAt?: Date | string
  }

  export type AlbumPhotoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlbumPhotoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    albumId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalleryItemCreateInput = {
    id?: string
    title: string
    category?: string
    caption?: string | null
    image: string
    sortOrder?: number
    createdAt?: Date | string
  }

  export type GalleryItemUncheckedCreateInput = {
    id?: string
    title: string
    category?: string
    caption?: string | null
    image: string
    sortOrder?: number
    createdAt?: Date | string
  }

  export type GalleryItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalleryItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalleryItemCreateManyInput = {
    id?: string
    title: string
    category?: string
    caption?: string | null
    image: string
    sortOrder?: number
    createdAt?: Date | string
  }

  export type GalleryItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalleryItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettingCreateInput = {
    key: string
    value: string
    updatedAt?: Date | string
  }

  export type SettingUncheckedCreateInput = {
    key: string
    value: string
    updatedAt?: Date | string
  }

  export type SettingUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettingUncheckedUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettingCreateManyInput = {
    key: string
    value: string
    updatedAt?: Date | string
  }

  export type SettingUpdateManyMutationInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettingUncheckedUpdateManyInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UploadCreateInput = {
    id?: string
    mime: string
    size: number
    data: string
    createdAt?: Date | string
  }

  export type UploadUncheckedCreateInput = {
    id?: string
    mime: string
    size: number
    data: string
    createdAt?: Date | string
  }

  export type UploadUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mime?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    data?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UploadUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mime?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    data?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UploadCreateManyInput = {
    id?: string
    mime: string
    size: number
    data: string
    createdAt?: Date | string
  }

  export type UploadUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    mime?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    data?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UploadUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    mime?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    data?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FlatListRelationFilter = {
    every?: FlatWhereInput
    some?: FlatWhereInput
    none?: FlatWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FlatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    tagline?: SortOrder
    location?: SortOrder
    type?: SortOrder
    status?: SortOrder
    price?: SortOrder
    landArea?: SortOrder
    totalUnits?: SortOrder
    unitSizes?: SortOrder
    reraNumber?: SortOrder
    possessionDate?: SortOrder
    description?: SortOrder
    highlights?: SortOrder
    amenities?: SortOrder
    image?: SortOrder
    gallery?: SortOrder
    featured?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectAvgOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    tagline?: SortOrder
    location?: SortOrder
    type?: SortOrder
    status?: SortOrder
    price?: SortOrder
    landArea?: SortOrder
    totalUnits?: SortOrder
    unitSizes?: SortOrder
    reraNumber?: SortOrder
    possessionDate?: SortOrder
    description?: SortOrder
    highlights?: SortOrder
    amenities?: SortOrder
    image?: SortOrder
    gallery?: SortOrder
    featured?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    tagline?: SortOrder
    location?: SortOrder
    type?: SortOrder
    status?: SortOrder
    price?: SortOrder
    landArea?: SortOrder
    totalUnits?: SortOrder
    unitSizes?: SortOrder
    reraNumber?: SortOrder
    possessionDate?: SortOrder
    description?: SortOrder
    highlights?: SortOrder
    amenities?: SortOrder
    image?: SortOrder
    gallery?: SortOrder
    featured?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectSumOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ProjectScalarRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type BookingListRelationFilter = {
    every?: BookingWhereInput
    some?: BookingWhereInput
    none?: BookingWhereInput
  }

  export type BookingOrderListRelationFilter = {
    every?: BookingOrderWhereInput
    some?: BookingOrderWhereInput
    none?: BookingOrderWhereInput
  }

  export type BookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookingOrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FlatProjectIdUnitNumberCompoundUniqueInput = {
    projectId: string
    unitNumber: string
  }

  export type FlatCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    tower?: SortOrder
    floor?: SortOrder
    floorLabel?: SortOrder
    unitNumber?: SortOrder
    unitType?: SortOrder
    areaSqft?: SortOrder
    priceLakhs?: SortOrder
    facing?: SortOrder
    status?: SortOrder
    lockedUntil?: SortOrder
    lockSession?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FlatAvgOrderByAggregateInput = {
    floor?: SortOrder
    areaSqft?: SortOrder
    priceLakhs?: SortOrder
  }

  export type FlatMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    tower?: SortOrder
    floor?: SortOrder
    floorLabel?: SortOrder
    unitNumber?: SortOrder
    unitType?: SortOrder
    areaSqft?: SortOrder
    priceLakhs?: SortOrder
    facing?: SortOrder
    status?: SortOrder
    lockedUntil?: SortOrder
    lockSession?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FlatMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    tower?: SortOrder
    floor?: SortOrder
    floorLabel?: SortOrder
    unitNumber?: SortOrder
    unitType?: SortOrder
    areaSqft?: SortOrder
    priceLakhs?: SortOrder
    facing?: SortOrder
    status?: SortOrder
    lockedUntil?: SortOrder
    lockSession?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FlatSumOrderByAggregateInput = {
    floor?: SortOrder
    areaSqft?: SortOrder
    priceLakhs?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type FlatScalarRelationFilter = {
    is?: FlatWhereInput
    isNot?: FlatWhereInput
  }

  export type BookingCountOrderByAggregateInput = {
    id?: SortOrder
    flatId?: SortOrder
    buyerName?: SortOrder
    buyerPhone?: SortOrder
    buyerEmail?: SortOrder
    amountLabel?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type BookingMaxOrderByAggregateInput = {
    id?: SortOrder
    flatId?: SortOrder
    buyerName?: SortOrder
    buyerPhone?: SortOrder
    buyerEmail?: SortOrder
    amountLabel?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type BookingMinOrderByAggregateInput = {
    id?: SortOrder
    flatId?: SortOrder
    buyerName?: SortOrder
    buyerPhone?: SortOrder
    buyerEmail?: SortOrder
    amountLabel?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type EnquiryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    project?: SortOrder
    budget?: SortOrder
    message?: SortOrder
    source?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type EnquiryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    project?: SortOrder
    budget?: SortOrder
    message?: SortOrder
    source?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type EnquiryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    project?: SortOrder
    budget?: SortOrder
    message?: SortOrder
    source?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type SubscriberCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
  }

  export type SubscriberMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
  }

  export type SubscriberMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
  }

  export type TestimonialCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
  }

  export type TestimonialAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type TestimonialMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
  }

  export type TestimonialMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
  }

  export type TestimonialSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type BookingOrderCountOrderByAggregateInput = {
    id?: SortOrder
    flatId?: SortOrder
    orderNumber?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    provider?: SortOrder
    razorpayOrderId?: SortOrder
    razorpayPaymentId?: SortOrder
    razorpaySignature?: SortOrder
    buyerName?: SortOrder
    buyerPhone?: SortOrder
    buyerEmail?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingOrderAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type BookingOrderMaxOrderByAggregateInput = {
    id?: SortOrder
    flatId?: SortOrder
    orderNumber?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    provider?: SortOrder
    razorpayOrderId?: SortOrder
    razorpayPaymentId?: SortOrder
    razorpaySignature?: SortOrder
    buyerName?: SortOrder
    buyerPhone?: SortOrder
    buyerEmail?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingOrderMinOrderByAggregateInput = {
    id?: SortOrder
    flatId?: SortOrder
    orderNumber?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    provider?: SortOrder
    razorpayOrderId?: SortOrder
    razorpayPaymentId?: SortOrder
    razorpaySignature?: SortOrder
    buyerName?: SortOrder
    buyerPhone?: SortOrder
    buyerEmail?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingOrderSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type AlbumNullableScalarRelationFilter = {
    is?: AlbumWhereInput | null
    isNot?: AlbumWhereInput | null
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    rating?: SortOrder
    title?: SortOrder
    comment?: SortOrder
    projectName?: SortOrder
    flatNo?: SortOrder
    albumId?: SortOrder
    approved?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    rating?: SortOrder
    title?: SortOrder
    comment?: SortOrder
    projectName?: SortOrder
    flatNo?: SortOrder
    albumId?: SortOrder
    approved?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    rating?: SortOrder
    title?: SortOrder
    comment?: SortOrder
    projectName?: SortOrder
    flatNo?: SortOrder
    albumId?: SortOrder
    approved?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type AlbumPhotoListRelationFilter = {
    every?: AlbumPhotoWhereInput
    some?: AlbumPhotoWhereInput
    none?: AlbumPhotoWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type AlbumPhotoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AlbumCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    projectName?: SortOrder
    flatNo?: SortOrder
    ownerName?: SortOrder
    approved?: SortOrder
    coverPhoto?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlbumMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    projectName?: SortOrder
    flatNo?: SortOrder
    ownerName?: SortOrder
    approved?: SortOrder
    coverPhoto?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlbumMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    projectName?: SortOrder
    flatNo?: SortOrder
    ownerName?: SortOrder
    approved?: SortOrder
    coverPhoto?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlbumScalarRelationFilter = {
    is?: AlbumWhereInput
    isNot?: AlbumWhereInput
  }

  export type AlbumPhotoCountOrderByAggregateInput = {
    id?: SortOrder
    albumId?: SortOrder
    url?: SortOrder
    caption?: SortOrder
    createdAt?: SortOrder
  }

  export type AlbumPhotoMaxOrderByAggregateInput = {
    id?: SortOrder
    albumId?: SortOrder
    url?: SortOrder
    caption?: SortOrder
    createdAt?: SortOrder
  }

  export type AlbumPhotoMinOrderByAggregateInput = {
    id?: SortOrder
    albumId?: SortOrder
    url?: SortOrder
    caption?: SortOrder
    createdAt?: SortOrder
  }

  export type GalleryItemCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    caption?: SortOrder
    image?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
  }

  export type GalleryItemAvgOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type GalleryItemMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    caption?: SortOrder
    image?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
  }

  export type GalleryItemMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    caption?: SortOrder
    image?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
  }

  export type GalleryItemSumOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type SettingCountOrderByAggregateInput = {
    key?: SortOrder
    value?: SortOrder
    updatedAt?: SortOrder
  }

  export type SettingMaxOrderByAggregateInput = {
    key?: SortOrder
    value?: SortOrder
    updatedAt?: SortOrder
  }

  export type SettingMinOrderByAggregateInput = {
    key?: SortOrder
    value?: SortOrder
    updatedAt?: SortOrder
  }

  export type UploadCountOrderByAggregateInput = {
    id?: SortOrder
    mime?: SortOrder
    size?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
  }

  export type UploadAvgOrderByAggregateInput = {
    size?: SortOrder
  }

  export type UploadMaxOrderByAggregateInput = {
    id?: SortOrder
    mime?: SortOrder
    size?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
  }

  export type UploadMinOrderByAggregateInput = {
    id?: SortOrder
    mime?: SortOrder
    size?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
  }

  export type UploadSumOrderByAggregateInput = {
    size?: SortOrder
  }

  export type FlatCreateNestedManyWithoutProjectInput = {
    create?: XOR<FlatCreateWithoutProjectInput, FlatUncheckedCreateWithoutProjectInput> | FlatCreateWithoutProjectInput[] | FlatUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: FlatCreateOrConnectWithoutProjectInput | FlatCreateOrConnectWithoutProjectInput[]
    createMany?: FlatCreateManyProjectInputEnvelope
    connect?: FlatWhereUniqueInput | FlatWhereUniqueInput[]
  }

  export type FlatUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<FlatCreateWithoutProjectInput, FlatUncheckedCreateWithoutProjectInput> | FlatCreateWithoutProjectInput[] | FlatUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: FlatCreateOrConnectWithoutProjectInput | FlatCreateOrConnectWithoutProjectInput[]
    createMany?: FlatCreateManyProjectInputEnvelope
    connect?: FlatWhereUniqueInput | FlatWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FlatUpdateManyWithoutProjectNestedInput = {
    create?: XOR<FlatCreateWithoutProjectInput, FlatUncheckedCreateWithoutProjectInput> | FlatCreateWithoutProjectInput[] | FlatUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: FlatCreateOrConnectWithoutProjectInput | FlatCreateOrConnectWithoutProjectInput[]
    upsert?: FlatUpsertWithWhereUniqueWithoutProjectInput | FlatUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: FlatCreateManyProjectInputEnvelope
    set?: FlatWhereUniqueInput | FlatWhereUniqueInput[]
    disconnect?: FlatWhereUniqueInput | FlatWhereUniqueInput[]
    delete?: FlatWhereUniqueInput | FlatWhereUniqueInput[]
    connect?: FlatWhereUniqueInput | FlatWhereUniqueInput[]
    update?: FlatUpdateWithWhereUniqueWithoutProjectInput | FlatUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: FlatUpdateManyWithWhereWithoutProjectInput | FlatUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: FlatScalarWhereInput | FlatScalarWhereInput[]
  }

  export type FlatUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<FlatCreateWithoutProjectInput, FlatUncheckedCreateWithoutProjectInput> | FlatCreateWithoutProjectInput[] | FlatUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: FlatCreateOrConnectWithoutProjectInput | FlatCreateOrConnectWithoutProjectInput[]
    upsert?: FlatUpsertWithWhereUniqueWithoutProjectInput | FlatUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: FlatCreateManyProjectInputEnvelope
    set?: FlatWhereUniqueInput | FlatWhereUniqueInput[]
    disconnect?: FlatWhereUniqueInput | FlatWhereUniqueInput[]
    delete?: FlatWhereUniqueInput | FlatWhereUniqueInput[]
    connect?: FlatWhereUniqueInput | FlatWhereUniqueInput[]
    update?: FlatUpdateWithWhereUniqueWithoutProjectInput | FlatUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: FlatUpdateManyWithWhereWithoutProjectInput | FlatUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: FlatScalarWhereInput | FlatScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutFlatsInput = {
    create?: XOR<ProjectCreateWithoutFlatsInput, ProjectUncheckedCreateWithoutFlatsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutFlatsInput
    connect?: ProjectWhereUniqueInput
  }

  export type BookingCreateNestedManyWithoutFlatInput = {
    create?: XOR<BookingCreateWithoutFlatInput, BookingUncheckedCreateWithoutFlatInput> | BookingCreateWithoutFlatInput[] | BookingUncheckedCreateWithoutFlatInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutFlatInput | BookingCreateOrConnectWithoutFlatInput[]
    createMany?: BookingCreateManyFlatInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type BookingOrderCreateNestedManyWithoutFlatInput = {
    create?: XOR<BookingOrderCreateWithoutFlatInput, BookingOrderUncheckedCreateWithoutFlatInput> | BookingOrderCreateWithoutFlatInput[] | BookingOrderUncheckedCreateWithoutFlatInput[]
    connectOrCreate?: BookingOrderCreateOrConnectWithoutFlatInput | BookingOrderCreateOrConnectWithoutFlatInput[]
    createMany?: BookingOrderCreateManyFlatInputEnvelope
    connect?: BookingOrderWhereUniqueInput | BookingOrderWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutFlatInput = {
    create?: XOR<BookingCreateWithoutFlatInput, BookingUncheckedCreateWithoutFlatInput> | BookingCreateWithoutFlatInput[] | BookingUncheckedCreateWithoutFlatInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutFlatInput | BookingCreateOrConnectWithoutFlatInput[]
    createMany?: BookingCreateManyFlatInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type BookingOrderUncheckedCreateNestedManyWithoutFlatInput = {
    create?: XOR<BookingOrderCreateWithoutFlatInput, BookingOrderUncheckedCreateWithoutFlatInput> | BookingOrderCreateWithoutFlatInput[] | BookingOrderUncheckedCreateWithoutFlatInput[]
    connectOrCreate?: BookingOrderCreateOrConnectWithoutFlatInput | BookingOrderCreateOrConnectWithoutFlatInput[]
    createMany?: BookingOrderCreateManyFlatInputEnvelope
    connect?: BookingOrderWhereUniqueInput | BookingOrderWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ProjectUpdateOneRequiredWithoutFlatsNestedInput = {
    create?: XOR<ProjectCreateWithoutFlatsInput, ProjectUncheckedCreateWithoutFlatsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutFlatsInput
    upsert?: ProjectUpsertWithoutFlatsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutFlatsInput, ProjectUpdateWithoutFlatsInput>, ProjectUncheckedUpdateWithoutFlatsInput>
  }

  export type BookingUpdateManyWithoutFlatNestedInput = {
    create?: XOR<BookingCreateWithoutFlatInput, BookingUncheckedCreateWithoutFlatInput> | BookingCreateWithoutFlatInput[] | BookingUncheckedCreateWithoutFlatInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutFlatInput | BookingCreateOrConnectWithoutFlatInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutFlatInput | BookingUpsertWithWhereUniqueWithoutFlatInput[]
    createMany?: BookingCreateManyFlatInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutFlatInput | BookingUpdateWithWhereUniqueWithoutFlatInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutFlatInput | BookingUpdateManyWithWhereWithoutFlatInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type BookingOrderUpdateManyWithoutFlatNestedInput = {
    create?: XOR<BookingOrderCreateWithoutFlatInput, BookingOrderUncheckedCreateWithoutFlatInput> | BookingOrderCreateWithoutFlatInput[] | BookingOrderUncheckedCreateWithoutFlatInput[]
    connectOrCreate?: BookingOrderCreateOrConnectWithoutFlatInput | BookingOrderCreateOrConnectWithoutFlatInput[]
    upsert?: BookingOrderUpsertWithWhereUniqueWithoutFlatInput | BookingOrderUpsertWithWhereUniqueWithoutFlatInput[]
    createMany?: BookingOrderCreateManyFlatInputEnvelope
    set?: BookingOrderWhereUniqueInput | BookingOrderWhereUniqueInput[]
    disconnect?: BookingOrderWhereUniqueInput | BookingOrderWhereUniqueInput[]
    delete?: BookingOrderWhereUniqueInput | BookingOrderWhereUniqueInput[]
    connect?: BookingOrderWhereUniqueInput | BookingOrderWhereUniqueInput[]
    update?: BookingOrderUpdateWithWhereUniqueWithoutFlatInput | BookingOrderUpdateWithWhereUniqueWithoutFlatInput[]
    updateMany?: BookingOrderUpdateManyWithWhereWithoutFlatInput | BookingOrderUpdateManyWithWhereWithoutFlatInput[]
    deleteMany?: BookingOrderScalarWhereInput | BookingOrderScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutFlatNestedInput = {
    create?: XOR<BookingCreateWithoutFlatInput, BookingUncheckedCreateWithoutFlatInput> | BookingCreateWithoutFlatInput[] | BookingUncheckedCreateWithoutFlatInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutFlatInput | BookingCreateOrConnectWithoutFlatInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutFlatInput | BookingUpsertWithWhereUniqueWithoutFlatInput[]
    createMany?: BookingCreateManyFlatInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutFlatInput | BookingUpdateWithWhereUniqueWithoutFlatInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutFlatInput | BookingUpdateManyWithWhereWithoutFlatInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type BookingOrderUncheckedUpdateManyWithoutFlatNestedInput = {
    create?: XOR<BookingOrderCreateWithoutFlatInput, BookingOrderUncheckedCreateWithoutFlatInput> | BookingOrderCreateWithoutFlatInput[] | BookingOrderUncheckedCreateWithoutFlatInput[]
    connectOrCreate?: BookingOrderCreateOrConnectWithoutFlatInput | BookingOrderCreateOrConnectWithoutFlatInput[]
    upsert?: BookingOrderUpsertWithWhereUniqueWithoutFlatInput | BookingOrderUpsertWithWhereUniqueWithoutFlatInput[]
    createMany?: BookingOrderCreateManyFlatInputEnvelope
    set?: BookingOrderWhereUniqueInput | BookingOrderWhereUniqueInput[]
    disconnect?: BookingOrderWhereUniqueInput | BookingOrderWhereUniqueInput[]
    delete?: BookingOrderWhereUniqueInput | BookingOrderWhereUniqueInput[]
    connect?: BookingOrderWhereUniqueInput | BookingOrderWhereUniqueInput[]
    update?: BookingOrderUpdateWithWhereUniqueWithoutFlatInput | BookingOrderUpdateWithWhereUniqueWithoutFlatInput[]
    updateMany?: BookingOrderUpdateManyWithWhereWithoutFlatInput | BookingOrderUpdateManyWithWhereWithoutFlatInput[]
    deleteMany?: BookingOrderScalarWhereInput | BookingOrderScalarWhereInput[]
  }

  export type FlatCreateNestedOneWithoutBookingsInput = {
    create?: XOR<FlatCreateWithoutBookingsInput, FlatUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: FlatCreateOrConnectWithoutBookingsInput
    connect?: FlatWhereUniqueInput
  }

  export type FlatUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<FlatCreateWithoutBookingsInput, FlatUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: FlatCreateOrConnectWithoutBookingsInput
    upsert?: FlatUpsertWithoutBookingsInput
    connect?: FlatWhereUniqueInput
    update?: XOR<XOR<FlatUpdateToOneWithWhereWithoutBookingsInput, FlatUpdateWithoutBookingsInput>, FlatUncheckedUpdateWithoutBookingsInput>
  }

  export type FlatCreateNestedOneWithoutOrdersInput = {
    create?: XOR<FlatCreateWithoutOrdersInput, FlatUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: FlatCreateOrConnectWithoutOrdersInput
    connect?: FlatWhereUniqueInput
  }

  export type FlatUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<FlatCreateWithoutOrdersInput, FlatUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: FlatCreateOrConnectWithoutOrdersInput
    upsert?: FlatUpsertWithoutOrdersInput
    connect?: FlatWhereUniqueInput
    update?: XOR<XOR<FlatUpdateToOneWithWhereWithoutOrdersInput, FlatUpdateWithoutOrdersInput>, FlatUncheckedUpdateWithoutOrdersInput>
  }

  export type AlbumCreateNestedOneWithoutReviewsInput = {
    create?: XOR<AlbumCreateWithoutReviewsInput, AlbumUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: AlbumCreateOrConnectWithoutReviewsInput
    connect?: AlbumWhereUniqueInput
  }

  export type AlbumUpdateOneWithoutReviewsNestedInput = {
    create?: XOR<AlbumCreateWithoutReviewsInput, AlbumUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: AlbumCreateOrConnectWithoutReviewsInput
    upsert?: AlbumUpsertWithoutReviewsInput
    disconnect?: AlbumWhereInput | boolean
    delete?: AlbumWhereInput | boolean
    connect?: AlbumWhereUniqueInput
    update?: XOR<XOR<AlbumUpdateToOneWithWhereWithoutReviewsInput, AlbumUpdateWithoutReviewsInput>, AlbumUncheckedUpdateWithoutReviewsInput>
  }

  export type AlbumPhotoCreateNestedManyWithoutAlbumInput = {
    create?: XOR<AlbumPhotoCreateWithoutAlbumInput, AlbumPhotoUncheckedCreateWithoutAlbumInput> | AlbumPhotoCreateWithoutAlbumInput[] | AlbumPhotoUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: AlbumPhotoCreateOrConnectWithoutAlbumInput | AlbumPhotoCreateOrConnectWithoutAlbumInput[]
    createMany?: AlbumPhotoCreateManyAlbumInputEnvelope
    connect?: AlbumPhotoWhereUniqueInput | AlbumPhotoWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutAlbumInput = {
    create?: XOR<ReviewCreateWithoutAlbumInput, ReviewUncheckedCreateWithoutAlbumInput> | ReviewCreateWithoutAlbumInput[] | ReviewUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutAlbumInput | ReviewCreateOrConnectWithoutAlbumInput[]
    createMany?: ReviewCreateManyAlbumInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type AlbumPhotoUncheckedCreateNestedManyWithoutAlbumInput = {
    create?: XOR<AlbumPhotoCreateWithoutAlbumInput, AlbumPhotoUncheckedCreateWithoutAlbumInput> | AlbumPhotoCreateWithoutAlbumInput[] | AlbumPhotoUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: AlbumPhotoCreateOrConnectWithoutAlbumInput | AlbumPhotoCreateOrConnectWithoutAlbumInput[]
    createMany?: AlbumPhotoCreateManyAlbumInputEnvelope
    connect?: AlbumPhotoWhereUniqueInput | AlbumPhotoWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutAlbumInput = {
    create?: XOR<ReviewCreateWithoutAlbumInput, ReviewUncheckedCreateWithoutAlbumInput> | ReviewCreateWithoutAlbumInput[] | ReviewUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutAlbumInput | ReviewCreateOrConnectWithoutAlbumInput[]
    createMany?: ReviewCreateManyAlbumInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type AlbumPhotoUpdateManyWithoutAlbumNestedInput = {
    create?: XOR<AlbumPhotoCreateWithoutAlbumInput, AlbumPhotoUncheckedCreateWithoutAlbumInput> | AlbumPhotoCreateWithoutAlbumInput[] | AlbumPhotoUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: AlbumPhotoCreateOrConnectWithoutAlbumInput | AlbumPhotoCreateOrConnectWithoutAlbumInput[]
    upsert?: AlbumPhotoUpsertWithWhereUniqueWithoutAlbumInput | AlbumPhotoUpsertWithWhereUniqueWithoutAlbumInput[]
    createMany?: AlbumPhotoCreateManyAlbumInputEnvelope
    set?: AlbumPhotoWhereUniqueInput | AlbumPhotoWhereUniqueInput[]
    disconnect?: AlbumPhotoWhereUniqueInput | AlbumPhotoWhereUniqueInput[]
    delete?: AlbumPhotoWhereUniqueInput | AlbumPhotoWhereUniqueInput[]
    connect?: AlbumPhotoWhereUniqueInput | AlbumPhotoWhereUniqueInput[]
    update?: AlbumPhotoUpdateWithWhereUniqueWithoutAlbumInput | AlbumPhotoUpdateWithWhereUniqueWithoutAlbumInput[]
    updateMany?: AlbumPhotoUpdateManyWithWhereWithoutAlbumInput | AlbumPhotoUpdateManyWithWhereWithoutAlbumInput[]
    deleteMany?: AlbumPhotoScalarWhereInput | AlbumPhotoScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutAlbumNestedInput = {
    create?: XOR<ReviewCreateWithoutAlbumInput, ReviewUncheckedCreateWithoutAlbumInput> | ReviewCreateWithoutAlbumInput[] | ReviewUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutAlbumInput | ReviewCreateOrConnectWithoutAlbumInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutAlbumInput | ReviewUpsertWithWhereUniqueWithoutAlbumInput[]
    createMany?: ReviewCreateManyAlbumInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutAlbumInput | ReviewUpdateWithWhereUniqueWithoutAlbumInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutAlbumInput | ReviewUpdateManyWithWhereWithoutAlbumInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type AlbumPhotoUncheckedUpdateManyWithoutAlbumNestedInput = {
    create?: XOR<AlbumPhotoCreateWithoutAlbumInput, AlbumPhotoUncheckedCreateWithoutAlbumInput> | AlbumPhotoCreateWithoutAlbumInput[] | AlbumPhotoUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: AlbumPhotoCreateOrConnectWithoutAlbumInput | AlbumPhotoCreateOrConnectWithoutAlbumInput[]
    upsert?: AlbumPhotoUpsertWithWhereUniqueWithoutAlbumInput | AlbumPhotoUpsertWithWhereUniqueWithoutAlbumInput[]
    createMany?: AlbumPhotoCreateManyAlbumInputEnvelope
    set?: AlbumPhotoWhereUniqueInput | AlbumPhotoWhereUniqueInput[]
    disconnect?: AlbumPhotoWhereUniqueInput | AlbumPhotoWhereUniqueInput[]
    delete?: AlbumPhotoWhereUniqueInput | AlbumPhotoWhereUniqueInput[]
    connect?: AlbumPhotoWhereUniqueInput | AlbumPhotoWhereUniqueInput[]
    update?: AlbumPhotoUpdateWithWhereUniqueWithoutAlbumInput | AlbumPhotoUpdateWithWhereUniqueWithoutAlbumInput[]
    updateMany?: AlbumPhotoUpdateManyWithWhereWithoutAlbumInput | AlbumPhotoUpdateManyWithWhereWithoutAlbumInput[]
    deleteMany?: AlbumPhotoScalarWhereInput | AlbumPhotoScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutAlbumNestedInput = {
    create?: XOR<ReviewCreateWithoutAlbumInput, ReviewUncheckedCreateWithoutAlbumInput> | ReviewCreateWithoutAlbumInput[] | ReviewUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutAlbumInput | ReviewCreateOrConnectWithoutAlbumInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutAlbumInput | ReviewUpsertWithWhereUniqueWithoutAlbumInput[]
    createMany?: ReviewCreateManyAlbumInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutAlbumInput | ReviewUpdateWithWhereUniqueWithoutAlbumInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutAlbumInput | ReviewUpdateManyWithWhereWithoutAlbumInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type AlbumCreateNestedOneWithoutPhotosInput = {
    create?: XOR<AlbumCreateWithoutPhotosInput, AlbumUncheckedCreateWithoutPhotosInput>
    connectOrCreate?: AlbumCreateOrConnectWithoutPhotosInput
    connect?: AlbumWhereUniqueInput
  }

  export type AlbumUpdateOneRequiredWithoutPhotosNestedInput = {
    create?: XOR<AlbumCreateWithoutPhotosInput, AlbumUncheckedCreateWithoutPhotosInput>
    connectOrCreate?: AlbumCreateOrConnectWithoutPhotosInput
    upsert?: AlbumUpsertWithoutPhotosInput
    connect?: AlbumWhereUniqueInput
    update?: XOR<XOR<AlbumUpdateToOneWithWhereWithoutPhotosInput, AlbumUpdateWithoutPhotosInput>, AlbumUncheckedUpdateWithoutPhotosInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type FlatCreateWithoutProjectInput = {
    id?: string
    tower: string
    floor: number
    floorLabel: string
    unitNumber: string
    unitType: string
    areaSqft: number
    priceLakhs: number
    facing?: string | null
    status?: string
    lockedUntil?: Date | string | null
    lockSession?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingCreateNestedManyWithoutFlatInput
    orders?: BookingOrderCreateNestedManyWithoutFlatInput
  }

  export type FlatUncheckedCreateWithoutProjectInput = {
    id?: string
    tower: string
    floor: number
    floorLabel: string
    unitNumber: string
    unitType: string
    areaSqft: number
    priceLakhs: number
    facing?: string | null
    status?: string
    lockedUntil?: Date | string | null
    lockSession?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutFlatInput
    orders?: BookingOrderUncheckedCreateNestedManyWithoutFlatInput
  }

  export type FlatCreateOrConnectWithoutProjectInput = {
    where: FlatWhereUniqueInput
    create: XOR<FlatCreateWithoutProjectInput, FlatUncheckedCreateWithoutProjectInput>
  }

  export type FlatCreateManyProjectInputEnvelope = {
    data: FlatCreateManyProjectInput | FlatCreateManyProjectInput[]
  }

  export type FlatUpsertWithWhereUniqueWithoutProjectInput = {
    where: FlatWhereUniqueInput
    update: XOR<FlatUpdateWithoutProjectInput, FlatUncheckedUpdateWithoutProjectInput>
    create: XOR<FlatCreateWithoutProjectInput, FlatUncheckedCreateWithoutProjectInput>
  }

  export type FlatUpdateWithWhereUniqueWithoutProjectInput = {
    where: FlatWhereUniqueInput
    data: XOR<FlatUpdateWithoutProjectInput, FlatUncheckedUpdateWithoutProjectInput>
  }

  export type FlatUpdateManyWithWhereWithoutProjectInput = {
    where: FlatScalarWhereInput
    data: XOR<FlatUpdateManyMutationInput, FlatUncheckedUpdateManyWithoutProjectInput>
  }

  export type FlatScalarWhereInput = {
    AND?: FlatScalarWhereInput | FlatScalarWhereInput[]
    OR?: FlatScalarWhereInput[]
    NOT?: FlatScalarWhereInput | FlatScalarWhereInput[]
    id?: StringFilter<"Flat"> | string
    projectId?: StringFilter<"Flat"> | string
    tower?: StringFilter<"Flat"> | string
    floor?: IntFilter<"Flat"> | number
    floorLabel?: StringFilter<"Flat"> | string
    unitNumber?: StringFilter<"Flat"> | string
    unitType?: StringFilter<"Flat"> | string
    areaSqft?: IntFilter<"Flat"> | number
    priceLakhs?: FloatFilter<"Flat"> | number
    facing?: StringNullableFilter<"Flat"> | string | null
    status?: StringFilter<"Flat"> | string
    lockedUntil?: DateTimeNullableFilter<"Flat"> | Date | string | null
    lockSession?: StringNullableFilter<"Flat"> | string | null
    createdAt?: DateTimeFilter<"Flat"> | Date | string
    updatedAt?: DateTimeFilter<"Flat"> | Date | string
  }

  export type ProjectCreateWithoutFlatsInput = {
    id?: string
    slug: string
    name: string
    tagline?: string | null
    location: string
    type: string
    status: string
    price: string
    landArea?: string | null
    totalUnits?: string | null
    unitSizes?: string | null
    reraNumber?: string | null
    possessionDate?: string | null
    description: string
    highlights: string
    amenities?: string | null
    image: string
    gallery?: string | null
    featured?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUncheckedCreateWithoutFlatsInput = {
    id?: string
    slug: string
    name: string
    tagline?: string | null
    location: string
    type: string
    status: string
    price: string
    landArea?: string | null
    totalUnits?: string | null
    unitSizes?: string | null
    reraNumber?: string | null
    possessionDate?: string | null
    description: string
    highlights: string
    amenities?: string | null
    image: string
    gallery?: string | null
    featured?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectCreateOrConnectWithoutFlatsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutFlatsInput, ProjectUncheckedCreateWithoutFlatsInput>
  }

  export type BookingCreateWithoutFlatInput = {
    id?: string
    buyerName: string
    buyerPhone: string
    buyerEmail?: string | null
    amountLabel?: string | null
    status?: string
    createdAt?: Date | string
  }

  export type BookingUncheckedCreateWithoutFlatInput = {
    id?: string
    buyerName: string
    buyerPhone: string
    buyerEmail?: string | null
    amountLabel?: string | null
    status?: string
    createdAt?: Date | string
  }

  export type BookingCreateOrConnectWithoutFlatInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutFlatInput, BookingUncheckedCreateWithoutFlatInput>
  }

  export type BookingCreateManyFlatInputEnvelope = {
    data: BookingCreateManyFlatInput | BookingCreateManyFlatInput[]
  }

  export type BookingOrderCreateWithoutFlatInput = {
    id?: string
    orderNumber: string
    amount: number
    currency?: string
    provider?: string
    razorpayOrderId?: string | null
    razorpayPaymentId?: string | null
    razorpaySignature?: string | null
    buyerName: string
    buyerPhone: string
    buyerEmail?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingOrderUncheckedCreateWithoutFlatInput = {
    id?: string
    orderNumber: string
    amount: number
    currency?: string
    provider?: string
    razorpayOrderId?: string | null
    razorpayPaymentId?: string | null
    razorpaySignature?: string | null
    buyerName: string
    buyerPhone: string
    buyerEmail?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingOrderCreateOrConnectWithoutFlatInput = {
    where: BookingOrderWhereUniqueInput
    create: XOR<BookingOrderCreateWithoutFlatInput, BookingOrderUncheckedCreateWithoutFlatInput>
  }

  export type BookingOrderCreateManyFlatInputEnvelope = {
    data: BookingOrderCreateManyFlatInput | BookingOrderCreateManyFlatInput[]
  }

  export type ProjectUpsertWithoutFlatsInput = {
    update: XOR<ProjectUpdateWithoutFlatsInput, ProjectUncheckedUpdateWithoutFlatsInput>
    create: XOR<ProjectCreateWithoutFlatsInput, ProjectUncheckedCreateWithoutFlatsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutFlatsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutFlatsInput, ProjectUncheckedUpdateWithoutFlatsInput>
  }

  export type ProjectUpdateWithoutFlatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tagline?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    landArea?: NullableStringFieldUpdateOperationsInput | string | null
    totalUnits?: NullableStringFieldUpdateOperationsInput | string | null
    unitSizes?: NullableStringFieldUpdateOperationsInput | string | null
    reraNumber?: NullableStringFieldUpdateOperationsInput | string | null
    possessionDate?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    highlights?: StringFieldUpdateOperationsInput | string
    amenities?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    gallery?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateWithoutFlatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tagline?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    landArea?: NullableStringFieldUpdateOperationsInput | string | null
    totalUnits?: NullableStringFieldUpdateOperationsInput | string | null
    unitSizes?: NullableStringFieldUpdateOperationsInput | string | null
    reraNumber?: NullableStringFieldUpdateOperationsInput | string | null
    possessionDate?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    highlights?: StringFieldUpdateOperationsInput | string
    amenities?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    gallery?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUpsertWithWhereUniqueWithoutFlatInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutFlatInput, BookingUncheckedUpdateWithoutFlatInput>
    create: XOR<BookingCreateWithoutFlatInput, BookingUncheckedCreateWithoutFlatInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutFlatInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutFlatInput, BookingUncheckedUpdateWithoutFlatInput>
  }

  export type BookingUpdateManyWithWhereWithoutFlatInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutFlatInput>
  }

  export type BookingScalarWhereInput = {
    AND?: BookingScalarWhereInput | BookingScalarWhereInput[]
    OR?: BookingScalarWhereInput[]
    NOT?: BookingScalarWhereInput | BookingScalarWhereInput[]
    id?: StringFilter<"Booking"> | string
    flatId?: StringFilter<"Booking"> | string
    buyerName?: StringFilter<"Booking"> | string
    buyerPhone?: StringFilter<"Booking"> | string
    buyerEmail?: StringNullableFilter<"Booking"> | string | null
    amountLabel?: StringNullableFilter<"Booking"> | string | null
    status?: StringFilter<"Booking"> | string
    createdAt?: DateTimeFilter<"Booking"> | Date | string
  }

  export type BookingOrderUpsertWithWhereUniqueWithoutFlatInput = {
    where: BookingOrderWhereUniqueInput
    update: XOR<BookingOrderUpdateWithoutFlatInput, BookingOrderUncheckedUpdateWithoutFlatInput>
    create: XOR<BookingOrderCreateWithoutFlatInput, BookingOrderUncheckedCreateWithoutFlatInput>
  }

  export type BookingOrderUpdateWithWhereUniqueWithoutFlatInput = {
    where: BookingOrderWhereUniqueInput
    data: XOR<BookingOrderUpdateWithoutFlatInput, BookingOrderUncheckedUpdateWithoutFlatInput>
  }

  export type BookingOrderUpdateManyWithWhereWithoutFlatInput = {
    where: BookingOrderScalarWhereInput
    data: XOR<BookingOrderUpdateManyMutationInput, BookingOrderUncheckedUpdateManyWithoutFlatInput>
  }

  export type BookingOrderScalarWhereInput = {
    AND?: BookingOrderScalarWhereInput | BookingOrderScalarWhereInput[]
    OR?: BookingOrderScalarWhereInput[]
    NOT?: BookingOrderScalarWhereInput | BookingOrderScalarWhereInput[]
    id?: StringFilter<"BookingOrder"> | string
    flatId?: StringFilter<"BookingOrder"> | string
    orderNumber?: StringFilter<"BookingOrder"> | string
    amount?: IntFilter<"BookingOrder"> | number
    currency?: StringFilter<"BookingOrder"> | string
    provider?: StringFilter<"BookingOrder"> | string
    razorpayOrderId?: StringNullableFilter<"BookingOrder"> | string | null
    razorpayPaymentId?: StringNullableFilter<"BookingOrder"> | string | null
    razorpaySignature?: StringNullableFilter<"BookingOrder"> | string | null
    buyerName?: StringFilter<"BookingOrder"> | string
    buyerPhone?: StringFilter<"BookingOrder"> | string
    buyerEmail?: StringNullableFilter<"BookingOrder"> | string | null
    status?: StringFilter<"BookingOrder"> | string
    createdAt?: DateTimeFilter<"BookingOrder"> | Date | string
    updatedAt?: DateTimeFilter<"BookingOrder"> | Date | string
  }

  export type FlatCreateWithoutBookingsInput = {
    id?: string
    tower: string
    floor: number
    floorLabel: string
    unitNumber: string
    unitType: string
    areaSqft: number
    priceLakhs: number
    facing?: string | null
    status?: string
    lockedUntil?: Date | string | null
    lockSession?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutFlatsInput
    orders?: BookingOrderCreateNestedManyWithoutFlatInput
  }

  export type FlatUncheckedCreateWithoutBookingsInput = {
    id?: string
    projectId: string
    tower: string
    floor: number
    floorLabel: string
    unitNumber: string
    unitType: string
    areaSqft: number
    priceLakhs: number
    facing?: string | null
    status?: string
    lockedUntil?: Date | string | null
    lockSession?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: BookingOrderUncheckedCreateNestedManyWithoutFlatInput
  }

  export type FlatCreateOrConnectWithoutBookingsInput = {
    where: FlatWhereUniqueInput
    create: XOR<FlatCreateWithoutBookingsInput, FlatUncheckedCreateWithoutBookingsInput>
  }

  export type FlatUpsertWithoutBookingsInput = {
    update: XOR<FlatUpdateWithoutBookingsInput, FlatUncheckedUpdateWithoutBookingsInput>
    create: XOR<FlatCreateWithoutBookingsInput, FlatUncheckedCreateWithoutBookingsInput>
    where?: FlatWhereInput
  }

  export type FlatUpdateToOneWithWhereWithoutBookingsInput = {
    where?: FlatWhereInput
    data: XOR<FlatUpdateWithoutBookingsInput, FlatUncheckedUpdateWithoutBookingsInput>
  }

  export type FlatUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tower?: StringFieldUpdateOperationsInput | string
    floor?: IntFieldUpdateOperationsInput | number
    floorLabel?: StringFieldUpdateOperationsInput | string
    unitNumber?: StringFieldUpdateOperationsInput | string
    unitType?: StringFieldUpdateOperationsInput | string
    areaSqft?: IntFieldUpdateOperationsInput | number
    priceLakhs?: FloatFieldUpdateOperationsInput | number
    facing?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lockSession?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutFlatsNestedInput
    orders?: BookingOrderUpdateManyWithoutFlatNestedInput
  }

  export type FlatUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    tower?: StringFieldUpdateOperationsInput | string
    floor?: IntFieldUpdateOperationsInput | number
    floorLabel?: StringFieldUpdateOperationsInput | string
    unitNumber?: StringFieldUpdateOperationsInput | string
    unitType?: StringFieldUpdateOperationsInput | string
    areaSqft?: IntFieldUpdateOperationsInput | number
    priceLakhs?: FloatFieldUpdateOperationsInput | number
    facing?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lockSession?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: BookingOrderUncheckedUpdateManyWithoutFlatNestedInput
  }

  export type FlatCreateWithoutOrdersInput = {
    id?: string
    tower: string
    floor: number
    floorLabel: string
    unitNumber: string
    unitType: string
    areaSqft: number
    priceLakhs: number
    facing?: string | null
    status?: string
    lockedUntil?: Date | string | null
    lockSession?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutFlatsInput
    bookings?: BookingCreateNestedManyWithoutFlatInput
  }

  export type FlatUncheckedCreateWithoutOrdersInput = {
    id?: string
    projectId: string
    tower: string
    floor: number
    floorLabel: string
    unitNumber: string
    unitType: string
    areaSqft: number
    priceLakhs: number
    facing?: string | null
    status?: string
    lockedUntil?: Date | string | null
    lockSession?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutFlatInput
  }

  export type FlatCreateOrConnectWithoutOrdersInput = {
    where: FlatWhereUniqueInput
    create: XOR<FlatCreateWithoutOrdersInput, FlatUncheckedCreateWithoutOrdersInput>
  }

  export type FlatUpsertWithoutOrdersInput = {
    update: XOR<FlatUpdateWithoutOrdersInput, FlatUncheckedUpdateWithoutOrdersInput>
    create: XOR<FlatCreateWithoutOrdersInput, FlatUncheckedCreateWithoutOrdersInput>
    where?: FlatWhereInput
  }

  export type FlatUpdateToOneWithWhereWithoutOrdersInput = {
    where?: FlatWhereInput
    data: XOR<FlatUpdateWithoutOrdersInput, FlatUncheckedUpdateWithoutOrdersInput>
  }

  export type FlatUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    tower?: StringFieldUpdateOperationsInput | string
    floor?: IntFieldUpdateOperationsInput | number
    floorLabel?: StringFieldUpdateOperationsInput | string
    unitNumber?: StringFieldUpdateOperationsInput | string
    unitType?: StringFieldUpdateOperationsInput | string
    areaSqft?: IntFieldUpdateOperationsInput | number
    priceLakhs?: FloatFieldUpdateOperationsInput | number
    facing?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lockSession?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutFlatsNestedInput
    bookings?: BookingUpdateManyWithoutFlatNestedInput
  }

  export type FlatUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    tower?: StringFieldUpdateOperationsInput | string
    floor?: IntFieldUpdateOperationsInput | number
    floorLabel?: StringFieldUpdateOperationsInput | string
    unitNumber?: StringFieldUpdateOperationsInput | string
    unitType?: StringFieldUpdateOperationsInput | string
    areaSqft?: IntFieldUpdateOperationsInput | number
    priceLakhs?: FloatFieldUpdateOperationsInput | number
    facing?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lockSession?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutFlatNestedInput
  }

  export type AlbumCreateWithoutReviewsInput = {
    id?: string
    title: string
    description?: string | null
    projectName: string
    flatNo: string
    ownerName: string
    approved?: boolean
    coverPhoto?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    photos?: AlbumPhotoCreateNestedManyWithoutAlbumInput
  }

  export type AlbumUncheckedCreateWithoutReviewsInput = {
    id?: string
    title: string
    description?: string | null
    projectName: string
    flatNo: string
    ownerName: string
    approved?: boolean
    coverPhoto?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    photos?: AlbumPhotoUncheckedCreateNestedManyWithoutAlbumInput
  }

  export type AlbumCreateOrConnectWithoutReviewsInput = {
    where: AlbumWhereUniqueInput
    create: XOR<AlbumCreateWithoutReviewsInput, AlbumUncheckedCreateWithoutReviewsInput>
  }

  export type AlbumUpsertWithoutReviewsInput = {
    update: XOR<AlbumUpdateWithoutReviewsInput, AlbumUncheckedUpdateWithoutReviewsInput>
    create: XOR<AlbumCreateWithoutReviewsInput, AlbumUncheckedCreateWithoutReviewsInput>
    where?: AlbumWhereInput
  }

  export type AlbumUpdateToOneWithWhereWithoutReviewsInput = {
    where?: AlbumWhereInput
    data: XOR<AlbumUpdateWithoutReviewsInput, AlbumUncheckedUpdateWithoutReviewsInput>
  }

  export type AlbumUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    projectName?: StringFieldUpdateOperationsInput | string
    flatNo?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    coverPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: AlbumPhotoUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    projectName?: StringFieldUpdateOperationsInput | string
    flatNo?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    coverPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: AlbumPhotoUncheckedUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumPhotoCreateWithoutAlbumInput = {
    id?: string
    url: string
    caption?: string | null
    createdAt?: Date | string
  }

  export type AlbumPhotoUncheckedCreateWithoutAlbumInput = {
    id?: string
    url: string
    caption?: string | null
    createdAt?: Date | string
  }

  export type AlbumPhotoCreateOrConnectWithoutAlbumInput = {
    where: AlbumPhotoWhereUniqueInput
    create: XOR<AlbumPhotoCreateWithoutAlbumInput, AlbumPhotoUncheckedCreateWithoutAlbumInput>
  }

  export type AlbumPhotoCreateManyAlbumInputEnvelope = {
    data: AlbumPhotoCreateManyAlbumInput | AlbumPhotoCreateManyAlbumInput[]
  }

  export type ReviewCreateWithoutAlbumInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    rating?: number
    title?: string | null
    comment: string
    projectName?: string | null
    flatNo?: string | null
    approved?: boolean
    createdAt?: Date | string
  }

  export type ReviewUncheckedCreateWithoutAlbumInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    rating?: number
    title?: string | null
    comment: string
    projectName?: string | null
    flatNo?: string | null
    approved?: boolean
    createdAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutAlbumInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutAlbumInput, ReviewUncheckedCreateWithoutAlbumInput>
  }

  export type ReviewCreateManyAlbumInputEnvelope = {
    data: ReviewCreateManyAlbumInput | ReviewCreateManyAlbumInput[]
  }

  export type AlbumPhotoUpsertWithWhereUniqueWithoutAlbumInput = {
    where: AlbumPhotoWhereUniqueInput
    update: XOR<AlbumPhotoUpdateWithoutAlbumInput, AlbumPhotoUncheckedUpdateWithoutAlbumInput>
    create: XOR<AlbumPhotoCreateWithoutAlbumInput, AlbumPhotoUncheckedCreateWithoutAlbumInput>
  }

  export type AlbumPhotoUpdateWithWhereUniqueWithoutAlbumInput = {
    where: AlbumPhotoWhereUniqueInput
    data: XOR<AlbumPhotoUpdateWithoutAlbumInput, AlbumPhotoUncheckedUpdateWithoutAlbumInput>
  }

  export type AlbumPhotoUpdateManyWithWhereWithoutAlbumInput = {
    where: AlbumPhotoScalarWhereInput
    data: XOR<AlbumPhotoUpdateManyMutationInput, AlbumPhotoUncheckedUpdateManyWithoutAlbumInput>
  }

  export type AlbumPhotoScalarWhereInput = {
    AND?: AlbumPhotoScalarWhereInput | AlbumPhotoScalarWhereInput[]
    OR?: AlbumPhotoScalarWhereInput[]
    NOT?: AlbumPhotoScalarWhereInput | AlbumPhotoScalarWhereInput[]
    id?: StringFilter<"AlbumPhoto"> | string
    albumId?: StringFilter<"AlbumPhoto"> | string
    url?: StringFilter<"AlbumPhoto"> | string
    caption?: StringNullableFilter<"AlbumPhoto"> | string | null
    createdAt?: DateTimeFilter<"AlbumPhoto"> | Date | string
  }

  export type ReviewUpsertWithWhereUniqueWithoutAlbumInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutAlbumInput, ReviewUncheckedUpdateWithoutAlbumInput>
    create: XOR<ReviewCreateWithoutAlbumInput, ReviewUncheckedCreateWithoutAlbumInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutAlbumInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutAlbumInput, ReviewUncheckedUpdateWithoutAlbumInput>
  }

  export type ReviewUpdateManyWithWhereWithoutAlbumInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutAlbumInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: StringFilter<"Review"> | string
    name?: StringFilter<"Review"> | string
    email?: StringNullableFilter<"Review"> | string | null
    phone?: StringNullableFilter<"Review"> | string | null
    rating?: IntFilter<"Review"> | number
    title?: StringNullableFilter<"Review"> | string | null
    comment?: StringFilter<"Review"> | string
    projectName?: StringNullableFilter<"Review"> | string | null
    flatNo?: StringNullableFilter<"Review"> | string | null
    albumId?: StringNullableFilter<"Review"> | string | null
    approved?: BoolFilter<"Review"> | boolean
    createdAt?: DateTimeFilter<"Review"> | Date | string
  }

  export type AlbumCreateWithoutPhotosInput = {
    id?: string
    title: string
    description?: string | null
    projectName: string
    flatNo: string
    ownerName: string
    approved?: boolean
    coverPhoto?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewCreateNestedManyWithoutAlbumInput
  }

  export type AlbumUncheckedCreateWithoutPhotosInput = {
    id?: string
    title: string
    description?: string | null
    projectName: string
    flatNo: string
    ownerName: string
    approved?: boolean
    coverPhoto?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewUncheckedCreateNestedManyWithoutAlbumInput
  }

  export type AlbumCreateOrConnectWithoutPhotosInput = {
    where: AlbumWhereUniqueInput
    create: XOR<AlbumCreateWithoutPhotosInput, AlbumUncheckedCreateWithoutPhotosInput>
  }

  export type AlbumUpsertWithoutPhotosInput = {
    update: XOR<AlbumUpdateWithoutPhotosInput, AlbumUncheckedUpdateWithoutPhotosInput>
    create: XOR<AlbumCreateWithoutPhotosInput, AlbumUncheckedCreateWithoutPhotosInput>
    where?: AlbumWhereInput
  }

  export type AlbumUpdateToOneWithWhereWithoutPhotosInput = {
    where?: AlbumWhereInput
    data: XOR<AlbumUpdateWithoutPhotosInput, AlbumUncheckedUpdateWithoutPhotosInput>
  }

  export type AlbumUpdateWithoutPhotosInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    projectName?: StringFieldUpdateOperationsInput | string
    flatNo?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    coverPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumUncheckedUpdateWithoutPhotosInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    projectName?: StringFieldUpdateOperationsInput | string
    flatNo?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    coverPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUncheckedUpdateManyWithoutAlbumNestedInput
  }

  export type FlatCreateManyProjectInput = {
    id?: string
    tower: string
    floor: number
    floorLabel: string
    unitNumber: string
    unitType: string
    areaSqft: number
    priceLakhs: number
    facing?: string | null
    status?: string
    lockedUntil?: Date | string | null
    lockSession?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FlatUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    tower?: StringFieldUpdateOperationsInput | string
    floor?: IntFieldUpdateOperationsInput | number
    floorLabel?: StringFieldUpdateOperationsInput | string
    unitNumber?: StringFieldUpdateOperationsInput | string
    unitType?: StringFieldUpdateOperationsInput | string
    areaSqft?: IntFieldUpdateOperationsInput | number
    priceLakhs?: FloatFieldUpdateOperationsInput | number
    facing?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lockSession?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutFlatNestedInput
    orders?: BookingOrderUpdateManyWithoutFlatNestedInput
  }

  export type FlatUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    tower?: StringFieldUpdateOperationsInput | string
    floor?: IntFieldUpdateOperationsInput | number
    floorLabel?: StringFieldUpdateOperationsInput | string
    unitNumber?: StringFieldUpdateOperationsInput | string
    unitType?: StringFieldUpdateOperationsInput | string
    areaSqft?: IntFieldUpdateOperationsInput | number
    priceLakhs?: FloatFieldUpdateOperationsInput | number
    facing?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lockSession?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutFlatNestedInput
    orders?: BookingOrderUncheckedUpdateManyWithoutFlatNestedInput
  }

  export type FlatUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    tower?: StringFieldUpdateOperationsInput | string
    floor?: IntFieldUpdateOperationsInput | number
    floorLabel?: StringFieldUpdateOperationsInput | string
    unitNumber?: StringFieldUpdateOperationsInput | string
    unitType?: StringFieldUpdateOperationsInput | string
    areaSqft?: IntFieldUpdateOperationsInput | number
    priceLakhs?: FloatFieldUpdateOperationsInput | number
    facing?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lockSession?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateManyFlatInput = {
    id?: string
    buyerName: string
    buyerPhone: string
    buyerEmail?: string | null
    amountLabel?: string | null
    status?: string
    createdAt?: Date | string
  }

  export type BookingOrderCreateManyFlatInput = {
    id?: string
    orderNumber: string
    amount: number
    currency?: string
    provider?: string
    razorpayOrderId?: string | null
    razorpayPaymentId?: string | null
    razorpaySignature?: string | null
    buyerName: string
    buyerPhone: string
    buyerEmail?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUpdateWithoutFlatInput = {
    id?: StringFieldUpdateOperationsInput | string
    buyerName?: StringFieldUpdateOperationsInput | string
    buyerPhone?: StringFieldUpdateOperationsInput | string
    buyerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    amountLabel?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateWithoutFlatInput = {
    id?: StringFieldUpdateOperationsInput | string
    buyerName?: StringFieldUpdateOperationsInput | string
    buyerPhone?: StringFieldUpdateOperationsInput | string
    buyerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    amountLabel?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyWithoutFlatInput = {
    id?: StringFieldUpdateOperationsInput | string
    buyerName?: StringFieldUpdateOperationsInput | string
    buyerPhone?: StringFieldUpdateOperationsInput | string
    buyerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    amountLabel?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingOrderUpdateWithoutFlatInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    buyerName?: StringFieldUpdateOperationsInput | string
    buyerPhone?: StringFieldUpdateOperationsInput | string
    buyerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingOrderUncheckedUpdateWithoutFlatInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    buyerName?: StringFieldUpdateOperationsInput | string
    buyerPhone?: StringFieldUpdateOperationsInput | string
    buyerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingOrderUncheckedUpdateManyWithoutFlatInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    buyerName?: StringFieldUpdateOperationsInput | string
    buyerPhone?: StringFieldUpdateOperationsInput | string
    buyerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlbumPhotoCreateManyAlbumInput = {
    id?: string
    url: string
    caption?: string | null
    createdAt?: Date | string
  }

  export type ReviewCreateManyAlbumInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    rating?: number
    title?: string | null
    comment: string
    projectName?: string | null
    flatNo?: string | null
    approved?: boolean
    createdAt?: Date | string
  }

  export type AlbumPhotoUpdateWithoutAlbumInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlbumPhotoUncheckedUpdateWithoutAlbumInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlbumPhotoUncheckedUpdateManyWithoutAlbumInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutAlbumInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: StringFieldUpdateOperationsInput | string
    projectName?: NullableStringFieldUpdateOperationsInput | string | null
    flatNo?: NullableStringFieldUpdateOperationsInput | string | null
    approved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateWithoutAlbumInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: StringFieldUpdateOperationsInput | string
    projectName?: NullableStringFieldUpdateOperationsInput | string | null
    flatNo?: NullableStringFieldUpdateOperationsInput | string | null
    approved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutAlbumInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: StringFieldUpdateOperationsInput | string
    projectName?: NullableStringFieldUpdateOperationsInput | string | null
    flatNo?: NullableStringFieldUpdateOperationsInput | string | null
    approved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}