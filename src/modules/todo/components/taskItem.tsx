import * as React from 'react'

export interface ItaskItem {
    title?: string
    children: React.ReactNode
    id?: any
}

export function TaskItem({children, title}: ItaskItem) {
    return (
        <div>
            {title}: {children}
        </div>
    )
}