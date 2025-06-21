export const SectionLoading = () => {
  return (
    <div className="pt-6">
      <ul className="customer-list space-y-2">
        {Array.from({ length: 5 }).map((_, index) => (
          <li key={index}>
            <div className="customer-item flex justify-between p-3 gap-2 border-b border-gray-200">
              <span className="customer-name flex-1 bg-gray-200 h-5 rounded-md"></span>
              <span className="customer-count bg-gray-200 w-24 h-5 rounded-md"></span>
              <span className="customer-total-amount bg-gray-200 w-36 h-5 rounded-md"></span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
