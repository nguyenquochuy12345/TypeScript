import React from 'react'
import { Outlet } from 'react-router-dom'

const WebsiteLayout = () => {
    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li>Menu</li>
                        <li>Menu</li>
                        <li>Menu</li>
                    </ul>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <nav>
                    <ul>
                        <li>Menu</li>
                        <li>Menu</li>
                        <li>Menu</li>
                    </ul>
                </nav>
            </footer>
        </div>
    )
}

export default WebsiteLayout