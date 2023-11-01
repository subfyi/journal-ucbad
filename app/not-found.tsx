import NavOne from "@/components/NavOne";

import React from "react";
import {PageHeader} from "@/layout/Breadcrumb";

function NotFoundPage() {
    return <>
        <NavOne/>
        <PageHeader title={"404"}/>
        <div className="container">
            <div className="row center-align m-5">
                <div className="col-md-12 m-5">
                    <div className=" m-5">
                        <div className="error-details">
                            Üzgünüz, bir hata oluştu, istenen sayfa bulunamadı!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default NotFoundPage