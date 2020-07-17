# Swagger UI BigInt Parsing Support

Add large number support for JSON parsing in swagger UI.

---

[Swagger UI](https://github.com/swagger-api/swagger-ui) parse json data returned from API with [JSON.parse](https://developer.mozilla.org/docs/web/javascript/reference/global_objects/json/parse), which may cause some `Int64` number value incorrect.

for example:

```json
{
    "id": 9007199254740999,
    "value":1475083243429572608
}
```

will be present as:

```json
{
    "id": 9007199254741000,
    "value":1475083243429572600
}
```

The package [json-bigint](https://github.com/sidorares/json-bigint) can solve this problem.

I use this package to replace `JSON.parse` and `JSON.stringify` globally, and it could only effect API webpage.

## Usage

Clone this repository, then run `yarn && yarn build:compile` in the root folder, when it's done, there should be an `bigint_json.js` file be compiled in `dist` folder.

In your AspNetCore project, put this file into `wwwroot` folder *(make sure it will be copied to output folder)*, then add/modify some codes in `Startup` file:

```csharp
// . . .

public void Configure(IApplicationBuilder app) // . . .
{
    // . . .

    app.UseStaticFiles();

    // . . .

    app.UseSwaggerUI(options =>
    {
        // . . .

        options.InjectJavascript(".//*some_subfolders_maybe*//bigint_json.js");
    });

    // . . .
}

// . . .
```

You can run some javascript code in console of API page to check whether it works:

```javascript
(function () {
    const json = '{ "value" : 1475083243429572608 }';
    const obj = JSON.parse(json);
    console.log('JSON.parse(input) : ', obj);
    console.log('JSON.stringify(JSON.parse(input)):', JSON.stringify(obj));
})();
```

it should print something like:

```js
JSON.parse(input) :   ▶{value: T}
JSON.stringify(JSON.parse(input)): {"value":1475083243429572608}
```
