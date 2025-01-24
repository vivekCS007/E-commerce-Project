export const registerFormControls = [
    {
      
      label: "User Name",
      name: "userName",
      placeholder: "Enter your user name",
      componentType: "input",
      type: "text",
    },
    {
        label: "Email",
      name: "email",
      
      placeholder: "Enter your email",
      componentType: "input",
      type: "email",
    },
    {
        label: "Password",
      name: "password",
     
      placeholder: "Enter your password",
      componentType: "input",
      type: "password",
    },
  ];
  
  export const loginFormControls = [
    {
        label: "Email",
      name: "email",
      
      placeholder: "Enter your email",
      componentType: "input",
      type: "email",
    },
    {
        label: "Password",
      name: "password",
     
      placeholder: "Enter your password",
      componentType: "input",
      type: "password",
    },
  ];
  
  export const addProductFormElements = [
    {
        name: "title",
      label: "Title",
     
      componentType: "input",
      type: "text",
      placeholder: "Enter product title",
    },
    {
        name: "description",
      label: "Description",
     
      componentType: "textarea",
      placeholder: "Enter product description",
    },
    {
        name: "category",
      label: "Category",
      
      componentType: "select",
      options: [
        { id: "men", label: "Men" },
        { id: "women", label: "Women" },
        { id: "kids", label: "Kids" },
        { id: "accessories", label: "Accessories" },
        { id: "footwear", label: "Footwear" },
      ],
    },
    {
        name: "brand",
      label: "Brand",
     
      componentType: "select",
      options: [
        { id: "nike", label: "Nike" },
        { id: "adidas", label: "Adidas" },
        { id: "puma", label: "Puma" },
        { id: "levi", label: "Levi's" },
        { id: "zara", label: "Zara" },
        { id: "h&m", label: "H&M" },
      ],
    },
    {
        name: "price",
      label: "Price",
     
      componentType: "input",
      type: "number",
      placeholder: "Enter product price",
    },
    {
        name: "salePrice",
      label: "Sale Price",
      
      componentType: "input",
      type: "number",
      placeholder: "Enter sale price (optional)",
    },
    {
        name: "totalStock",
      label: "Total Stock",
      
      componentType: "input",
      type: "number",
      placeholder: "Enter total stock",
    },
  ];
  