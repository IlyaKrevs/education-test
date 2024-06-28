import React from 'react'

type RadioInputType = {
    data: {
        id: number,
        text: string,
        value: number,
    }
    name: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function RadioInput({ data, name, onChange }: RadioInputType) {
    return (
        <div className="inputContainer">
            <input
                type="radio"
                name={name}
                id={data.text}
                value={data.value}
                onChange={onChange}
            />
            <label htmlFor={data.text}>{data.text}</label>
        </div>
    )
}


