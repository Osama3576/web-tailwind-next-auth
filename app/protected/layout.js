export const metadata = {
  title: 'protected data',
  description: 'this is login page of my website',
};
export default function protectedLayout({ children }) {
  return <div>{children}</div>;
}
