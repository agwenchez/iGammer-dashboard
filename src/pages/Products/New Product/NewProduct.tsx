import React, { useRef, useState } from "react";
import { BiImageAdd } from "react-icons/bi";
import { FiUpload, FiUploadCloud } from "react-icons/fi";
import Form from "../../../components/Form/Form";
import styles from "./newproduct.module.scss";
import { addNewProductFields } from "../../../@types";
import { useAddNewProductMutation } from "../../../app/services";

const NewProduct = () => {
  const [image, setImage] = useState<FormData>(new FormData()); //store image in state
  const [filename, setFileName] = useState<File>(); // enables sharing of file property details including name
  const [previewUrl, setPreviewUrl] = useState(""); // enable image preview
  const [addNewProduct] = useAddNewProductMutation();
  const [formFieldsData, setFormFieldsData] = useState<addNewProductFields>({
    product_name: "",
    categories: [""],
    weight: "",
    price: "",
    compare_price: "",
    description: "",
    gender: "",
    tags: [""],
  });

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const value = e.target.value;
    // console.log("Value", value)
    setFormFieldsData({ ...formFieldsData, [e.target.name]: value });
  };
  // console.log("Re-rendered", errors)

  const handleChangeImage = (e: any) => {
    // e.preventDefault();
    const imagefile = e.target.files[0];
    const formData = new FormData();
    formData.append("file", imagefile, imagefile.name);

    setImage(formData);
    if (e.target.files) {
      setFileName(e.target.files[0]);
      setPreviewUrl(URL.createObjectURL(imagefile));
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form fields", await formFieldsData);
    try {
      const result = await addNewProduct(formFieldsData).unwrap();
      console.log("Result", result);
    } catch (error) {
      console.log("Error", error);
    }
  };
  return (
    <>
      <div className={styles.newproduct_container}>
        <h3>CREATE NEW PRODUCT</h3>
        <form className={styles.form_container} onSubmit={handleSubmit}>
          <section className={styles.left_container}>
            {/* <p>PRODUCT DETAILS</p> */}
            <div className={styles.input_group}>
              <label htmlFor="product name">Product Name</label>
              <input
                type="text"
                name="product_name"
                id="product_name"
                placeholder="Product name"
                onChange={handleChange}
                value={formFieldsData.product_name}
                required
                autoFocus
              />
            </div>
            <section className={styles.category}>
              <div className={styles.category_input_group}>
                <label htmlFor="category">Category</label>
                <select
                  // multiple
                  name="category"
                  id="category"
                  className={styles.category_input}
                  onChange={handleChange}
                  value={formFieldsData.categories}
                  required
                >
                  <option value="" disabled>
                    Select category
                  </option>
                  <option value="hair">Hair care</option>
                  <option value="lightener">Lightener</option>
                  <option value="sexual_health">Sexual health</option>
                </select>
              </div>
              <div className={styles.gender_input_group}>
                <label htmlFor="gender">Gender</label>
                <select
                  name="gender"
                  id="gender"
                  className={styles.gender_input}
                  onChange={handleChange}
                  value={formFieldsData.gender}
                  required
                >
                  <option value="" disabled>
                    Select gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </section>
            <div className={styles.input_group}>
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                id="description"
                cols={120}
                rows={10}
                placeholder="Description"
                onChange={handleChange}
                value={formFieldsData.description}
                required
              ></textarea>
            </div>
          </section>
          <div className={styles.right_container}>
            {/* <div className={styles.image_group_container}>
              <label htmlFor="product name">Product Images</label>
              <div className={styles.image_group}>
                {Array(1)
                  .fill(0)
                  .map((index) => (
                    <>
                      <label
                        htmlFor="image-upload"
                        className={styles.upload_container}
                      >
                        <input
                          key={index}
                          type="file"
                          name="image-upload"
                          id="image-upload"
                          hidden={true}
                          required
                          aria-required
                        />
                        <BiImageAdd
                          size={"1.5em"}
                          className={styles.upload_icon}
                        />
                        <p> Upload photo </p>
                      </label>
                    </>
                  ))}
              </div>
            </div> */}
            <div className={styles.package_size_wrapper}>
              <div className={styles.input_group}>
                <label htmlFor="weight">Weight(g)</label>
                {/* <span>Ksh</span> */}
                <input
                  type="text"
                  name="weight"
                  id="weight"
                  placeholder="Weight"
                  onChange={handleChange}
                  value={formFieldsData?.weight}
                  required
                />
              </div>
              <div className={styles.input_group}>
                <label htmlFor="tag">Tag</label>
                <select
                  multiple
                  name="tag"
                  id="tag"
                  className={styles.gender_input}
                  onChange={handleChange}
                  value={formFieldsData.tags}
                  required
                >
                  <option value="" disabled>
                    Select a tag
                  </option>
                  <option value="3-in-1">3 in 1 solution</option>
                  <option value="skin-wants">all your skin wants</option>
                </select>
              </div>
            </div>
            <div className={styles.package_size_wrapper}>
              <div className={styles.input_group}>
                <label htmlFor="price">Price</label>
                {/* <span>Ksh</span> */}
                <input
                  type="text"
                  name="price"
                  id="price"
                  placeholder="Price"
                  onChange={handleChange}
                  value={formFieldsData.price}
                  required
                />
              </div>
              <div className={styles.input_group}>
                <label htmlFor="compare_price">Compare at price</label>
                <input
                  type="text"
                  name="compare_price"
                  id="compare_price"
                  placeholder="Compare price"
                  onChange={handleChange}
                  value={formFieldsData.compare_price}
                  required
                />
              </div>
            </div>
          </div>
          <button type="submit" className={styles.add_button}>
            <span>Add product</span>
          </button>
        </form>
      </div>
    </>
  );
};

export default NewProduct;
