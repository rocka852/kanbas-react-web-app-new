import ClickEvent from "./ClickEvent"
import PassingDataOnEvent from "./PassingDataOnEvent"
import PassingFunctions from "./PassingFunctions"
import EnentObject from "./EnentObject"
import Counter from "./Counter"
import BooleanStateVariables from "./BooleanStateVariables"
import StringStateVariables from "./StringStateVariables"
import DateStateVariable from "./DateStateVariable"
import ObjectStateVariable from "./ObjectStateVariable"
import ArrayStateVariable from "./ArrayStateVariable"
import ParentStateComponent from "./ParentStateComponent"
import ReduxExamples from "./ReduxExamples"

export default function Lab4() {
	function sayHello() {
		alert("Hello");
	}

	return ( 
		<div>
			<h2> Lab4 </h2>
			<ClickEvent />
			
			<PassingDataOnEvent />
			{/*without <> or <div>, this return will report error, comment outside div will 		also report error*/}
			
			{/*<PassingFunctions />*/}
			{/*Error Property 'theFunction' is missing in type '{}' but required in type 		'{ theFunction: () => void; }'*/}
			<PassingFunctions theFunction={sayHello}/>

			<EnentObject />
			<Counter />
			<BooleanStateVariables/>
			<StringStateVariables/>
			<DateStateVariable/>
			<ObjectStateVariable/>
			<ArrayStateVariable/>

			<ParentStateComponent/>
			<ReduxExamples/>
		</div>
		/*comment outside div*/
);}



