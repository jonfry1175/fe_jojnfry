import React, { useEffect, useState } from 'react';
import axios from "axios";

const IndexMerks = () => {
    const [indexMerks, setIndexMerks] = useState([]);
    // const URL = "http://localhost:3000/api"

    const getIndexMerks = async () => {
        try {
            let temp = await axios({
                url: `http://localhost:3000/api/merk`,
                method: "GET",
            })
            console.log(temp.data)
            setIndexMerks(temp.data)
        } catch (err) {
            alert(err)
        }
    }
    useEffect(() => {
      console.log("useEffect berjalan")
      getIndexMerks()

  }, [])

  return (
    <>
            <div className="row text-center">
                <h3 className="">Products Page</h3>
                <p>Lorem ipsum is a dummy text</p>
                <hr />
            </div>

            <div className="row">
                <div className="col-12 p-2">
                    <div className="float-start">
                        <h3>Product List</h3>
                    </div>
                    <div className="float-end">
                        {/* <Link className="btn btn-sm btn-success" to="/products/create">Create Product</Link> */}
                    </div>
                </div>
                <div className="col-12">
                    <table className="table table-bordered border-dark">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {indexMerks.length !== 0 ?
                                indexMerks.map((product) => {
                                    const { id, name } = product;
                                    return (
                                        <tr key={id}>
                                            <td>
                                                <div className="row">
                                                    {/* <div className="col-3">
                                                        <img className="img-fluid" src={image} />
                                                    </div> */}
                                                    <div className="col-9">
                                                        <h3 className="text-success">{name}</h3>
                                                        {/* <h5 className="text-primary">Rp. {price}</h5>
                                                        <p>Stock: {stock} pcs</p>
                                                        <small className="badge bg-success">{User.username}</small>
                                                        <p>{Brand.name}</p> */}
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                {/* <button onClick={() => deleteProduct(id)} className="btn btn-sm btn-danger">Remove</button> */}
                                                <button className="btn btn-sm btn-info">Edit</button>
                                            </td>
                                        </tr>
                                    );
                                }) :
                                <h1>sabar</h1>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
  )
}

export default IndexMerks