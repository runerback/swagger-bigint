declare module "json-bigint" {
    /**
     * Options for behaviour of the parser.
     */
    interface IJSONbigOptions {
        /**
         * Specifies the parsing should be "strict" towards reporting duplicate-keys in the parsed string.
         * default false.
         */
        strict?: boolean;
        /**
         * Specifies if BigInts should be stored in the object as a string, rather than the default BigNumber.
         * defualt false.
         */
        storeAsString?: boolean;
        /**
         * Specifies if parser uses native BigInt instead of bignumber.js.
         * defualt false.
         */
        useNativeBigInt?: boolean;
        /**
         * Specifies if all numbers should be stored as BigNumber.
         * defualt false.
         */
        alwaysParseAsBig?: boolean;
        /**
         * Controls how `__proto__` properties are treated.
         * If set to `error` they are not allowed and `parse()` call will throw an error.
         * If set to `ignore` the prroperty and it's value is skipped from parsing and object building.
         * If set to `preserve` the `__proto__` property is set.
         * One should be extra careful and make sure any other library consuming generated data is not vulnerable to prototype poisoning attacks.
         * defualt `error`.
         */
        protoAction?: "error" | "ignore" | "preserve" | null;
        /**
         * Controls how `constructor` properties are treated.
         * If set to `error` they are not allowed and `parse()` call will throw an error.
         * If set to `ignore` the prroperty and it's value is skipped from parsing and object building.
         * If set to `preserve` the `__proto__` property is set.
         * One should be extra careful and make sure any other library consuming generated data is not vulnerable to prototype poisoning attacks.
         * defualt `error`.
         */
        constructorAction?: "error" | "ignore" | "preserve" | null;
    }

    interface IJSONbig {
        parse(text: string, reviver?: (this: any, key: string, value: any) => any): any;
        stringify(value: any, replacer?: (this: any, key: string, value: any) => any, space?: string | number): string;
        stringify(value: any, replacer?: (number | string)[] | null, space?: string | number): string;
    }

    function JSONbig(options?: IJSONbigOptions): IJSONbig;

    export = JSONbig;
}