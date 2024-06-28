import React from 'react'

type TextInputType = {
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function TextInput({ value, onChange }: TextInputType) {
    return (
        <div className="inputContainer">
            <input
                type="text"
                value={value}
                onChange={onChange}
            />
        </div>
    )
}
