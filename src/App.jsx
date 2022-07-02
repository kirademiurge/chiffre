import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CreatePage } from "./pages/CreatePage";
import { ListPage } from "./pages/ListPage";
import { MyNavbar } from "./components/MyNavbar";
import { TranslatePage } from "./pages/TranslatePage";
import { SecretKeyCnx } from "./context/SecretKeyCnx";
import { useState } from "react";

export const App = () => {

	const [secretKey, setSecretKey] = useState("")

	return (
		<BrowserRouter>
			<SecretKeyCnx.Provider value={[secretKey, setSecretKey]}>
				<MyNavbar />
				<Routes>
					<Route path="/" element={<TranslatePage />} />
					<Route path="/create" element={<CreatePage />} />
					<Route path="list" element={<ListPage />} />
					<Route path="*" element={<Navigate to="/" />} />
				</Routes>
			</SecretKeyCnx.Provider>
		</BrowserRouter>
	)
}