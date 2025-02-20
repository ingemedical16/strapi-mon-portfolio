import mongoose from 'mongoose';

export default async ({ env }) => {
  const uri = env('DATABASE_URI', 'mongodb://localhost:27017/strapi');

  try {
    await mongoose.connect(uri);
    console.log('✅ MongoDB connecté avec succès');
  } catch (error) {
    console.error('❌ Erreur de connexion MongoDB :', error);
    process.exit(1);
  }

  return {
    connection: {
      client: 'custom',
      connection: {
        uri,
      },
    },
  };
};
