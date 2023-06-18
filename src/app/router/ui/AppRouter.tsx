import { Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import { routeConfig } from "shared/config/routeConfig/routeConfig"

const AppRouter: React.FC = () => {
  return <Suspense fallback={<p>Загрузка...</p>}>
    <Routes>
      {Object.values(routeConfig).map(({ element, path }) => {
        return <Route key={path}
          path={path}
          element={<div className="page-wrapper">{element}</div>} />
      })}
    </Routes>
  </Suspense>
}

export default AppRouter;