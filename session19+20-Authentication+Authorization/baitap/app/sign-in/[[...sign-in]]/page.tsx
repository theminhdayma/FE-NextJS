import { SignIn } from "@clerk/nextjs";

const customAppearance = {
  elements: {
    card: "bg-white shadow-lg rounded-lg p-6",
    formFieldInput: "border-2 border-gray-300 p-2 rounded-lg",
    formButtonPrimary:
      "bg-green-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600",
    headerTitle: "text-3xl font-bold text-gray-800",
    headerSubtitle: "text-sm text-gray-500",
    footerActionLink: "text-blue-500 hover:text-blue-600",
  },
  variables: {
    colorPrimary: "#32CD32",
    colorBackground: "#F7FAFC",
    colorText: "#333333",
    fontFamily: "Inter, sans-serif",
    borderRadius: "8px",
  },
};

export default function Page() {
  return <SignIn appearance={customAppearance} />;
}
