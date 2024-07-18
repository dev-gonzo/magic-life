import { RouteObject, createBrowserRouter } from 'react-router-dom';
import { Wrapper } from '../components/wrapper';
import { Error404 } from '../pages/error404';
import { LayoutMain } from '../layouts';
import { Routes } from '../@types';

// eslint-disable-next-line react-refresh/only-export-components, @typescript-eslint/ban-types
const ROUTES: Record<string, { routes: Function }> = import.meta.glob(
  '/src/pages/**/routes.tsx',
  {
    eager: true,
  },
);

export const useRouter = () => {
  const pageRoutes: RouteObject[] = [];
  const loadRoutes = async () => {
    for (const path in ROUTES) {
      const routes = ROUTES[path].routes();
      pageRoutes.push(
        ...routes.map((item: Routes) => {
          const Element = item?.element;
          return {
            path: item?.path,
            element: (
              <LayoutMain>
                <Wrapper>
                  <Element />
                </Wrapper>
              </LayoutMain>
            ),
          };
        }),
      );
    }
  };

  loadRoutes();

  const router = createBrowserRouter([
    ...pageRoutes,
    {
      path: '*',
      element: (
        <LayoutMain>
          <Wrapper>
            <Error404 />
          </Wrapper>
        </LayoutMain>
      ),
    },
  ]);

  return { router };
};
