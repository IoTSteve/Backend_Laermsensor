const Post = require('./models/post');

function savedb(data) {
  return new Promise(async (resolve, reject) => {
    const post = new Post({
      app_id: data.app_id,
      dev_id: data.dev_id,
      payload_fields: JSON.stringify(data.payload_fields),
      metadata: JSON.stringify(data.metadata),
    });
    gconsole.log(post)

    try {
      const savedPost = await post.save()
      resolve(savedPost);
    } catch (err) {
      reject(err);
    }
  });
}

module.exports = {
  savedb
};
