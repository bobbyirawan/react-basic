export default function Header({ name }) {
  return (
    <h1 className="flex justify-center bg-blue">
      Try React Locally 🚀 {name ? name : "irawan"}
    </h1>
  );
}
