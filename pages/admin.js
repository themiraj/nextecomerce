import React from 'react'
import Image from 'next/dist/client/image'
import {app} from '../firebase'
import { getAuth,signInWithEmailAndPassword } from "firebase/auth";
export default function Admin() {
    console.log(getAuth)
    return (
        <>
        <div className="container mt-5">
            <div className="text-end d-flex mb-4 pb-4 border-bottom border-bottom-1 border-secondary justify-content-between">
            <div className="input-group w-25">
                <input type="text" className="form-control" placeholder="Search user" aria-label="Search user" aria-describedby="button-addon2"/>
                <button className="btn btn-secondary" type="button" id="button-addon2"><i className="fa fa-search"></i></button>
            </div>
            <button className="btn btn-primary">Add New User</button>
            </div> 
        <table className="table table-borderless table-responsive card-1 p-4 table-hover">
        <thead>
            <tr className="border-bottom">
                <th> <span className="ml-2">ID</span> </th>
                <th> <span className="ml-2">Name</span> </th>
                <th> <span className="ml-2">Roll</span> </th>
                <th> <span className="ml-2">Email</span> </th>
                <th> <span className="ml-4">Action</span> </th>
            </tr>
        </thead>
        <tbody>
            <tr className="border-bottom">
                <td className="align-middle">
                    <div className="p-2"> <span className="d-block font-weight-bold">Tomorrow</span> <small>2:30PM</small> </div>
                </td>
                <td className="align-middle">
                    <div className="p-2 d-flex flex-row align-items-center mb-2"> <img src="https://i.imgur.com/ZSkeqnd.jpg" width="40" className="rounded-circle me-2"/>
                        <div className="d-flex flex-column ml-2"> <span className="d-block font-weight-bold">Jennifer john</span> <small className="text-muted">Jasmine Owner Reality group</small> </div>
                    </div>
                </td>
                <td className="align-middle">
                    <div className="p-2"> <span className="font-weight-bold">Ammy Song</span> </div>
                </td>
                <td className="align-middle">
                    <div className="p-2 d-flex flex-column"> <span>mohd@143</span></div>
                </td>
                <td className="align-middle">
                    <div className="p-2 icons"> <i className="fa fa-trash text-danger"></i> <i className="fa fa-edit text-success"></i> <i className="fa fa-eye text-info"></i> </div>
                </td>
            </tr>
            <tr className="border-bottom">
                <td className="align-middle">
                    <div className="p-2"> <span className="d-block font-weight-bold">Tomorrow</span> <small>3:30PM</small> </div>
                </td>
                <td className="align-middle">
                    <div className="p-2 d-flex flex-row align-items-center mb-2"> <img src="https://i.imgur.com/C4egmYM.jpg" className="rounded-circle me-2" width="40"/>
                        <div className="d-flex flex-column ml-2"> <span className="d-block font-weight-bold">David Smith</span> <small className="text-muted">Jasmine Owner Reality group</small> </div>
                    </div>
                </td>
                <td className="align-middle">
                    <div className="p-2"> <span className="font-weight-bold">David Clark</span> </div>
                </td>
                <td className="align-middle">
                    <div className="p-2 d-flex flex-column"> <span>mohd@143</span></div>
                </td>
                <td className="align-middle">
                    <div className="p-2 icons"> <i className="fa fa-trash text-danger"></i> <i className="fa fa-edit text-success"></i> <i className="fa fa-eye text-info"></i> </div>
                </td>
            </tr>
            <tr className="border-bottom">
                <td className="align-middle">
                    <div className="p-2"> <span className="d-block font-weight-bold">Tomorrow</span> <small>12:30PM</small> </div>
                </td>
                <td className="align-middle">
                    <div className="p-2 d-flex flex-row align-items-center mb-2"> <img src="https://i.imgur.com/0LKZQYM.jpg" className="rounded-circle me-2" width="40"/>
                        <div className="d-flex flex-column ml-2"> <span className="d-block font-weight-bold">Emmily johnson</span> <small className="text-muted">Jasmine Owner Reality group</small> </div>
                    </div>
                </td>
                <td className="align-middle">
                    <div className="p-2"> <span className="font-weight-bold">Mary Kingston</span> </div>
                </td>
                <td className="align-middle">
                    <div className="p-2 d-flex flex-column"> <span>mohd@143</span></div>
                </td>
                <td className="align-middle">
                    <div className="p-2 icons"> <i className="fa fa-trash text-danger"></i> <i className="fa fa-edit text-success"></i> <i className="fa fa-eye text-info"></i> </div>
                </td>
            </tr>
            <tr className="border-bottom">
                <td className="align-middle">
                    <div className="p-2"> <span className="d-block font-weight-bold">Tomorrow</span> <small>1:30PM</small> </div>
                </td>
                <td className="align-middle">
                    <div className="p-2 d-flex flex-row align-items-center mb-2"> <img src="https://i.imgur.com/hczKIze.jpg" width="40" className="rounded-circle me-2"/>
                        <div className="d-flex flex-column ml-2"> <span className="d-block font-weight-bold">Nick Jones</span> <small className="text-muted">Jasmine Owner Reality group</small> </div>
                    </div>
                </td>
                <td className="align-middle">
                    <div className="p-2"> <span className="font-weight-bold">James Smith</span> </div>
                </td>
                <td className="align-middle">
                    <div className="p-2 d-flex flex-column"> <span>mohd@143</span></div>
                </td>
                <td className="align-middle">
                    <div className="p-2 icons"> <i className="fa fa-trash text-danger"></i> <i className="fa fa-edit text-success"></i> <i className="fa fa-eye text-info"></i> </div>
                </td>
            </tr>
        </tbody>
    </table>
    <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-end">
            <li className="page-item disabled">
            <a className="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
            </li>
            <li className="page-item"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item">
            <a className="page-link" href="#">Next</a>
            </li>
        </ul>
        </nav>
</div>
        </>
    )
}
