import {Client} from "pg";

const client = new Client({
    connectionString: "postgresql://normiedev1:YbV48eOUAJvI@ep-rapid-tree-a12biurj.ap-southeast-1.aws.neon.tech/neonDB?sslmode=require",
});


async function insertDataInUsersTable(){
    await client.connect();
    // INSERT INTO users (username, email, password)
    // VALUES ("sandeepsb", "sandeep@gmail.com", "secretPassword123!")
    const res = await client.query(`
    INSERT INTO users (username, email, password) VALUES ('sandeepsb', 'sandeep@gmail.com', 'secretPassword123!')
    `);
    console.log(res);
}

insertDataInUsersTable();