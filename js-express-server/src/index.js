const express = require('express');

const app = express();
const PORT = process.env.PORT || 8001;

// no endpoints (per request)

app.listen(PORT, '0.0.0.0', () => {
  /* eslint-disable no-console */
  console.log(`JS Express server listening on http://0.0.0.0:${PORT}`);
});