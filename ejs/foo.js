function fooResponse(request, state) {
    return {
      statusCode: 200,
      body: [
        { "foo": "bar" }
      ]
    };
  }