import Organization from "@/types/organization";
import Logo from "@/components/logo";

const OrganizationCard = ({ organization }: { organization: Organization }) => {
  return (
    <div className="w-48 h-32 cursor-pointer bg-bgColor2 rounded-lg">
      <a href={organization.url} target="_blank" rel="noopener noreferrer" className="w-full h-full block">
        <Logo src={organization.logo} alt={organization.name} />
      </a>
    </div>
  );
};

export default OrganizationCard;