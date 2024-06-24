import { useParams } from "react-router"

export default function QuizEditor() {
	const { qid } = useParams()
	return (
		<div>
			<h1> Quiz Editor </h1>
			{"This pages qid = " + qid}
		</div>
	)
}