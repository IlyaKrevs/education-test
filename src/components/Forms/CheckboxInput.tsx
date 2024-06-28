import React from 'react'

type CheckboxInputType = {
    data: {
        id: number,
        text: string,
        value: number,
    },
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

export default function CheckboxInput({ data, onChange }: CheckboxInputType) {
    return (
        <div className="inputContainer">
            <input
                type="checkbox"
                id={data.text}
                value={data.value}
                onChange={onChange}
            />
            <label htmlFor={data.text}>{data.text}</label>
        </div>
    )
}

