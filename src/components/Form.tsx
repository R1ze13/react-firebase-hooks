import React from "react"

export const Form: React.FC = () => {
  return (
    <form>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Enter your note"
        />
      </div>
    </form>
  )
}
