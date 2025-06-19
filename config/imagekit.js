import ImageKit from "imagekit";

const imagekit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});

if (!imagekit.isvalid()) {
    console.log({ success: false, message: "ImageKit is not valid" })
    return exit(1);
}

console.log({ success: true, message: "ImageKit is valid" });

export default imagekit;