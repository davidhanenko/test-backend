module.exports = ({ env }) => {
  if (env('NODE_ENV') === 'production') {
    return {
      settings: {
        cors: {
          origin: [
            'https://a2z-demo.herokuapp.com',
            'https://a2z-frontend-demo.vercel.app',
          ],
          credentials: true,
        },
        // 10 Mb max upload file size
        parser: {
          enabled: true,
          multipart: true,
          formidable: {
            maxFileSize: 10 * 1024 * 1024,
          },
        },
      },
    };
  }

  return {
    settings: {
      cors: {
        origin: ['http://localhost:1337', 'http://localhost:7777'],
      },
      // 10 Mb max upload file size
      parser: {
        enabled: true,
        multipart: true,
        formidable: {
          maxFileSize: 10 * 1024 * 1024,
        },
      },
    },
  };
};
