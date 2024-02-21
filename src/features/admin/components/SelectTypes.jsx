import React from 'react'
import useAdmin from '../../../hooks/use-admin'

function SelectTypes({ data, onChange }) {
    const { allProductTypes } = useAdmin();
    return (
        <div>
            <h1 className="text-xl">Product Type</h1>
            <div>
                <select className="select select-bordered w-full max-w-xs bg-[#F2F0F1]" name='productTypeId' value={data.productTypeId} onChange={onChange}>
                    <option disabled selected value=''>Select</option>
                    {allProductTypes.map((el) => (
                        <option className='outline-black' key={el.id} value={el.id}>
                            {el.type}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default SelectTypes