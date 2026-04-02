const PlaceholderPage = ({ title }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-4xl font-extrabold text-primary mb-4">{title}</h1>
      <p className="text-on-surface-variant max-w-md">
        This is a placeholder for the {title} page. Implementation for this screen is coming soon.
      </p>
    </div>
  );
};

export const Dashboard = () => <PlaceholderPage title="Dashboard" />;
export const Profiles = () => <PlaceholderPage title="OSY Profiles" />;
export const Opportunities = () => <PlaceholderPage title="Opportunities" />;
export const Notifications = () => <PlaceholderPage title="Notifications" />;
export const Reports = () => <PlaceholderPage title="Reports" />;
