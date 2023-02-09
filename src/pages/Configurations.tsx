import Card from "../components/Card"
import Footer from "../components/Footer"
import Formulary from "../components/Formulary"
import ParticipantsList from "../components/ParticipantsList"

const Configurations = () => {
	return (
		<Card>
			<section>
				<h2>Vamos Começar!</h2>
				<Formulary />
				<ParticipantsList />
				<Footer />
			</section>
		</Card>
	)
}

export default Configurations