import { format } from "date-fns";
import { usePostHog } from "posthog-js/react";
import { Button } from "../../components/ui/button";
import { api } from "../../utils/api";
import { UtensilsCrossed } from "lucide-react";

type ClearDayProps = { date: Date; closeDialog: () => void };

export const ClearDay = ({ date, closeDialog }: ClearDayProps) => {
  const posthog = usePostHog();
  const utils = api.useUtils();
  const unplanDayMutation = api.plan.unplanDay.useMutation({
    onSuccess: (res) => {
      void utils.plan.plannedDinners.invalidate();
      posthog.capture("clear day", { day: format(res.deleted.date, "EEE do") });
      closeDialog();
    },
  });
  return (
    <Button
      variant={"outline"}
      className="w-24"
      onClick={() =>
        unplanDayMutation.mutate({
          date,
          secret: localStorage.getItem("sulten-secret"),
        })
      }
      disabled={unplanDayMutation.isLoading}
    >
      {!unplanDayMutation.isLoading ? (
        "Clear day"
      ) : (
        <UtensilsCrossed className="animate-spin" size={14} />
      )}
    </Button>
  );
};
