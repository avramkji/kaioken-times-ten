import { Router, Route, Link, useState } from "kaioken"
import Home from "./components/Home/Home"

export function App() {
  return (
    <div className="text-center h-screen">
      <nav className="flex gap-2 justify-center">
        <Link className="p-2 text-blue-500" to="/">
          Home
        </Link>
        <Link className="p-2 text-blue-500" to="/counter">
          Counter
        </Link>
      </nav>
      <main className="p-2 overflow-hidden">
        <Router>
          <Route
            path="/"
            element={Home}
          />
        </Router>
      </main>
    </div>
  )
}
