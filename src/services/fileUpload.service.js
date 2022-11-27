import http from "../http-common";

const upload = async (src, dst) => {
  let formData = new FormData();

  formData.append("src", src);
  formData.append("dst", dst);

  const res = await http.post("/swap-faces", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return URL.createObjectURL(await res.data);
};

export default upload;
