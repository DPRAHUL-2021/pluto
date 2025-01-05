import React from 'react'
import Image from 'next/image';

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='flex min-h-screen'>
            <section className='bg-brand p-10'>
                <div>
                    <Image src="/favicon.ico" alt="Pluto" width={16} height={16} className="h-auto"/>
                    
                    <div className='space-y-5'>
                        <h1 className='h1'>Efficiently organize and access your files</h1>
                        <p className='body-1'>This is a space to safely keep all your documents.</p>

                    </div>
                </div>
            </section>
            {children}
        </div>
    )
}

export default layout