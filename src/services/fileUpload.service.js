import http from "../http-common";

const upload = async (src, dst) => {
  let formData = new FormData();

  formData.append("src", src);
  formData.append("dst", dst);

  const res = await http.post("/swap-faces", formData, {
    headers: {
      "Content-Type": "image/*",
    },
    responseType: "blob",
  });

  return URL.createObjectURL(res.data);
};

export default upload;
