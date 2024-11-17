import app from './app';
import config from './app/config';
import mongoose from 'mongoose';

async function main() {
  try {
    // Connect to MongoDB using the connection URL
    await mongoose.connect(config.database_url as string);

    // Start the application server
    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (err) {
    console.error('Error starting the server:', err);
    process.exit(1);
  }
}
main();
