interface EmptyProps {
  name: string
  description?: string
}

export const Empty = ({ name, description }: EmptyProps) => {
  return (
    <div className="flex flex-1 items-center justify-center p-6">
      <div className="space-y-2 text-center">
        <p className="text-md font-semibold text-gray-800">'{name}' 데이터가 없습니다.</p>
        {description && <p className="text-sm text-gray-500">{description}</p>}
      </div>
    </div>
  )
}
