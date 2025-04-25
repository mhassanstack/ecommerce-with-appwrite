import { Client, Databases, Storage, ID } from "appwrite";

const client = new Client()

client
    .setEndpoint("https://fra.cloud.appwrite.io/v1")
    .setProject("6805e73a002e7ca75cc4")

const databases = new Databases(client)
const storage = new Storage(client)

export { client, databases, storage, ID };