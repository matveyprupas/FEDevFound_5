let err = new Error("Oops, it's my custom error");

try {
    throw err;
} catch (error) {
    console.log(error);
}