//optionalchaining

const products = {
      product_id: 1,
      price: 19.99,
      product_name: "Wireless Mouse",
      // Nested object example
    //   specifications: {
    //     color: "Black",
    //     weight: "120g",
    //     dimensions: "10x5x3cm"
    //   }
    }


    console.log(products.product_id);
    
    // console.log(products.specifications.color);  //will give error if specifications will be undefined as we cannot read properties of undefined
    
    
    //to avoid this we can use (?.) 

    //console.log(products?.specifications?.color);



    