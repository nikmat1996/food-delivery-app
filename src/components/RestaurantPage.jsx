import React from 'react'

export default function RestaurantPage({match}) {
    return (
        <div>
            {match.url}
        </div>
    )
}
