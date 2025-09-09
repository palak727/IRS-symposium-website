type ToastProps = {
  title?: string
  description?: string
  variant?: "default" | "destructive"
}

export function useToast() {
  return {
    toast: (props: ToastProps) => {
      // Simple implementation - in a real app you'd use a proper toast library
      console.log(`Toast: ${props.title} - ${props.description}`)
      if (props.variant === "destructive") {
        alert(`Error: ${props.title} - ${props.description}`)
      }
    }
  }
}
