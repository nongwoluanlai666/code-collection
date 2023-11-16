const express = require('express');
const axios = require('axios');
const cors = require('cors'); // Import the cors middleware
const CircularJSON = require('circular-json');
const app = express();
const PORT = process.env.PORT || 1233;



app.use(express.json());
// app.use(cors()); // Enable CORS for all routes
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://192.168.8.25:1234');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
});

app.options('/api/http', cors()); // Enable preflight for the /api/post route

app.post('/api/http', async (req, res) => {
  try {
    const { PostGet, remoteUrl, headers, body } = req.body;
    // console.log(PostGet, remoteUrl, headers, body);
    if (!PostGet) {
      return res.status(400).json({ error: 'PostOrGet is required in the request body' });
    }
    if (!remoteUrl) {
      return res.status(400).json({ error: 'remoteUrl is required in the request body' });
    }
    if (PostGet === "POST"){
      const axiosRedirect = axios.create({
        maxRedirects: 0,
      });
      
      axiosRedirect.post(remoteUrl, body, { headers})
        .then(response => {
          res.status(response.status).json(response.data);
          return
        })
        .catch(error => {
          if (error?.response?.status) {
            res.status(error.response.status).json(error.response.data);
        } else {
            // 处理循环引用，将 error 转换为字符串
            const errorString = CircularJSON.stringify(error);
            res.json(errorString);
        }
        // console.error(error);
        return;
        });
    }else if(PostGet === "GET"){
      const axiosRedirect = axios.create({
        maxRedirects: 0,
      });
  
      axiosRedirect.get(remoteUrl, { headers })
        .then(response => {
          res.status(response.status).json(response.data);
        })
        .catch(error => {
          if (error?.response?.status) {
            res.status(error.response.status).json(error.response.data);
        } else {
            // 处理循环引用，将 error 转换为字符串
            const errorString = CircularJSON.stringify(error);
            res.json(errorString);
        }
        // console.error(error);
        return;
        });
    }

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
    return
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
