export const ListPage = () => {
	return (
		<div className="container mx-auto px-12 overflow-x-auto">
			<table className="table w-full">
				<thead className="select-none">
					<tr>
						<th>№</th>
						<th>Title</th>
						<th>Created date</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>

					<tr className="hover">
						<th>1</th>
						<td>my encrypted message</td>
						<td>17 Jun 2022</td>
						<td>delete</td>
					</tr>

					<tr className="hover">
						<th>2</th>
						<td>watashi wa kira desu</td>
						<td>21 Oct 2024</td>
						<td>delete</td>
					</tr>

				</tbody>
			</table>
		</div>
	)
}