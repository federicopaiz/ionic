
  const { register, navigate } = require('../../../../../scripts/e2e');

  describe('badge/standalone', () => {

    register('should init', navigate('http://localhost:3333/src/components/badge/test/standalone'));

  });
  