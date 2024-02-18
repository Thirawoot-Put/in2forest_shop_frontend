const appendDataWithImage = (formData, appendData) => {
  formData.append("productName", appendData.productName);
  formData.append("size", appendData.size);
  formData.append("productDetail", appendData.productDetail);
  formData.append("defect", appendData.defect);
  formData.append("price", appendData.price);
  formData.append("productTypeId", appendData.productTypeId);
  if (appendData.mainImage) {
    formData.append("mainImage", appendData.mainImage);
  }
};

export default appendDataWithImage;
