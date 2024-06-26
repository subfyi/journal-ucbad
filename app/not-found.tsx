import React from "react";
import {PageHeader} from "@/layout/Breadcrumb";
import NavOne from "@/components/NavOne";

export default function NotFoundPage() {
    return <>
        <NavOne/>
        <PageHeader title={"404"}/>
        <div className='container my-5'>
            <div className='row service-wrap my-5'>
                <div className='col my-5'>
                    <p className='my-5'>
                        Üzgünüz, bir hata oluştu, istenen sayfa bulunamadı!
                    </p>
                </div>
            </div>
        </div>
    </>
}

